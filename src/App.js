import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Details from "./components/Details";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Guestbook from "./components/Guestbook";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

import { COUPLE, WEDDING, BANK, TIMELINE, GALLERY } from "./config";
import { formatDateLongMN } from "./utils/date";

export default function App() {
    return (
        <div className="site">
            <Header couple={COUPLE} />
            <Hero couple={COUPLE} wedding={WEDDING} formatDate={formatDateLongMN} />
            <Story />
            <Details wedding={WEDDING} timeline={TIMELINE} />
            <Gallery gallery={GALLERY} wedding={WEDDING} />
            <Gifts bank={BANK} />
            <Guestbook />
            <RSVP />
            <Footer couple={COUPLE} wedding={WEDDING} />
        </div>
    );
}
