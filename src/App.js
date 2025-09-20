// src/App.js

import React, { useState } from "react";
import InvitationOpening from "./components/invitationOpenning"; // 👈 Add this component
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Story from "./components/story";
import Details from "./components/detail";
import Gallery from "./components/gallery";
import Gift from "./components/gift";
import Guestbook from "./components/guestbook";
import RSVP from "./components/rsvp";
import BottomNav from "./components/bottomnav";
import AboutUs from "./components/aboutUs";

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  const COUPLE = { bride: "Гүнжээ", groom: "Мөдө" };
  const WEDDING = {
    dateISO: "2025-10-11T16:00:00",
    venueName: "Evento Ballroom",
    venueAddress: "Дилав хутагт Жамсранжавын гудамж, 6-р хороо, Баянгол дүүрэг, Улаанбаатар",
    mapQuery: "Evento Ballroom, Handu Hotel, Chingunjav Street, Bayangol, Ulaanbaatar",
    mapOpenUrl: "https://www.google.com/maps/place/Evento+Ballroom/",
    hashtag: "#Modo&Gunjee2025",
  };

  const TIMELINE = [
    { time: "16:00", title: "Ёслол", desc: "Суудлаа эзлээд тайван сууна уу." },
    { time: "17:00", title: "Зураг ба зочлол", desc: "Цэцэрлэгийн терасст." },
    { time: "18:30", title: "Хүлээн авалт, оройн зоог", desc: "3-р давхар, хүлээн авалтын танхим." },
    { time: "20:00", title: "Эхний бүжиг", desc: "Бүжгийн талбай нээгдэнэ." },
    { time: "22:00", title: "Үдэн гаргалт", desc: "Очлууртай үдэлт." },
  ];

  const GALLERY = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    `${process.env.PUBLIC_URL}/images/gibly_wedding_1.png`,
    `${process.env.PUBLIC_URL}/images/gibly_wedding_2.png`,
  ];

  const BANK = {
    bankName: "Хаан банк",
    accountName: "Мөнхдөлгөөн",
    accountNumber: "590005005090770986",
    note: "Гүйлгээний утгад өөрийн нэрээ бичээрэй.",
  };

  const onRSVP = (e) => {
    e.preventDefault();
    alert("Баярлалаа! Таны ирэх эсэхийн мэдээлэл бүртгэгдлээ.");
    e.currentTarget.reset();
  };

  // 👇 Show invitation first
  if (!isInvitationOpened) {
    return <InvitationOpening onOpen={() => setIsInvitationOpened(true)} />;
  }

  return (
    <div className="site">
      <Navbar couple={COUPLE} />
      <Hero couple={COUPLE} wedding={WEDDING} />
      <AboutUs/>
      <Story />
      <Details timeline={TIMELINE} wedding={WEDDING} />
      <Gallery images={GALLERY} hashtag={WEDDING.hashtag} />
      <Gift bank={BANK} couplePhoto={`${process.env.PUBLIC_URL}/images/couple.jpg`} />
      <Guestbook />
      <RSVP onSubmit={onRSVP} />
      <BottomNav />
    </div>
  );
}
