/**
 * JAMR RESTAURANT - مطعم جمر الفاخر (قليوب)
 * 5-Star Clean Navigation: الرئيسية • المنيو • قصتنا • العنوان
 * Phone & WhatsApp: 01016121744 (Local) / +201016121744
 * Google Maps Location: https://maps.app.goo.gl/KUog1AhFCSzEQLdx9
 * Facebook: https://www.facebook.com/share/1Fbtzw8py8/
 */

const RESTAURANT_PHONE = '01016121744';
const RESTAURANT_WHATSAPP = '201016121744';
const RESTAURANT_LOCATION = 'قليوب، محافظة القليوبية';
const RESTAURANT_MAP_URL = 'https://maps.app.goo.gl/KUog1AhFCSzEQLdx9';

// 6 Core Specialities
const categoriesData = [
  {
    id: 'grills',
    nameAr: 'مشويات الفحم الملكية (Specialities)',
    nameEn: 'Royal Charcoal Grills',
    icon: 'fa-fire',
    badge: 'تخصص 5 نجوم ⭐',
    desc: 'كباب جمر الملكي، أوصال لحم ضأن وعجل بلدي طازج يومياً، ريش مشوية على فحم السنديان الطبيعي، وشيش طاووق مدخن بأعلى معايير الجودة.'
  },
  {
    id: 'steaks-meats',
    nameAr: 'لحوم وستيك جمر الخاصة',
    nameEn: 'Prime Cuts & Steaks',
    icon: 'fa-drumstick-bite',
    badge: 'لحوم بلدي طازجة',
    desc: 'قطع لحم بلدي مختارة بعناية فائقة ومسفوعة على شبك الجمر الساخن مع الزبدة والأعشاب ونكهة الحطب الطبيعي الساحرة.'
  },
  {
    id: 'family-platters',
    nameAr: 'صواني ومشاركات جمر VIP',
    nameEn: 'VIP Family Feasts',
    icon: 'fa-crown',
    badge: 'صواني الملوك',
    desc: 'صواني مشويات مشكلة عملاقة للعائلات والمناسبات الفاخرة، تقدم مع الأرز البسمتي بالخلطة والمكسرات والمقبلات والخبز الطازج.'
  },
  {
    id: 'sandwiches-burgers',
    nameAr: 'ساندوتشات وبيرجر جمر المدخن',
    nameEn: 'Smoked Gourmet Sandwiches',
    icon: 'fa-burger',
    badge: 'شواء فوري',
    desc: 'ساندوتشات كباب وكفتة على الفحم في خبز طازج، وبيرجر لحم مدخن بالجبنة الذائبة وصوصات جمر الحصرية.'
  },
  {
    id: 'appetizers',
    nameAr: 'مقبلات وسلطات شرقية فاخرة',
    nameEn: 'Artisanal Appetizers & Salads',
    icon: 'fa-bowl-food',
    badge: 'طازجة مع كل طلب',
    desc: 'حمص كريمي باللحمة والصنوبر، طحينة مدخنة، بابا غنوج على الحطب، سلطات بلدي وخضراء طازجة، وثومية مميزة.'
  },
  {
    id: 'drinks-desserts',
    nameAr: 'مشروبات وحلويات جمر المنعشة',
    nameEn: 'Beverages & Sweets',
    icon: 'fa-glass-water',
    badge: 'ضيافة ملكية',
    desc: 'شاي على الفحم والنعناع برائحة الحطب، حلويات شرقية ومشروبات باردة منعشة تناسب أشهى وجبات المشويات.'
  }
];

