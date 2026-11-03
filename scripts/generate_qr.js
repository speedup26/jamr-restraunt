const fs = require('fs');
const path = require('path');

const qrCodeLib = fs.readFileSync(path.join(__dirname, '../assets/js/qrcode.js'), 'utf8');

const vm = require('vm');
const sandbox = { window: {}, document: {}, console: console };
sandbox.global = sandbox.window;
vm.createContext(sandbox);
vm.runInContext(qrCodeLib, sandbox);

function generate(url, filename) {
  const model = new sandbox.window.QRCodeModel(0, 2);
  model.addData(url);
  model.make();

  const count = model.getModuleCount();
  const size = 600;
  const padding = 60;
  const cellSize = (size - padding * 2) / count;

  let rects = '';
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (model.isDark(r, c)) {
        const x = Math.round(padding + c * cellSize);
        const y = Math.round(padding + r * cellSize);
        const w = Math.ceil(cellSize);
        const h = Math.ceil(cellSize);
        rects += `  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#080a0d" />\n`;
      }
    }
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 760" width="600" height="760">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffb703"/>
      <stop offset="100%" stop-color="#ff5722"/>
    </linearGradient>
  </defs>

  <!-- Luxury Dark Card Frame -->
  <rect width="600" height="760" rx="32" fill="#11141a" stroke="#ffb703" stroke-width="4"/>

  <!-- Top Title -->
  <text x="300" y="65" font-family="'Cairo', sans-serif, Arial" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle">مطعم جمر</text>
  <text x="300" y="102" font-family="'Cairo', sans-serif, Arial" font-size="18" font-weight="700" fill="#ffb703" text-anchor="middle">امسح الكود لفتح الويب سايت والمنيو</text>

  <!-- White QR Container -->
  <g transform="translate(0, 45)">
    <rect x="50" y="80" width="500" height="500" rx="24" fill="#ffffff" stroke="#ffb703" stroke-width="2"/>
    <g transform="translate(0, 30)">
    ${rects}
    </g>
  </g>

  <!-- Bottom Info -->
  <text x="300" y="680" font-family="'Cairo', sans-serif, Arial" font-size="22" font-weight="800" fill="#ffffff" text-anchor="middle">فرع قليوب • دليفري: 010 1612 1744</text>
  <text x="300" y="715" font-family="'Cairo', sans-serif, Arial" font-size="16" font-weight="600" fill="#94a3b8" text-anchor="middle">أصالة المشويات على الفحم الحقيقي</text>
</svg>`;

  fs.writeFileSync(filename, svg, 'utf8');
  console.log('Generated successfully:', filename);
}

generate('https://maps.app.goo.gl/KUog1AhFCSzEQLdx9', path.join(__dirname, '../assets/images/jamr-qr-code.svg'));
