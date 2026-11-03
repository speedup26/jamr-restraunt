const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = 'https://jamr-restraunt-bs5m.vercel.app';

async function generate() {
  const imagesDir = path.join(__dirname, '..', 'assets', 'images');
  const brainDir = 'C:\\Users\\CompuMarts\\.gemini\\antigravity\\brain\\65824958-0c63-49ca-bda2-3c4f77e67c0c';

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Generate standard PNG (high resolution 1000px, 4-module quiet zone, high error correction)
  const pngPath = path.join(imagesDir, 'jamr-qr-code.png');
  await QRCode.toFile(pngPath, url, {
    errorCorrectionLevel: 'H',
    type: 'png',
    margin: 4,
    width: 1000,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });
  console.log('Created:', pngPath);

  // Generate standard SVG
  const svgPath = path.join(imagesDir, 'jamr-qr-code.svg');
  const svg = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 4,
    width: 1000,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });
  fs.writeFileSync(svgPath, svg, 'utf8');
  console.log('Created:', svgPath);

  // Also copy to artifacts directory so it can be viewed in the artifact and chat
  if (fs.existsSync(brainDir)) {
    fs.copyFileSync(pngPath, path.join(brainDir, 'jamr-qr-code.png'));
    fs.copyFileSync(svgPath, path.join(brainDir, 'jamr-qr-code.svg'));
    console.log('Copied to artifact directory:', brainDir);
  }
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
