// src/config.js
export const COUPLE = { bride: "Гүнжээ", groom: "Мөдө" };

export const WEDDING = {
    dateISO: "2025-10-11T16:30:00",
    venueName: "Evento Ballroom",
    venueAddress: "Дилав хутагт Жамсранжавын гудамж, 6-р хороо, Баянгол дүүрэг, Улаанбаатар",
    mapQuery: "Evento Ballroom, Handu Hotel, Chingunjav Street, Bayangol, Ulaanbaatar",
    mapOpenUrl: "https://www.google.com/maps/place/Evento+Ballroom/@47.9179519,106.8731607,17z",
    hashtag: "#Modo&Gunjee2025",
};


export const BANK = {
    bankName: "Хаан банк",
    accountName: "Мөнхдөлгөөн",
    accountNumber: "590005005090770986",
    note: "Гүйлгээний утгад өөрийн нэрээ бичээрэй.",
};

export const TIMELINE = [
    { time: "16:30", title: "Зураг ба зочлол", desc: "Угтах хэсэгт ирэн өөрсдийн суудлыг харан зураг даруулах." },
    { time: "17:00", title: "Найр эхлэх", desc: "Хуримын цайллаганы үйл ажиллагаа албан ёсоор эхэлнэ." },
    { time: "18:00", title: "Танилцах", desc: "Найранд ирсэн хүргэн болон бэрийн талынхан танилцана." },
    { time: "19:00", title: "Анхны бүжиг", desc: "Шинэхэн эхнэр нөхөр анхны бүжгээ бүжиглэнэ." },
    { time: "20:00", title: "Бэлэг гардуулалт", desc: "Найранд ирсэн зочид бэлдэж ирсэн бэлгээ хосуудад гардуулж өгнө." },
    { time: "21:20", title: "Парти", desc: "Найранд ирсэн зочид бүжиглэнэ" },
    { time: "22:00", title: "Найр дуусах", desc: "Хурим найр албан ёсоор дуусна." },
];

export const GALLERY = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600",
    `${process.env.PUBLIC_URL}/images/gibly_wedding_1.png`,
    `${process.env.PUBLIC_URL}/images/gibly_wedding_2.png`,
];
