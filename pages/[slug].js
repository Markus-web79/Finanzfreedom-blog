// Robust: alle Markdown-Dateien rekursiv sammeln
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    const entryPath = path.join(dirPath, entry.name);

    // Falls Unterordner → weiter durchsuchen
    if (entry.isDirectory()) {
      getAllMarkdownFiles(entryPath, arrayOfFiles);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      arrayOfFiles.push(entryPath);
    }
  });

  return arrayOfFiles;
}

// Robust: erzeugt alle Pfade für getStaticPaths()
export async function getStaticPaths() {
  const files = getAllMarkdownFiles(path.join('content'));
  const paths = [];

  files.forEach((filePath) => {
    try {
      // relativen Pfad berechnen (ohne "content/" und ".md")
      const relative = filePath.replace(/^content[\\/]/, '').replace(/\.md$/, '');
      const segments = relative.split(/[\\/]/).filter(Boolean);

      // Nur hinzufügen, wenn Pfad gültig ist
      if (segments.length > 0) {
        paths.push({ params: { slug: segments } });
      }
    } catch (err) {
      console.error('⚠️ Fehlerhafte Datei in getStaticPaths:', filePath, err);
    }
  });

  return {
    paths,
    fallback: false,
  };
}
