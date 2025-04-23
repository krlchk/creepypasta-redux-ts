import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname эмуляция
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'story.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) return console.error('Error reading file:', err);

  const formatted = data
    .trim()
    .split(/\r?\n\s*\r?\n/)
    .map(paragraph => paragraph.trim().replace(/"/g, '\\"'))
    .join('\\n\\n');

  const jsonReady = `"${formatted}"`;

  console.log('\n--- JSON Ready Text ---\n');
  console.log(jsonReady);
});