// ============================================================================
// EMBER CANVAS
// ============================================================================
function initEmberCanvas() {
  const canvas = document.getElementById('ember-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || 500;
  }
  window.addEventListener('resize', resize);
  resize();

  class Ember {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 20;
      this.size = Math.random() * 2.8 + 1.2;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 1;
      this.alpha = Math.random() * 0.7 + 0.3;
      this.color = Math.random() > 0.4 ? '#ff5722' : (Math.random() > 0.5 ? '#ffb703' : '#d62828');
      this.decay = Math.random() * 0.006 + 0.003;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.02) * 0.4;
      this.alpha -= this.decay;
      if (this.alpha <= 0 || this.y < -10) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.shadowBlur = this.size * 3;
      ctx.shadowColor = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const count = window.innerWidth < 768 ? 20 : 45;
  for (let i = 0; i < count; i++) {
    const p = new Ember();
    p.y = Math.random() * height;
    particles.push(p);
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// ============================================================================
// RENDER CATEGORIES
// ============================================================================
function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  container.innerHTML = categoriesData.map(cat => `
    <div class="category-card" data-cat-id="${cat.id}">
      <div>
        <div class="cat-header">
          <div class="cat-icon-frame">
            <i class="fas ${cat.icon}"></i>
          </div>
          <span class="cat-tag">${cat.badge}</span>
        </div>
        <h4 class="cat-title-ar">${cat.nameAr}</h4>
        <div class="cat-title-en">${cat.nameEn}</div>
        <p class="cat-desc">${cat.desc}</p>
      </div>
      <button class="btn-cat-order" onclick="selectCategoryForOrder('${cat.nameAr}')">
        <i class="fab fa-whatsapp"></i> اطلب من هذا القسم عبر واتساب
      </button>
    </div>
  `).join('');
}

// Pre-fill selection
function selectCategoryForOrder(categoryName) {
  const orderInput = document.getElementById('order-items-input');
  const orderSection = document.getElementById('order');
  
  if (orderInput) {
    if (!orderInput.value.includes(categoryName)) {
      orderInput.value = orderInput.value.trim() ? `${orderInput.value}\n- طلب من قسم: ${categoryName}` : `طلب من قسم: ${categoryName}\n`;
    }
    orderInput.focus();
  }

  if (orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ============================================================================
// WHATSAPP DIRECT ORDER
// ============================================================================
function handleWhatsAppOrder(e) {
  e.preventDefault();

  const name = document.getElementById('cust-name')?.value.trim() || 'عميل مميز';
  const phone = document.getElementById('cust-phone')?.value.trim() || 'غير محدد';
  const orderType = document.querySelector('input[name="order_service"]:checked')?.value || 'دليفري وتوصيل للمنزل';
  const address = document.getElementById('cust-address')?.value.trim() || '';
  const orderDetails = document.getElementById('order-items-input')?.value.trim();

  if (!orderDetails) {
    alert('يرجى كتابة ما ترغب بطلبه أولاً!');
    document.getElementById('order-items-input')?.focus();
    return;
  }

  let msg = `👑 *طلب فاخر من موقع مطعم جمر (JAMR) - فرع قليوب* 👑\n\n`;
  msg += `👤 *اسم العميل:* ${name}\n`;
  msg += `📱 *رقم الهاتف:* ${phone}\n`;
  msg += `🛵 *نوع الخدمة:* ${orderType}\n`;

  if (address) {
    msg += `📍 *عنوان التوصيل (قليوب وما حولها):* ${address}\n`;
  }

  msg += `----------------------------------------\n`;
  msg += `🍽️ *تفاصيل الطلب:*\n${orderDetails}\n`;
  msg += `----------------------------------------\n`;
  msg += `\nنرجو تأكيد استلام الطلب والوقت المتوقع للتوصيل. شكراً لمطعم جمر!`;

  const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// Sticky Header scroll
function setupStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initEmberCanvas();
  renderCategories();
  setupStickyHeader();

  document.getElementById('whatsapp-direct-form')?.addEventListener('submit', handleWhatsAppOrder);
});

// ============================================================================
// QR CODE MODAL & DOWNLOAD LOGIC
// ============================================================================
function initQRCodeModal() {
  const qrContainer = document.getElementById('live-qr');
  if (qrContainer) {
    qrContainer.innerHTML = `
      <img src="assets/images/jamr-qr-code.png" alt="كود QR مطعم جمر" style="width: 220px; height: 220px; display: block; margin: 0 auto; background: #ffffff; padding: 10px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
    `;
  }

  const urlInput = document.getElementById('qr-custom-url');
  if (urlInput) {
    urlInput.value = 'https://jamr-restraunt-bs5m.vercel.app';
    urlInput.readOnly = true;
  }
}

function openQRModal() {
  const modal = document.getElementById('qr-modal');
  if (modal) {
    modal.classList.add('open');
    initQRCodeModal();
  }
}

function closeQRModal() {
  document.getElementById('qr-modal')?.classList.remove('open');
}

function printQR() {
  window.print();
}

function downloadQR(format = 'png') {
  const a = document.createElement('a');
  a.href = format === 'svg' ? 'assets/images/jamr-qr-code.svg' : 'assets/images/jamr-qr-code.png';
  a.download = `jamr-restaurant-qr.${format === 'svg' ? 'svg' : 'png'}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Bind QR trigger buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.open-qr-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQRModal();
    });
  });

  document.getElementById('qr-modal-close')?.addEventListener('click', closeQRModal);
  document.getElementById('qr-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'qr-modal') closeQRModal();
  });
});
