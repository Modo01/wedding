  // src/app.js
import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  // --- ТОХИРУУЛГА: Эдгээрийг өөрийнхөөрөө солино ---
  const COUPLE = { bride: "Гүнжээ", groom: "Мөдө" }; 
  const WEDDING = {
    dateISO: "2025-10-11T16:00:00", // орон нутгийн цаг
    venueName: "Evento Ballroom (Handu Hotel)",
    venueAddress:
      "Chingunjav Street, 3-р микр, 6-р хороо, Баянгол дүүрэг, Улаанбаатар",
    mapQuery:
      "Evento Ballroom, Handu Hotel, Chingunjav Street, Bayangol, Ulaanbaatar",
    // Хэрэв таны Google share линк байгаа бол энд тавь:
    mapOpenUrl: "https://www.google.com/maps/place/Evento+Ballroom/@47.9179519,106.8731607,17z/data=!3m1!4b1!4m6!3m5!1s0x5d9693b067ecd2e9:0x16930dafaf7f8948!8m2!3d47.9179483!4d106.8757356!16s%2Fg%2F11vc1kgfcn?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    hashtag: "#Modo&Gunjee2025",
  };

  const TIMELINE = [
    { time: "16:00", title: "Ёслол", desc: "Суудлаа эзлээд тайван сууна уу." },
    { time: "17:00", title: "Зураг ба зочлол", desc: "Цэцэрлэгийн терасст." },
    {
      time: "18:30",
      title: "Хүлээн авалт, оройн зоог",
      desc: "3-р давхар, хүлээн авалтын танхим.",
    },
    { time: "20:00", title: "Эхний бүжиг", desc: "Бүжгийн талбай нээгдэнэ." },
    { time: "22:00", title: "Үдэн гаргалт", desc: "Очлууртай үдэлт." },
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

  // --- RSVP (демо) ---
  const onRSVP = (e) => {
    e.preventDefault();
    alert("Баярлалаа! Таны ирэх эсэхийн мэдээлэл бүртгэгдлээ.");
    e.currentTarget.reset();
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="wrap">
          <a href="#home" className="brand">
            {COUPLE.groom} & {COUPLE.bride}
          </a>
          <nav>
            <a href="#story">Бидний түүх</a>
            <a href="#details">Баярын өдөр</a>
            <a href="#gallery">Зурагт цомог</a>
            <a href="#rsvp" className="btn small">
              Ирэх эсэх
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="overlay" />
        <div className="inner">
          <p className="kicker">Бид гэрлэж байна</p>
          <h1>
            {COUPLE.bride} & {COUPLE.groom}
          </h1>
          <p className="meta">
            {formatDateLongMN(targetDate)} • {WEDDING.venueName}
          </p>

          {/* Тоолуур */}
          <div className="countdown">
            <Count label="Өдөр" value={remain.days} />
            <Count label="Цаг" value={remain.hours} />
            <Count label="Минут" value={remain.minutes} />
            <Count label="Секунд" value={remain.seconds} />
          </div>

          <a href="#rsvp" className="btn" style={{ marginTop: 16 }}>
            Хуриманд оролцох
          </a>
        </div>
      </section>

      <section id="story" className="section">
        <div className="wrap">
          <h2>Бидний түүх</h2>
          <div className="cards">
            <Card
              title="Анхны мэндчилгээ"
              text="Санамсаргүй танил солонгорсон дурсамж болон хувирсан."
            />
            <Card
              title="Тийм ээ!"
              text="Тагтны оддоор дор бид насан туршийн амлалтаа өгсөн."
            />
            <Card
              title="Цаашдын амьдрал"
              text="Аялал, инээд, зураг—дэндүү олон зураг 😊."
            />
          </div>
        </div>
      </section>

      <section id="details" className="section">
        <div className="wrap">
          <h2>Баярын өдөр</h2>
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
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    WEDDING.mapQuery
                  )}&output=embed`}
                />
              </div>
              <a
                className="btn"
                href={
                  WEDDING.mapOpenUrl ||
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    WEDDING.mapQuery
                  )}`
                }
                target="_blank"
                rel="noreferrer"
              >
                Google газрын зураг нээх
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="wrap">
          <h2>Зурагт цомог</h2>
          <div className="gallery">
            {GALLERY.map((src, i) => (
              <img key={i} src={src} alt={`g-${i}`} />
            ))}
          </div>
          <p style={{ marginTop: 12, color: "#6b7280" }}>
            Зурагнуудаа {WEDDING.hashtag} хаштагтай хуваалцаарай.
          </p>
        </div>
      </section>

      <section id="rsvp" className="section">
        <div className="wrap">
          <h2>Ирэх эсэх</h2>
          <form className="form" onSubmit={onRSVP}>
            <div className="row">
              <Field label="Овог нэр" name="name" required />
              <Field label="И-мэйл" name="email" type="email" required />
            </div>
            <div className="row">
              <Field label="Утас" name="phone" placeholder="(+976) 88xx xxxx" />
              <div className="field">
                <label>Зочдын тоо</label>
                <select name="guests" defaultValue="1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label>Ирэх эсэх</label>
                <div className="radios">
                  <label>
                    <input type="radio" name="attend" value="yes" defaultChecked /> Ирнэ
                  </label>
                  <label>
                    <input type="radio" name="attend" value="no" /> Ирэхгүй
                  </label>
                </div>
              </div>
              <Field
                label="Хоолны онцгой хэрэгцээ"
                name="diet"
                placeholder="Вег, халал, харшил…"
              />
            </div>
            <div className="field">
              <label>Санал хүсэлт</label>
              <textarea name="message" placeholder="Мессеж үлдээнэ үү" rows={4} />
            </div>
            <button className="btn" type="submit">
              Илгээх
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {COUPLE.bride} & {COUPLE.groom} • {WEDDING.hashtag}
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- Жижиг компонентууд & туслах функцууд ---
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

function formatDateLongMN(date) {
  // Монгол хэлний формат
  return date.toLocaleDateString("mn-MN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
