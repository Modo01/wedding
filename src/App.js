import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  // --- CONFIG: Edit these values ---
  const COUPLE = { bride: "Urangunj", groom: "Munkhdulguun" };
  const WEDDING = {
    dateISO: "2025-10-11T16:00:00",
    venueName: "Evento Ballroom",
    venueAddress:
      "Chingunjav Street, 3rd Microdistrict, 6th Khoroo, Bayangol District, Ulaanbaatar",
    // used for the embedded map (iframe)
    mapQuery: "Evento Ballroom, Handu Hotel, Chingunjav Street, Bayangol, Ulaanbaatar",
    // your share URL for the external Maps link:
    mapOpenUrl: "https://www.google.com/maps/place/Evento+Ballroom/@47.9179519,106.8731607,17z/data=!3m1!4b1!4m6!3m5!1s0x5d9693b067ecd2e9:0x16930dafaf7f8948!8m2!3d47.9179483!4d106.8757356!16s%2Fg%2F11vc1kgfcn?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    hashtag: "#Modo&Gunjee2025",
  };
  
  const TIMELINE = [
    { time: "16:00", title: "Ceremony", desc: "Please take your seats." },
    { time: "17:00", title: "Photos & Cocktails", desc: "Garden terrace." },
    { time: "18:30", title: "Reception & Dinner", desc: "Ballroom level 3." },
    { time: "20:00", title: "First Dance", desc: "Dance floor opens to all!" },
    { time: "22:00", title: "Farewell", desc: "Sparkler send-off." },
  ];
  const GALLERY = [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
  ];

  // --- COUNTDOWN ---
  const targetDate = useMemo(() => new Date(WEDDING.dateISO), [WEDDING.dateISO]);
  const [remain, setRemain] = useState(getRemain(targetDate));
  useEffect(() => {
    const t = setInterval(() => setRemain(getRemain(targetDate)), 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  // --- RSVP demo (alert) ---
  const onRSVP = (e) => {
    e.preventDefault();
    alert("Thank you! Your RSVP was recorded.");
    e.currentTarget.reset();
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="wrap">
          <a href="#home" className="brand">
            {COUPLE.bride} & {COUPLE.groom}
          </a>
          <nav>
            <a href="#story">Our Story</a>
            <a href="#details">Details</a>
            <a href="#gallery">Gallery</a>
            <a href="#rsvp" className="btn small">RSVP</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="overlay" />
        <div className="inner">
          <p className="kicker">We are getting married</p>
          <h1>{COUPLE.groom} & {COUPLE.bride}</h1>
          <p className="meta">{formatDateLong(targetDate)} • {WEDDING.venueName}</p>

          {/* Countdown */}
          <div className="countdown">
            <Count label="Days" value={remain.days} />
            <Count label="Hours" value={remain.hours} />
            <Count label="Minutes" value={remain.minutes} />
            <Count label="Seconds" value={remain.seconds} />
          </div>

          <a href="#rsvp" className="btn" style={{ marginTop: 16 }}>RSVP Now</a>
        </div>
      </section>

      <section id="story" className="section">
        <div className="wrap">
          <h2>Our Story</h2>
          <div className="cards">
            <Card title="First Hello" text="A chance encounter became daily chats and shared playlists." />
            <Card title="The Yes" text="On a quiet rooftop under the stars, we promised forever." />
            <Card title="What’s Next" text="A life of travel, laughter, and way too many photos." />
          </div>
        </div>
      </section>

      <section id="details" className="section">
        <div className="wrap">
          <h2>The Day</h2>
          <div className="grid-2">
            <ul className="timeline">
              {TIMELINE.map((it, i) => (
                <li key={i}>
                  <span className="time">{it.time}</span>
                  <div className="box">
                    <div className="btitle">{it.title}</div>
                    <div className="bdesc">{it.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="venue box">
              <h3>{WEDDING.venueName}</h3>
              <p>{WEDDING.venueAddress}</p>
              <div className="map">
              <iframe
  title="map"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps?q=${encodeURIComponent(WEDDING.mapQuery)}&output=embed`}
/>

              </div>
              <a
      className="btn"
  href={WEDDING.mapOpenUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING.mapQuery)}`}
  target="_blank"
  rel="noreferrer"
>
  Open in Google Maps
</a>

            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="wrap">
          <h2>Gallery</h2>
          <div className="gallery">
            {GALLERY.map((src, i) => <img key={i} src={src} alt={`g-${i}`} />)}
          </div>
        </div>
      </section>

      <section id="rsvp" className="section">
        <div className="wrap">
          <h2>RSVP</h2>
          <form className="form" onSubmit={onRSVP}>
            <div className="row">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="row">
              <Field label="Phone" name="phone" placeholder="(+976) 88xx xxxx" />
              <div className="field">
                <label>Guests</label>
                <select name="guests" defaultValue="1">
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Attendance</label>
                <div className="radios">
                  <label><input type="radio" name="attend" value="yes" defaultChecked/> Accepts with joy</label>
                  <label><input type="radio" name="attend" value="no" /> Declines with regret</label>
                </div>
              </div>
              <Field label="Dietary needs" name="diet" placeholder="Vegetarian, halal, allergies…" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" placeholder="Leave us a note" rows={4} />
            </div>
            <button className="btn" type="submit">Send RSVP</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} {COUPLE.bride} & {COUPLE.groom} • {WEDDING.hashtag}</p>
        </div>
      </footer>
    </div>
  );
}

// --- Small components & helpers ---
function Card({ title, text }) {
  return (
    <div className="card">
      <div className="ctitle">{title}</div>
      <p>{text}</p>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder = "", required = false }) {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} required={required} />
    </div>
  );
}

function Count({ label, value }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="count">
      <div className="v">{v}</div>
      <div className="l">{label}</div>
    </div>
  );
}

function formatDateLong(date) {
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}
function getRemain(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return { days, hours, minutes, seconds };
}
