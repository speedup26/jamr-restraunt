/**
 * JAMR RESTAURANT - مطعم جمر الفاخر (قليوب)
 * 5-Star Clean Navigation: الرئيسية • المنيو • قصتنا • العنوان
 * Phone & WhatsApp: 01016121744 (Local) / +201016121744
 * Google Maps Location: https://maps.app.goo.gl/KUog1AhFCSzEQLdx9
 * Facebook: https://www.facebook.com/share/1Fbtzw8py8/
 */

const RESTAURANT_PHONE = '01016121744';
const RESTAURANT_WHATSAPP = '201016121744';
const RESTAURANT_LOCATION = 'قليوب — أمام مستشفى قليوب • أسفل كافيه موكا';
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
    id: 'burgers',
    nameAr: 'منيو برجر جمر ع الفحم • سماش (Burgers)',
    nameEn: 'Charcoal & Smash Flame Burgers',
    icon: 'fa-burger',
    badge: '١٧ صنف • سنجل ودبل وتريبل 🍔',
    desc: 'برجر لحم بلدي طازج وسماش ع الفحم، كلاسيك بيكون، تشامبيون برجر، برجر طرب، فاير جمر، تشكن جريلد، وفرايد كلاسيك مع صوصات جمر الخاصة.'
  },
  {
    id: 'crepes',
    nameAr: 'منيو كريب جمر المقرمش (Crepes)',
    nameEn: 'Gourmet Crispy Crepes',
    icon: 'fa-scroll',
    badge: '١٣ صنف • حشوات غنية 🔥',
    desc: 'كريب مقرمش غني بالموتزاريلا والصوصات: كريب استيك، كريب ديناميت، كريب جمر الحراق، كريب مسحب، كريب شاورما، وكريب مكس لحوم وجبن.'
  },
  {
    id: 'pastas',
    nameAr: 'منيو باستا جمر الإيطالي — علبة جمر (Pastas)',
    nameEn: 'Artisanal Italian Pastas in Jamr Box',
    icon: 'fa-plate-wheat',
    badge: 'من 95 إلى 210 ج.م • 4 صوصات 🧀',
    desc: 'باستا إيطالي أصلي مش بشاميل في علبة جمر: باستا خضار (95 ج)، سجق بلدي مشوي (125 ج)، فراخ 150 جم (145 ج)، بسطرمة بلدي (150 ج)، سويت تشيلي (155 ج)، جمبري طازج (185 ج)، وسي فود ملوكي (210 ج). مع 4 صوصات تختار منها مجاناً.'
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
// FEATURED CREPES MENU DATA (JAMR CREPES - META AI SHARED SPECIFICATION)
// ============================================================================
const crepesData = [
  { id: 'cr-1', no: '٠١', name: 'كريب بطاطس', price: 65, desc: 'بطاطس، موزاريلا، كاتشب + مايونيز', tag: 'اقتصادي ولذيذ' },
  { id: 'cr-2', no: '٠٢', name: 'كريب مكس جبن', price: 105, desc: 'موزاريلا، رومي، ريكفورد، أمريكان تشيز، كيري', tag: 'مكس أجبان غني 🧀' },
  { id: 'cr-3', no: '٠٣', name: 'كريب هوت دوج', price: 100, desc: 'هوت دوج، موزاريلا، كاتشب + مستردة', tag: 'كلاسيك' },
  { id: 'cr-4', no: '٠٤', name: 'كريب شيش مشوي ع الفحم', price: 130, desc: 'شيش فراخ، موزاريلا، فلفل ألوان + بصل', tag: 'شواء ع الفحم 🔥' },
  { id: 'cr-5', no: '٠٥', name: 'كريب فاهيتا', price: 125, desc: 'فاهيتا فراخ، موزاريلا، مشروم، فلفل + بصل', tag: 'فاهيتا مكسيكية' },
  { id: 'cr-6', no: '٠٦', name: 'كريب شاورما', price: 130, desc: 'شاورما، موزاريلا، تومية', tag: 'تتبيلة مميزة' },
  { id: 'cr-7', no: '٠٧', name: 'كريب مكس فراخ', price: 140, desc: 'استربس + شيش فراخ، موزاريلا', tag: 'دبل فراخ' },
  { id: 'cr-8', no: '٠٨', name: 'كريب استيك', price: 150, desc: 'استيك لحم، موزاريلا، مشروم + صوص', tag: 'لحم فاخر' },
  { id: 'cr-9', no: '٠٩', name: 'كريب جمر الحراق', price: 150, desc: 'برجر سماش، استربس، هالبينو، سويت تشيلي، موزاريلا', tag: 'حار وسماش 🌶️' },
  { id: 'cr-10', no: '١٠', name: 'كريب مسحب', price: 150, desc: 'مسحب، موزاريلا', tag: 'مقرمش غني' },
  { id: 'cr-11', no: '١١', name: 'كريب ديناميت', price: 175, desc: 'شيش، فاهيتا ومشروم، استربس، تركي مدخن، صوص شيدر ورانش، موزاريلا', tag: 'ديناميت جمر 💥' },
  { id: 'cr-12', no: '١٢', name: 'كريب مكس لحوم', price: 185, desc: 'استيك، كفتة مشوية، بسطرمة، روزبيف، صوص شيدر، تكساس صوص، موزاريلا', tag: 'ملوك اللحوم 👑' },
  { id: 'cr-13', no: '١٣', name: 'كريب جمر (Special)', price: 190, desc: 'فراخ جريلد، استيك، بيف بيكون مدخن، موزاريلا ستيكس', tag: 'توقيع جمر الفاخر ⭐' }
];

// ============================================================================
// FEATURED BURGERS MENU DATA (JAMR BURGERS - META AI SHARED SPECIFICATION)
// ============================================================================
const burgerCategories = [
  {
    catId: 'smash',
    title: 'برجر سماش لحم (Smash Burgers)',
    icon: 'fa-fire-burner',
    desc: 'سماش لحم بلدي طازج مسفوع بنكهة الفحم المدخن مع الجبنة السايحة',
    items: [
      {
        id: 'bg-1',
        no: '٠١',
        name: 'برجر سماش',
        desc: 'سماش لحم، أمريكان تشيز، تكساس صوص، موزريلا سايحة، خس، خيار مخلل',
        tag: 'الأكثر طلباً 🔥',
        prices: [
          { label: 'سنجل', value: 130 },
          { label: 'دبل', value: 185 },
          { label: 'تريبل', value: 250 }
        ]
      },
      {
        id: 'bg-2',
        no: '٠٢',
        name: 'اونيون سماش',
        desc: 'سماش لحم، بصل مكرمل، تكساس صوص، أمريكان تشيز، خيار، خس',
        tag: 'بصل مكرمل',
        prices: [
          { label: 'سنجل', value: 140 },
          { label: 'دبل', value: 195 },
          { label: 'تريبل', value: 255 }
        ]
      },
      {
        id: 'bg-3',
        no: '٠٣',
        name: 'بيكون جمر',
        desc: 'سماش لحم، بيكون مدخن، أمريكان تشيز، صوص جمر',
        tag: 'مدخّن 🥓',
        prices: [
          { label: 'سنجل', value: 150 },
          { label: 'دبل', value: 205 },
          { label: 'تريبل', value: 260 }
        ]
      }
    ]
  },
  {
    catId: 'beef-200g',
    title: 'برجر لحم 200 جم ع الفحم (Flame Grilled Beef)',
    icon: 'fa-drumstick-bite',
    desc: 'قطعة لحم 200 جم مشوية على لهب الجمر مع توبينجز فاخرة',
    items: [
      {
        id: 'bg-4',
        no: '٠٤',
        name: 'كلاسيك بيكون',
        desc: 'قطعة لحم 200 جم، بيكون مدخن، أمريكان تشيز، صوص جمر، كوكتيل صوص، طماطم، خس، خيار مخلل، بصل',
        tag: 'كلاسيك فاخر',
        prices: [
          { label: 'سنجل', value: 175 },
          { label: 'دبل', value: 250 }
        ]
      },
      {
        id: 'bg-5',
        no: '٠٥',
        name: 'تشامبيون برجر',
        desc: 'قطعة لحم 200 جم، بيف مدخن، بصل مكرمل، قرص موزريلا، اونيون وينجز، أمريكان تشيز، صوص شيدر، سويت شيلي، تفاح مكرمل',
        tag: 'تشامبيون 🏆',
        prices: [
          { label: 'سنجل', value: 215 },
          { label: 'دبل', value: 270 }
        ]
      },
      {
        id: 'bg-6',
        no: '٠٦',
        name: 'هاواي جمر',
        desc: 'قطعة لحم 200 جم، أمريكان تشيز، تكساس، أناناس مشوي، صوص جمر',
        tag: 'نكهة استوائية 🍍',
        prices: [
          { label: 'سنجل', value: 250 },
          { label: 'دبل', value: 320 }
        ]
      },
      {
        id: 'bg-7',
        no: '٠٧',
        name: 'برجر طرب',
        desc: 'قطعة لحم 200 جم ملفوف طرب، بيف بيكون مدخن، صوص جمر المدخن، تكساس',
        tag: 'جديد 🆕',
        prices: [
          { label: 'سنجل', value: 185 },
          { label: 'دبل', value: 235 }
        ]
      },
      {
        id: 'bg-8',
        no: '٠٨',
        name: 'برجر مكس تشيز',
        desc: 'قطعة لحم مكس جبن 200 جم، أمريكان تشيز، هالبينو، رانش صوص، شيدر',
        tag: 'مكس أجبان 🧀',
        prices: [
          { label: 'سنجل', value: 200 },
          { label: 'دبل', value: 265 }
        ]
      },
      {
        id: 'bg-9',
        no: '٠٩',
        name: 'فاير جمر',
        desc: 'قطعة لحم 200 جم، سجق مشوي، فراخ جريلد، موزريلا سايحة، بيكون، هالبينو، صوص جمر، أمريكان تشيز، سويت شيلي',
        tag: 'نار 🔥',
        prices: [
          { label: 'قطعة واحدة (VIP)', value: 295 }
        ]
      },
      {
        id: 'bg-10',
        no: '١٠',
        name: 'برجر نوتس',
        desc: 'قطعة برجر 200 جم، مكسرات وعسل مكرمل، خس وخيار',
        tag: 'عسل ومكسرات 🍯',
        prices: [
          { label: 'قطعة واحدة', value: 195 }
        ]
      }
    ]
  },
  {
    catId: 'chicken-grilled',
    title: 'برجر تشكن جريلد ع الفحم (Grilled Chicken)',
    icon: 'fa-fire-flame-simple',
    desc: 'صدور دجاج طازجة مشوية على الفحم مع صوصات جمر والجبنة',
    items: [
      {
        id: 'bg-11',
        no: '١١',
        name: 'تشكن جريلد',
        desc: 'قطعة جريلد، خس، خيار، باربيكيو، شيدر',
        tag: 'خفيف ولذيذ',
        prices: [
          { label: 'سنجل', value: 140 },
          { label: 'دبل', value: 175 }
        ]
      },
      {
        id: 'bg-12',
        no: '١٢',
        name: 'جريلد اونيون',
        desc: 'قطعة جريلد، بصل مكرمل، خيار مخلل، خس، باربيكيو، شيدر',
        tag: 'بصل مكرمل',
        prices: [
          { label: 'سنجل', value: 155 },
          { label: 'دبل', value: 185 }
        ]
      },
      {
        id: 'bg-13',
        no: '١٣',
        name: 'جريلد ماش',
        desc: 'قطعة فراخ جريلد، مشروم، خيار مخلل، خس، شيدر، باربيكيو',
        tag: 'مشروم غني 🍄',
        prices: [
          { label: 'سنجل', value: 160 },
          { label: 'دبل', value: 195 }
        ]
      }
    ]
  },
  {
    catId: 'chicken-crispy',
    title: 'فرايد تشكن واسكالوب (Fried & Crispy Chicken)',
    icon: 'fa-drumstick-bite',
    desc: 'دجاج مقرمش ذهبي مع طبقات الموزاريلا والتركي المدخن',
    items: [
      {
        id: 'bg-14',
        no: '١٤',
        name: 'شامبيون جمر',
        desc: 'قطعة فرايد تشيكن، قرص موزريلا، اونيون رينجز، مشروم صوص، تركي مدخن، هالبينو، كرامليز تفاح، رانش، تكساس، صوص جمر',
        tag: 'شامبيون كرسبي 🏆',
        prices: [
          { label: 'سنجل', value: 195 },
          { label: 'دبل', value: 255 }
        ]
      },
      {
        id: 'bg-15',
        no: '١٥',
        name: 'فرايد كلاسيك',
        desc: 'قطعة فرايد، تركي مدخن، بصل، خس، خيار مخلل، رانش، شيدر، كوكتيل صوص',
        tag: 'كرسبي كلاسيك',
        prices: [
          { label: 'سنجل', value: 155 },
          { label: 'دبل', value: 195 }
        ]
      },
      {
        id: 'bg-16',
        no: '١٦',
        name: 'نوتس جمر تشكن',
        desc: 'قطعة فرايد، مكسرات وعسل مكرمل، تفاح كرمليز، خيار مخلل، خس',
        tag: 'عسل وتفاح 🍏',
        prices: [
          { label: 'قطعة واحدة', value: 185 }
        ]
      },
      {
        id: 'bg-17',
        no: '١٧',
        name: 'اسكالوب بيب',
        desc: 'قطعة اسكالوب، بصل مكرمل، بيبيروني، جبنة سايحة بفلفل ألوان، خيار وخس',
        tag: 'بيبيروني وجبن 🍕',
        prices: [
          { label: 'سنجل', value: 170 },
          { label: 'دبل', value: 215 }
        ]
      }
    ]
  }
];

// ============================================================================
// FEATURED PASTA MENU DATA (JAMR PASTA - META AI SHARED SPECIFICATION)
// ============================================================================
const pastaSaucesData = [
  { id: 'white', num: '01', name: 'وايت صوص', desc: 'كريمة غنية وجبنة' },
  { id: 'red', num: '02', name: 'ريد صوص', desc: 'طماطم وريحان إيطالي' },
  { id: 'pink', num: '03', name: 'بينك صوص', desc: 'ميكس وايت + ريد' },
  { id: 'espagnole', num: '04', name: 'اسبانيول', desc: 'صوص بني مدخن' }
];

const pastaDishesData = [
  {
    id: 'pasta-veg',
    name: 'باستا خضار',
    desc: 'خضار مشوي، صوص من اختيارك',
    price: 95,
    tag: 'خفيف ومنعش'
  },
  {
    id: 'pasta-sogok',
    name: 'باستا سجق',
    desc: 'سجق بلدي مشوي ع الفحم',
    price: 125,
    tag: 'الأكثر طلباً 🔥'
  },
  {
    id: 'pasta-chicken',
    name: 'باستا فراخ',
    desc: '150 جم فراخ مشوية',
    price: 145,
    tag: '150 جم بروتين 💪'
  },
  {
    id: 'pasta-pastrami',
    name: 'باستا بسطرمة',
    desc: 'بسطرمة بلدي، صوص من اختيارك',
    price: 150,
    tag: 'بسطرمة بلدي (جديد ⭐)'
  },
  {
    id: 'pasta-sweet-chilli',
    name: 'باستا فراخ سويت تشيلي',
    desc: '150 جم فراخ مشوية، صوص سويت تشيلي حلو وحار',
    price: 155,
    tag: 'حلو وحار 🌶️'
  },
  {
    id: 'pasta-shrimp',
    name: 'باستا جمبري',
    desc: 'جمبري مشوي طازج',
    price: 185,
    tag: 'من البحر طازة 🦐'
  },
  {
    id: 'pasta-seafood',
    name: 'باستا سي فود',
    desc: 'جمبري + سبيط + كابوريا',
    price: 210,
    tag: 'الطبق الملكي 👑'
  }
];

function renderPastaMenu() {
  const saucesContainer = document.getElementById('sauces-grid');
  if (saucesContainer) {
    saucesContainer.innerHTML = pastaSaucesData.map(s => `
      <div class="sauce-card">
        <div class="sauce-num">${s.num}</div>
        <div class="sauce-info">
          <h5>${s.name}</h5>
          <p>${s.desc}</p>
        </div>
      </div>
    `).join('');
  }

  const dishesContainer = document.getElementById('pasta-dishes-grid');
  if (dishesContainer) {
    dishesContainer.innerHTML = pastaDishesData.map(dish => `
      <div class="pasta-card" data-dish-id="${dish.id}">
        <div>
          <div class="pasta-card-top">
            <span class="pasta-tag">${dish.tag}</span>
            <div class="pasta-price-badge">${dish.price} <span>ج.م</span></div>
          </div>
          <h4 class="pasta-title">${dish.name}</h4>
          <p class="pasta-desc">${dish.desc}</p>
          
          <div class="pasta-sauce-select-row">
            <label><i class="fas fa-blender"></i> اختار الصوص المفضل (مجاناً):</label>
            <select class="pasta-sauce-dropdown" id="sauce-select-${dish.id}">
              <option value="وايت صوص (كريمة وجبنة)" selected>01. وايت صوص (كريمة وجبنة)</option>
              <option value="ريد صوص (طماطم وريحان)">02. ريد صوص (طماطم وريحان)</option>
              <option value="بينك صوص (ميكس وايت + ريد)">03. بينك صوص (ميكس وايت + ريد)</option>
              <option value="اسبانيول (صوص بني مدخن)">04. اسبانيول (صوص بني مدخن)</option>
            </select>
          </div>
        </div>

        <button class="btn-order-pasta-item" onclick="orderPastaDirect('${dish.id}', '${dish.name}', ${dish.price})">
          <i class="fab fa-whatsapp"></i> اطلب الآن عبر واتساب
        </button>
      </div>
    `).join('');
  }
}

function orderPastaDirect(dishId, dishName, price) {
  const sauceSelect = document.getElementById(`sauce-select-${dishId}`);
  const chosenSauce = sauceSelect ? sauceSelect.value : 'وايت صوص';
  
  const msg = `مرحباً مطعم جمر (قليوب)، أود طلب باستا إيطالي:\n` +
              `🍝 *الطبق:* ${dishName}\n` +
              `🧀 *الصوص المختار:* ${chosenSauce}\n` +
              `💰 *السعر:* ${price} جنيه مصري\n` +
              `يرجى تأكيد الاستلام والتوصيل في قليوب.`;
              
  const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// ============================================================================
// RENDER CREPES MENU (JAMR 13 CREPES)
// ============================================================================
function renderCrepesMenu() {
  const container = document.getElementById('crepes-grid');
  if (!container) return;

  container.innerHTML = crepesData.map(cr => `
    <div class="crepe-card" data-crepe-id="${cr.id}">
      <div>
        <div class="crepe-card-top">
          <div class="crepe-no-badge">${cr.no}</div>
          <span class="crepe-tag">${cr.tag}</span>
          <div class="crepe-price-badge">${cr.price} <span>ج.م</span></div>
        </div>
        <h4 class="crepe-title">${cr.name}</h4>
        <p class="crepe-desc">${cr.desc}</p>
      </div>
      <button class="btn-order-crepe" onclick="orderCrepeDirect('${cr.name}', ${cr.price})">
        <i class="fab fa-whatsapp"></i> اطلب هذا الكريب واتساب
      </button>
    </div>
  `).join('');
}

function orderCrepeDirect(crepeName, price) {
  const msg = `مرحباً مطعم جمر (قليوب)، أود طلب كريب:\n` +
              `🌯 *الصنف:* ${crepeName}\n` +
              `💰 *السعر:* ${price} جنيه مصري\n` +
              `يرجى تأكيد الاستلام والتوصيل في قليوب.`;
  const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// ============================================================================
// RENDER BURGERS MENU (JAMR 17 BURGERS ACROSS 4 SECTIONS)
// ============================================================================
function renderBurgersMenu() {
  const container = document.getElementById('burgers-sections-container');
  if (!container) return;

  container.innerHTML = burgerCategories.map(cat => `
    <div class="burger-category-block">
      <div class="burger-category-header">
        <div class="burger-cat-icon"><i class="fas ${cat.icon}"></i></div>
        <div>
          <h3 class="burger-cat-title">${cat.title}</h3>
          <p class="burger-cat-desc">${cat.desc}</p>
        </div>
      </div>
      <div class="burgers-grid">
        ${cat.items.map(bg => `
          <div class="burger-card" data-burger-id="${bg.id}">
            <div>
              <div class="burger-card-top">
                <span class="burger-no">${bg.no}</span>
                <span class="burger-tag">${bg.tag}</span>
              </div>
              <h4 class="burger-title">${bg.name}</h4>
              <p class="burger-desc">${bg.desc}</p>
              
              <div class="burger-prices-box">
                <div class="burger-prices-label"><i class="fas fa-tag"></i> الأحجام والأسعار (اضغط للطلب):</div>
                <div class="burger-prices-row">
                  ${bg.prices.map(p => `
                    <div class="burger-price-chip" onclick="orderBurgerDirect('${bg.name}', '${p.label}', ${p.value})" title="طلب ${bg.name} (${p.label})">
                      <span class="chip-label">${p.label}</span>
                      <span class="chip-value">${p.value} <sub>ج</sub></span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <button class="btn-order-burger" onclick="orderBurgerDirect('${bg.name}', '${bg.prices[0].label}', ${bg.prices[0].value})">
              <i class="fab fa-whatsapp"></i> اطلب الآن (${bg.prices[0].label}: ${bg.prices[0].value} ج)
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function orderBurgerDirect(burgerName, sizeLabel, price) {
  const msg = `مرحباً مطعم جمر (قليوب)، أود طلب برجر:\n` +
              `🍔 *البرجر:* ${burgerName}\n` +
              `📏 *الحجم:* ${sizeLabel}\n` +
              `💰 *السعر:* ${price} جنيه مصري\n` +
              `يرجى تأكيد الاستلام والتوصيل في قليوب.`;
  const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

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
  if (categoryName) {
    if (categoryName.includes('برجر')) {
      const el = document.getElementById('burgers-menu');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (categoryName.includes('كريب')) {
      const el = document.getElementById('crepes-menu');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    if (categoryName.includes('باستا')) {
      const el = document.getElementById('pasta-menu');
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
  }

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
  renderBurgersMenu();
  renderCrepesMenu();
  renderPastaMenu();
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
