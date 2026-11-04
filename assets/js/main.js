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

// 6 Core Specialities (Turkish Grills & Gourmet Fast Food: Crepe, Burger, Pasta)
const categoriesData = [
  {
    id: 'turkish-grills',
    nameAr: 'المشويات التركية على الجمر (Turkish Grills)',
    nameEn: 'Authentic Turkish Charcoal Grills',
    icon: 'fa-fire-flame-curved',
    badge: 'تخصص تركي أصيل ⭐',
    desc: 'كباب أضنة وأورفا على الأسياخ التركية العريضة، شيش طاووق تركي بتتبيلة الزبادي والأعشاب، كفتة تركية مشوية على الفحم، أوصال وريش ضأن وعجل بلدي طازج على فحم السنديان الطبيعي.'
  },
  {
    id: 'crepes',
    nameAr: 'كريب جمر الحادق والفاخر (Crepes)',
    nameEn: 'Gourmet Crispy Crepes',
    icon: 'fa-scroll',
    badge: 'قرمشة وحشوات غنية 🔥',
    desc: 'كريب جمر المقرمش بأشهى الحشوات: كريب كرسبي زنجر، كريب شاورما فراخ ولحم، كريب كفتة وسجق إسكندراني بلدي، كريب فاهيتا، وكريب مكس لحوم وجبن موتزاريلا سايحة وغنية.'
  },
  {
    id: 'burgers',
    nameAr: 'برجر جمر المشوي على الفحم (Burgers)',
    nameEn: 'Charcoal & Smash Flame Burgers',
    icon: 'fa-burger',
    badge: 'لحم بلدي 100% صوصات خاصة 🍔',
    desc: 'برجر لحم بلدي طازج مسفوع بنكهة الجمر المدخن، سنجل ودبل مع صوصات جمر الخاصة، جبنة شيدر كريمية ذائبة، حلقات بصل مقرمشة، وبرجر تشيكن كرسبي سوبريم في خبز بريوش طازج.'
  },
  {
    id: 'pastas',
    nameAr: 'باستا جمر الإيطالية الفاخرة (Pastas)',
    nameEn: 'Artisanal Pastas & Oven Dishes',
    icon: 'fa-plate-wheat',
    badge: 'وايت صوص ومكس جبن 🧀',
    desc: 'باستا وايت صوص كريمية (ألفريدو) بقطع الدجاج المشوي والمشروم، باستا ريد صوص إيطالية بالأعشاب، باستا مكس صوص بينك، وطواجن مكرونة فرن بجبنة الموتزاريلا واللحوم البلدية الساخنة.'
  },
  {
    id: 'family-platters',
    nameAr: 'صواني وعزومات جمر التركية VIP',
    nameEn: 'VIP Turkish Family Feasts',
    icon: 'fa-crown',
    badge: 'صواني الملوك واللمة 👑',
    desc: 'صواني مشويات تركية مشكلة عملاقة تجمع الكباب والشيش والأوصال، مع أرز بسمتي بالخلطة والمكسرات، الخبز التركي الطازج، صوصات الشواء، والمقبلات المتنوعة للعائلات والعزومات الفاخرة.'
  },
  {
    id: 'appetizers-sides',
    nameAr: 'المقبلات، السلطات والبطاطس المقرمشة',
    nameEn: 'Turkish Mezze, Fries & Salads',
    icon: 'fa-bowl-food',
    badge: 'طازجة مع كل طلب 🍟',
    desc: 'بطاطس مقلية كرسبي مع صوص الشيدر السايح، سلطة تركية حارة (إيزميه)، بابا غنوج على الحطب، طحينة جمر المدخنة، تومية كريمية، كول سلو منعش، ومشروبات باردة مثلجة.'
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
