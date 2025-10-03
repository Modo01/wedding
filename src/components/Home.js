import React from "react";
import Hero from "./Hero";
import Story from ".//Story";
import Details from "./Details";
import Gallery from "./Gallery";
import Gifts from "./Gifts";
import Guestbook from "./Guestbook";
import RSVP from "./RSVP";
import Footer from "./Footer";

import {COUPLE, WEDDING1, WEDDING2, BANK, TIMELINE1, TIMELINE2, GALLERY} from "../config";
import {formatDateLongMN} from "../utils/date";

export function Home() {
    return (
        <div className="site">
            <Hero couple={COUPLE} wedding={WEDDING1} formatDate={formatDateLongMN}/>
            <Story/>
            <Details wedding={WEDDING1} timeline={TIMELINE1} title="Ёслолын дэлгэрэнгүй" />
            <Details wedding={WEDDING2} timeline={TIMELINE2} title="Цайллагын дэлгэрэнгүй" />
            <Gallery gallery={GALLERY} wedding={WEDDING1}/>
            <Gifts bank={BANK}/>
            <Guestbook/>
            <RSVP/>
            <Footer couple={COUPLE} wedding={WEDDING1}/>
        </div>);
}
