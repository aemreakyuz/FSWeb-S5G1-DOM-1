const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navLinks = document.querySelectorAll(".container header nav a");

navLinks.forEach((element) => {
  element.classList.add("italic");
});

navLinks[0].textContent = "Servisler";
navLinks[1].textContent = "Ürünler";
navLinks[2].textContent = "Vizyon";
navLinks[3].textContent = "Özellikler";
navLinks[4].textContent = "Hakkımızda";
navLinks[5].textContent = "İletişim";

//Images

const logoImg = document.getElementById("logo-img");
logoImg.src = "http://localhost:9000/img/logo.png";

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png";

const midImg = document.getElementById("middle-img");
midImg.src = "http://localhost:9000/img/accent.png";

//CTA-TEXT

const h1 = document.querySelector(".cta-text h1");
const button = document.querySelector(".cta-text button");
h1.textContent = "Bu DOM Mükemmel";
button.textContent = "Başlayın";

//Özellikler-Content

const ozellikler = document.querySelector(".text-content:nth-child(1) h4");
ozellikler.textContent = "Özellikler";

const text1 = document.querySelector(".text-content:nth-child(1) p");

text1.textContent = `Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

//Hakkında-CONTENT

const hakkinda = document.querySelector(".text-content:nth-child(2) h4");
hakkinda.textContent = "Hakkında";

const text2 = document.querySelector(".text-content:nth-child(2) p");
text2.textContent = `Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

//Servisler-Content

const servisler = document.querySelector(
  ".bottom-content .text-content:nth-child(1) h4"
);
servisler.textContent = "Servisler";

const text3 = document.querySelector(
  ".bottom-content .text-content:nth-child(1) p"
);
text3.textContent = `Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

//Ürünler-Content

const urunler = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
urunler.textContent = "Ürünler";

const text4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
text4.textContent = `Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

//Vizyon-Content

const vizyon = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
vizyon.textContent = "Vizyon";

const text5 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
text5.textContent = `Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

//İletişim-Content

const h4 = document.querySelector(".contact h4");

h4.textContent = "İletişim";

const pIletisim = document.querySelectorAll(".contact p");

pIletisim[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";

pIletisim[1].textContent = "+90 (123) 456-7899";

pIletisim[2].textContent = "satis@birsirketsitesi.com.tr";

//Footer-Section

const footerLink = document.querySelector("footer a");

footerLink.setAttribute("class", "bold");
footerLink.textContent = "Copyright Bir Şirket Sitesi 2022";
