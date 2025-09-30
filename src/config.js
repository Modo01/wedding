// src/config.js
export const COUPLE = { bride: "Гүнжээ", groom: "Мөдө" };

export const WEDDING = {
    dateISO: "2025-10-11T16:00:00",
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
    { time: "16:00", title: "Ёслол", desc: "Суудлаа эзлээд тайван сууна уу." },
    { time: "17:00", title: "Зураг ба зочлол", desc: "Цэцэрлэгийн терасст." },
    { time: "18:30", title: "Хүлээн авалт, оройн зоог", desc: "3-р давхар, хүлээн авалтын танхим." },
    { time: "20:00", title: "Эхний бүжиг", desc: "Бүжгийн талбай нээгдэнэ." },
    { time: "22:00", title: "Үдэн гаргалт", desc: "Очлууртай үдэлт." },
];

export const GALLERY = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600",
    `${process.env.PUBLIC_URL}/images/gibly_wedding_1.png`,
    `${process.env.PUBLIC_URL}/images/gibly_wedding_2.png`,
];
