// ACTIVE SECTION NAVIGATION
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});


// DARK MODE TOGGLE
const modeBtn = document.querySelector(".mode-btn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


// LANGUAGE TOGGLE (AR/EN)
const langBtn = document.querySelector(".lang-btn");
let currentLang = "ar";

const translations = {
  ar: {
    logo: "جوهر البراند",
    "nav-home": "الرئيسية",
    "nav-contact": "تواصل معنا",
    "nav-men": "رجالي",
    "nav-women": "حريمي",
    "nav-youth": "شبابي",
    "nav-kids": "أطفالي",
    
    "hero-h1": "أحدث صيحات",
    "hero-name": "الموضة العصرية",
    "hero-name2": "أناقة لا تُضاهى لجميع الأعمار",
    "hero-p": "اكتشف تشكيلتنا الفريدة من الملابس العصرية بأجود الخامات وأفضل الأسعار.",
    "hero-btn1": "تسوق الآن",
    "hero-btn2": "تواصل معنا",
    
    "contact-title": "تواصل معنا",
    "contact-desc": "نحن هنا لمساعدتك! تواصل معنا عبر أي من القنوات التالية",
    "contact-address": "القاهرة، مصر",
    
    "men-title": "👔 ملابس رجالي",
    "women-title": "👗 ملابس حريمي",
    "youth-title": "👕 ملابس شبابي",
    "kids-title": "🧸 ملابس أطفالي",
    
    "product-men-1": "سويتر بني بسحاب",
    "product-men-2": "بلوزة بولو مخططة",
    "product-men-3": "تيشيرت بولو كحلي",
    "product-men-4": "قميص كحلي كاجوال",
    "product-men-5": "قميص جينز أزرق",
    "product-men-6": "تيشيرت بولو بني",
    
    "product-women-1": "طقم رياضي بني",
    "product-women-2": "فستان أخضر طويل",
    "product-women-3": "بليزر بيج كلاسيك",
    "product-women-4": "سويتر أحمر شتوي",
    "product-women-5": "كارديجان أزرق أنيق",
    "product-women-6": "بلوزة بني كاجوال",
    
    "product-youth-1": "طقم رياضي كاجوال",
    "product-youth-2": "	قميص كحلي وبنطلون بيج",
    "product-youth-3": "سويتر بني بياقة قميص",
    "product-youth-4": "هودي كاجوال",
    "product-youth-5": "جاكيت بني كاجوال",
    "product-youth-6": "قميص مخملي كوردروي",
    
    "product-kids-1": "أوفرول دب بني",
    "product-kids-2": "سالوبيت دب شتوي",
    "product-kids-3": "جاكيت أزرق مبطن",
    "product-kids-4": "سويتر ثعلب كاجوال",
    "product-kids-5": "	سويتر رجل الثلج",
    "product-kids-6": "سويتر غزال أحمر",
    
    footer: "© 2026 زياد أيمن – جميع الحقوق محفوظة"
  },
  
  en: {
    logo: "Brand Core",
    "nav-home": "Home",
    "nav-contact": "Contact Us",
    "nav-men": "Men",
    "nav-women": "Women",
    "nav-youth": "Youth",
    "nav-kids": "Kids",
    
    "hero-h1": "Latest Trends in",
    "hero-name": "Modern Fashion",
    "hero-name2": "Unmatched Elegance for All Ages",
    "hero-p": "Discover our unique collection of modern clothing with premium quality and best prices.",
    "hero-btn1": "Shop Now",
    "hero-btn2": "Contact Us",
    
    "contact-title": "Contact Us",
    "contact-desc": "We are here to help! Reach us through any of the following channels",
    "contact-address": "Cairo, Egypt",
    
    "men-title": "👔 Men's Clothing",
    "women-title": "👗 Women's Clothing",
    "youth-title": "👕 Youth Clothing",
    "kids-title": "🧸 Kids Clothing",
    
    "product-men-1": "Brown Zip Sweater",
    "product-men-2": "Striped Polo Sweater",
    "product-men-3": "Navy Polo Shirt",
    "product-men-4": "Navy Casual Shirt",
    "product-men-5": "Blue Denim Shirt",
    "product-men-6": "Brown Polo Shirt",
    
    "product-women-1": "Brown Lounge Set",
    "product-women-2": "Long Green Dress",
    "product-women-3": "Classic Beige Blazer",
    "product-women-4": "Red Winter Sweater",
    "product-women-5": "Elegant Blue Cardigan",
    "product-women-6": "Brown Casual Blouse",
    
    "product-youth-1": "Casual Tracksuit Set",
    "product-youth-2": "Navy Shirt & Beige Pants",
    "product-youth-3": "Brown Sweater with Collar",
    "product-youth-4": "Sports Polo Shirt",
    "product-youth-5": "Brown Casual Jacket",
    "product-youth-6": "Corduroy Shirt Jacket",
    
    "product-kids-1": "Brown Bear Overalls",
    "product-kids-2": "Fuzzy Bear Snowsuit",
    "product-kids-3": "Blue Puffer Jacket",
    "product-kids-4": "Fox Casual Sweater",
    "product-kids-5": "Snowman Winter Sweater",
    "product-kids-6": "Red Reindeer Sweater",
    
    footer: "© 2026 Zeyad Ayman. All rights reserved."
  }
};

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  langBtn.textContent = currentLang === "ar" ? "EN" : "AR";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
});


// BACK TO TOP BUTTON
window.addEventListener("scroll", () => {
  document.getElementById("backToTop").classList.toggle("show", window.scrollY > 400);
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});