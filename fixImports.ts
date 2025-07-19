// fixImports.ts
import fs from 'fs';
import path from 'path';

function fixImportsInFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fixed = content.replace(/@\/pages\/components\//g, '@/components/');

  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    // eslint-disable-next-line no-console
    console.log(`✅ مسیر اصلاح شد: ${filePath}`);
  }
}

function walkDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      fixImportsInFile(fullPath);
    }
  }
}

walkDir('./src');
