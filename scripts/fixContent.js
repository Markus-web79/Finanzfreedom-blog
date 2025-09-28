name: Blog Pipeline

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  blog:
    runs-on: ubuntu-latest

    steps:
      # 1️⃣ Repository auschecken
      - name: Checkout repository
        uses: actions/checkout@v4

      # 2️⃣ Node.js installieren
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      # 3️⃣ Abhängigkeiten installieren
      - name: Install dependencies
        run: npm ci || npm install

      # 4️⃣ Rechtschreibprüfung & Auto-Fix
      - name: Check & Fix Content
        run: |
          echo "🔍 Starte Rechtschreibprüfung & Auto-Fix..."
          node scripts/fixContent.js || echo "Keine Änderungen gefunden"
          git config --global user.name "github-actions[bot]"
          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add content || echo "Nichts zu committen"
          git commit -m "🔍 Auto-Check: Content korrigiert" || echo "Keine Änderungen gefunden"
          git push || echo "Kein Push notwendig"

      # 5️⃣ Fehlende YAML-Header (Frontmatter) hinzufügen
      - name: Fix Frontmatter (Titles)
        run: |
          echo "📝 Füge fehlende Titel & Meta-Header hinzu..."
          node scripts/fixFrontmatter.js
          git config --global user.name "github-actions[bot]"
          git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add content
          git commit -m "📝 Frontmatter hinzugefügt" || echo "Keine Änderungen"
          git push || echo "Kein Push notwendig"

      # 6️⃣ Deploy zu Vercel (Prod)
      - name: Deploy to Vercel (prod)
        run: |
          npx vercel --prod --yes -A vercel.json \
            --token=${{ secrets.VERCEL_TOKEN }} \
            --scope=${{ secrets.VERCEL_SCOPE }} > deployment.txt
          echo "url=$(grep -o 'https://[^ ]*vercel.app' deployment.txt | tail -n1)" >> $GITHUB_ENV

      # 7️⃣ URL anzeigen
      - name: Show Deployment URL
        run: echo "🚀 Live: ${{ env.url }}"
