// Rekursive Funktion zum Sammeln aller Markdown-Dateien
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, arrayOfFiles);
    } else if (filePath.endsWith('.md')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

export async function getStaticPaths() {
  const files = getAllMarkdownFiles(path.join('content'));

  const paths = files.map((filePath) => {
    const slug = path.basename(filePath, '.md');
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
