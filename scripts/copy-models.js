import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'node_modules', '@vladmandic', 'face-api', 'model');
const destDir = path.join(projectRoot, 'public', 'models');

try {
  if (fs.existsSync(srcDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    fs.cpSync(srcDir, destDir, { recursive: true });
    console.log(`[FaceMatch] Successfully copied face-api models to ${destDir}`);
  } else {
    console.warn(`[FaceMatch] Source model directory not found at: ${srcDir}`);
  }
} catch (err) {
  console.error('[FaceMatch] Error copying face-api models:', err);
}
