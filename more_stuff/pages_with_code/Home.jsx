import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { StarBurst, ConstructionGraphic, SuccessClipart } from "@/components/terrible/LocalGraphics";
import Guestbook from "@/components/terrible/Guestbook";
import { FakeSearch, NewsletterSignup, MoodRing, WordOfTheDay, SpinWheel, TipJar, NumberGuess, TestimonialsMarquee, WebRing, CookieBanner, NowPlaying, GlobeWidget } from "@/components/terrible/MoreFeatures";

const fontPick = (i) => {
  const fonts = [
    "'Comic Sans MS', 'Comic Sans', cursive",
    "Papyrus, fantasy",
    "'Times New Roman', Times, serif",
    "Arial, sans-serif",
    "'Courier New', Courier, monospace",
    "Impact, sans-serif",
    "Georgia, serif",
    "'Trebuchet MS', sans-serif",
  ];
  return fonts[i % fonts.length];
};

function SparkleCursor() {
  useEffect(() => {
    const emojis = ["✨", "⭐", "💫", "🌟", "💥", "🍕"];
    const trail = [];
    const onMove = (e) => {
      const s = document.createElement("div");
      s.className = "sparkle";
      s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(s);
      trail.push(s);
      setTimeout(() => { s.style.transition = "opacity 0.6s, transform 0.6s"; s.style.opacity = "0"; s.style.transform += " scale(2)"; }, 10);
      setTimeout(() => { s.remove(); }, 700);
      if (trail.length > 60) { const old = trail.shift(); if (old && old.parentNode) old.remove(); }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return null;
}

function Clock() {
  const [t, setT] = useState(new Date());
  useEffect(() => { const id = setInterval(() => setT(new Date()), 1000); return () => clearInterval(id); }, []);
  const fake = new Date(t.getTime() + (7 * 60 * 60 * 1000));
  return <span style={{ fontFamily: "'Courier New', monospace", color: "#00ff00", background: "#000", padding: "2px 6px", border: "3px ridge #ff00ff" }}>{fake.toLocaleTimeString()} (UTC+7ish)</span>;
}

function Counter() {
  const [n, setN] = useState(73);
  useEffect(() => { const id = setInterval(() => setN(x => x + 1), 5000); return () => clearInterval(id); }, []);
  return <span style={{ fontFamily: "'Courier New', monospace", fontSize: "28px", color: "#00ff00", background: "#000", padding: "4px 10px", border: "4px outset #0000ff", letterSpacing: "4px" }}>{String(n).padStart(8, "0")}</span>;
}

function LoadingBar() {
  const [w, setW] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (w >= 100) { setDone(true); return; }
    const id = setTimeout(() => setW(x => x + 47), 60);
    return () => clearTimeout(id);
  }, [w]);
  if (done) return <div style={{ fontFamily: "Impact", color: "#ff0000", fontSize: "14px" }}>LOADING COMPLETE!!! (it was instant)</div>;
  return (
    <div style={{ width: "90%", maxWidth: "400px", height: "22px", background: "#000", border: "3px inset #c0c0c0", margin: "0 auto" }}>
      <div style={{ width: w + "%", height: "100%", background: "repeating-linear-gradient(90deg,#00ffff 0 10px,#ff00ff 10px 20px)", transition: "width 0.05s" }}></div>
    </div>
  );
}

const randomColor = () => ["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#ff8800","#8800ff"][Math.floor(Math.random()*8)];

const Buttons = [
  { label: "[CLICK ME]", action: () => alert("CONGRATULATIONS") },
  { label: "[DO NOT CLICK]", action: () => alert("WHY DID YOU CLICK THAT?") },
  { label: "[CLICK HERE]", action: () => alert("CLICK REGISTERED. CLICK AGAIN.") },
  { label: "[IMPORTANT]", action: () => alert("THIS BUTTON DOES NOTHING") },
  { label: "[VERY IMPORTANT]", action: () => alert("ERROR: YOU HAVE BEEN TOO SUCCESSFUL") },
  { label: "[NOT IMPORTANT]", action: () => alert("CONGRATULATIONS: YOU HAVE BEEN SUCCESSFUL") },
  { label: "[FREE STUFF]", action: () => alert("THE FREE STUFF IS A LIE") },
  { label: "[???]", action: () => alert("???") },
  { label: "[BUTTON]", action: () => {} },
  { label: "[BUTTON 2]", action: () => {} },
  { label: "[DO NOT PRESS THIS]", action: () => alert("YOU PRESSED IT. I TOLD YOU NOT TO.") },
  { label: "[PRESS THIS]", action: () => alert("THANK YOU FOR PRESSING") },
  { label: "[MAYBE CLICK]", action: () => {} },
  { label: "[OKAY]", action: () => {} },
  { label: "[HOME??]", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { label: "[SECRET BUTTON]", action: () => alert("YOU FOUND THE SECRET BUTTON!!!") },
  { label: "[BUY NOW]", action: () => alert("CART IS EMPTY. CART IS ALWAYS EMPTY.") },
  { label: "[SUBSCRIBE]", action: () => {} },
];

function ButtonGraveyard() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", justifyContent: "center", padding: "10px" }}>
      {Buttons.map((b, i) => {
        const tiny = i % 5 === 0;
        const huge = i % 7 === 3;
        const size = tiny ? "10px" : huge ? "34px" : "16px";
        return (
          <button
            key={i}
            onClick={b.action}
            className="shake-hover"
            style={{
              fontSize: size,
              fontFamily: fontPick(i),
              color: ["#ffff00","#ffffff","#0000ff","#00ff00","#ff0000"][i % 5],
              background: ["#ff0000","#0000ff","#ff00ff","#000000","#ffff00"][i % 5],
              border: `${tiny ? 1 : huge ? 9 : 4}px ${i % 2 ? "outset" : "inset"} ${randomColor()}`,
              padding: huge ? "18px 30px" : tiny ? "1px 2px" : "6px 10px",
              borderRadius: i % 3 === 0 ? "40px" : "0",
              boxShadow: `4px 4px 0 ${randomColor()}`,
              cursor: "pointer",
              transform: `rotate(${(i % 3 - 1) * 4}deg)`,
            }}
          >
            {b.label}
          </button>
        );
      })}
    </div>
  );
}

function Calculator() {
  const [expr, setExpr] = useState("");
  const [out, setOut] = useState("");
  const compute = () => {
    try {
      if (/[^-0-9+\*/.() ]/.test(expr)) { setOut("ERROR (probably)"); return; }
      // eslint-disable-next-line no-eval
      setOut(String(eval(expr)));
    } catch { setOut("ERROR"); }
  };
  return (
    <div style={{ background: "#c0c0c0", border: "5px outset #fff", padding: "8px", width: "180px", margin: "0 auto" }}>
      <div style={{ fontFamily: "'Courier New', monospace", background: "#000", color: "#0f0", padding: "4px", minHeight: "20px", textAlign: "right", border: "3px inset #888" }}>{out || "0"}</div>
      <input value={expr} onChange={(e) => setExpr(e.target.value)} placeholder="2+2" style={{ width: "100%", fontFamily: "monospace", margin: "4px 0", border: "3px inset #888" }} aria-label="calculator input" />
      <button onClick={compute} style={{ fontFamily: "Impact", width: "100%", background: "#0000ff", color: "#fff", border: "3px outset #fff" }}>=</button>
    </div>
  );
}

function Weather() {
  const conditions = ["CLOUDY WITH A CHANCE OF DATA", "PARTLY CLOUDY WITH EMOJIS", "100% CHANCE OF HTML", "RAINING MARQUEES"];
  const [c, setC] = useState(0);
  useEffect(() => { const id = setInterval(() => setC(x => (x+1)%conditions.length), 3000); return () => clearInterval(id); }, []);
  return (
    <div style={{ background: "#87ceeb", border: "6px ridge #ff00ff", padding: "6px", fontFamily: "Papyrus, fantasy", textAlign: "center", color: "#0000ff" }}>
      <div style={{ fontSize: "11px" }}>CURRENT WEATHER:</div>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>☁️ {conditions[c]} ☁️</div>
    </div>
  );
}

function SecretLink() {
  return (
    <Link to="/" aria-label="SECRET" style={{ position: "fixed", top: 0, left: 0, width: "1px", height: "1px", opacity: 0, zIndex: 99999 }}>·</Link>
  );
}

export default function Home() {
  const [popup, setPopup] = useState(null);
  const [jokeOpen, setJokeOpen] = useState(true);
  const navRef = useRef(null);
  const [navAt, setNavAt] = useState("side");

  useEffect(() => {
    const onScroll = () => setNavAt(window.scrollY > 400 ? "bottom" : "side");
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const popups = [
    "ARE YOU SURE?",
    "WHY DID YOU CLICK THAT?",
    "CONGRATULATIONS",
    "ERROR: YOU HAVE BEEN TOO SUCCESSFUL",
    "THIS BUTTON DOES NOTHING",
    "PLEASE WAIT...",
    "PLEASE WAIT...",
    "PLEASE WAIT...",
  ];

  const showPopup = (msg) => { setPopup(msg); setTimeout(() => setPopup(null), 1400); };

  const NavLinks = ({ vertical }) => (
    <nav style={{
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      gap: "4px",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {[
        { t: "HOME", to: "/", c: "#ff0000", b: "#ffff00" },
        { t: "HOME 2", to: "/home-2", c: "#00ff00", b: "#ff00ff" },
        { t: "HOME (again)", to: "/", c: "#0000ff", b: "#ffffff" },
        { t: "MAIN", to: "/", c: "#ffff00", b: "#000000" },
        { t: "INDEX", to: "/", c: "#ff00ff", b: "#00ff00" },
        { t: "START", to: "/", c: "#ffffff", b: "#0000ff" },
        { t: "GO BACK", to: "/", c: "#000000", b: "#00ffff" },
        { t: "OTHER HOME", to: "/home-2", c: "#ff8800", b: "#8800ff" },
        { t: "TOP", to: "/", c: "#8800ff", b: "#ffff00" },
      ].map((l, i) => (
        <Link
          key={i}
          to={l.to}
          className="shake-hover"
          style={{
            textDecoration: i % 3 ? "underline overline" : "none",
            fontFamily: fontPick(i),
            fontSize: i === 4 ? "26px" : "13px",
            color: l.c,
            background: l.b,
            padding: "3px 7px",
            border: "2px solid #000",
            fontStyle: i % 2 ? "italic" : "normal",
            fontWeight: i % 2 ? "normal" : "bold",
            transform: `rotate(${(i%3 - 1)*3}deg)`,
          }}
        >
          {l.t}
        </Link>
      ))}
    </nav>
  );

  return (
    <div style={{
      background: "repeating-linear-gradient(45deg, #ffff00 0 40px, #00ffff 40px 80px, #ff00ff 80px 120px)",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <SparkleCursor />
      <SecretLink />

      {/* fake fixed nav that switches position */}
      <div ref={navRef} style={{
        position: "fixed",
        right: navAt === "side" ? "4px" : "0",
        left: navAt === "side" ? "auto" : "0",
        bottom: navAt === "bottom" ? "0" : "auto",
        top: navAt === "side" ? "120px" : "auto",
        zIndex: 50,
        background: navAt === "bottom" ? "#000000cc" : "#ffffffcc",
        padding: "6px",
        border: "4px dashed #ff0000",
      }}>
        <NavLinks vertical={navAt === "side"} />
      </div>

      {/* top marquee bar */}
      <div style={{ background: "#000", overflow: "hidden", borderBottom: "5px ridge #ff00ff", whiteSpace: "nowrap" }}>
        <div className="marquee-l" style={{ color: "#ffff00", fontFamily: "Impact", fontSize: "22px" }}>
          ⚠️ WELCOME TO MY WEBSITE!!! BEST VIEWED ON INTERNET EXPLORER 6 ⚠️ UNDER CONSTRUCTION ⚠️ YOU ARE VISITOR #00000073 ⚠️ CLICK HERE!!! ⚠️
        </div>
      </div>
      <div style={{ background: "#0000ff", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="marquee-r" style={{ color: "#00ffff", fontFamily: "'Comic Sans MS', cursive", fontSize: "18px" }}>
          WHY ARE YOU STILL HERE? &nbsp;&nbsp; WHY ARE YOU STILL HERE? &nbsp;&nbsp; WHY ARE YOU STILL HERE? &nbsp;&nbsp;
        </div>
      </div>

      {/* WELCOME abyss */}
      <header style={{ textAlign: "center", padding: "60px 10px 30px", backgroundImage: "radial-gradient(circle, #ff00ff 0%, #0000ff 100%)", borderBottom: "8px double #00ff00" }}>
        <div className="spin-slow" style={{ display: "inline-block", width: "120px", height: "120px" }}>
          <StarBurst size={120} />
        </div>
        <h1 style={{
          fontFamily: "Impact, sans-serif",
          fontSize: "clamp(48px, 12vw, 144px)",
          color: "#ffff00",
          textShadow: "4px 4px 0 #ff0000, 8px 8px 0 #00ff00",
          fontStyle: "italic",
          textDecoration: "underline overline",
          lineHeight: 1,
          margin: "10px 0",
        }} className="bounce">
          WELCOME TO MY DOMAIN!!!
        </h1>
        <p style={{ fontFamily: "Papyrus, fantasy", color: "#00ffff", fontSize: "30px", fontWeight: "bold" }}>
          The #1 website on the information superhighway (citation needed)
        </p>
        <div style={{ margin: "20px 0" }}><Counter /></div>
        <div style={{ fontFamily: "'Courier New', monospace", color: "#ffffff", fontSize: "12px" }}>
          ONLINE USERS: 7 &nbsp;|&nbsp; LAST UPDATED: January 1, 2004
        </div>
      </header>

      {/* loading bar */}
      <section style={{ textAlign: "center", background: "#000", padding: "16px", borderTop: "3px solid #ff00ff", borderBottom: "3px solid #ff00ff" }}>
        <div style={{ color: "#00ff00", fontFamily: "'Courier New', monospace", marginBottom: "6px" }} className="blink">PLEASE WAIT...</div>
        <LoadingBar />
      </section>

      <hr style={{ border: "none", height: "12px", background: "repeating-linear-gradient(90deg,#000 0 10px,#fff 10px 20px)" }} />

      {/* fake award + tiny disclaimer */}
      <section style={{ background: "#00ff00", padding: "20px", textAlign: "center", border: "10px ridge #ff0000" }}>
        <div className="wobble" style={{ display: "inline-block", fontFamily: "Georgia, serif", fontSize: "40px", color: "#ff00ff", fontWeight: "bold", border: "5px dashed #0000ff", padding: "10px 20px", background: "#ffff00" }}>
          🏆 CERTIFIED 100% REAL AWARD 🏆
        </div>
        <p style={{ fontFamily: "'Times New Roman', serif", fontSize: "9px", color: "#000080", marginTop: "14px", maxWidth: "400px", margin: "14px auto 0" }}>
          Disclaimer: this award is not real. nothing on this website is real. the award is a metaphor. do not eat the award. if you read this you have been warned.
        </p>
      </section>

      <hr style={{ border: "none", height: "6px", background: "#ff00ff" }} />

      {/* Knowledge scroll: a terrible table */}
      <section style={{ background: "#ffff00", padding: "40px 10px", overflowX: "auto" }}>
        <h2 className="jitter" style={{ fontFamily: "Papyrus, fantasy", fontSize: "48px", color: "#0000ff", textAlign: "center", textShadow: "0 0 10px #ff00ff", marginBottom: "20px" }}>
          IMPORTANT FACTS TABLE
        </h2>
        <table border="50" cellPadding="20" style={{ borderCollapse: "separate", margin: "0 auto", border: "50px ridge #ff0000", background: "#c0c0c0" }}>
          <tbody>
            <tr>
              <td style={{ background: "#ff0000", color: "#ffff00", fontFamily: "'Comic Sans MS', cursive", fontSize: "24px", border: "5px dashed #000" }}>FACT 1</td>
              <td style={{ background: "#00ffff", color: "#ff00ff", fontFamily: "Impact", fontSize: "14px", border: "3px double #000" }}>The internet is made of websites.</td>
              <td style={{ background: "#ff00ff", color: "#00ff00", fontFamily: "'Courier New', monospace", fontSize: "30px", border: "8px inset #fff" }}>FACT 2</td>
            </tr>
            <tr>
              <td style={{ background: "#0000ff", color: "#ffffff", fontFamily: "Georgia, serif", fontSize: "12px", fontStyle: "italic", border: "4px outset #0f0" }}>This table has borders. Many borders.</td>
              <td style={{ background: "#00ff00", color: "#ff0000", fontFamily: "Papyrus, fantasy", fontSize: "36px", border: "10px solid #000" }}>!!!</td>
              <td style={{ background: "#ffff00", color: "#0000ff", fontFamily: "'Trebuchet MS', sans-serif", fontSize: "18px", fontWeight: "bold", border: "2px dotted #f0f" }}>The current time is:</td>
            </tr>
            <tr>
              <td style={{ background: "#000", color: "#0f0", fontFamily: "monospace", fontSize: "16px", border: "6px groove #ff0" }}><Clock /></td>
              <td style={{ background: "#ff8800", color: "#000", fontFamily: "Arial", fontSize: "20px", border: "3px solid #00f" }}>ONLINE USERS RIGHT NOW: 7</td>
              <td style={{ background: "#8800ff", color: "#ffff00", fontFamily: "Impact", fontSize: "22px", border: "7px ridge #fff" }}>NEW! NEW! NEW!</td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <span className="blink" style={{ fontFamily: "Impact", fontSize: "40px", color: "#ff0000", background: "#ffff00", padding: "4px 12px", border: "4px outset #000" }}>NEW!</span>
        </div>
      </section>

      <hr style={{ border: "none", height: "20px", background: "repeating-linear-gradient(90deg,#f00 0 20px,#0f0 20px 40px,#00f 40px 60px)" }} />

      {/* Button Graveyard */}
      <section style={{ background: "linear-gradient(135deg,#ff00ff,#00ffff,#ffff00,#ff0000)", backgroundSize: "300% 300%", padding: "30px 10px", border: "8px double #000" }}>
        <h2 style={{ fontFamily: "Impact", fontSize: "60px", color: "#ffffff", textAlign: "center", textShadow: "3px 3px 0 #000", transform: "rotate(-2deg)" }}>
          THE BUTTON GRAVEYARD
        </h2>
        <p style={{ textAlign: "center", fontFamily: "'Comic Sans MS', cursive", color: "#0000ff", fontSize: "22px" }}>click something. anything. or nothing. it doesn't matter.</p>
        <ButtonGraveyard />
      </section>

      <hr style={{ border: "none", height: "4px", background: "#000" }} />

      {/* pointless widgets row */}
      <section style={{ background: "#000080", padding: "24px 10px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", alignItems: "flex-start", borderTop: "5px dashed #00ff00", borderBottom: "5px dashed #00ff00" }}>
        <div style={{ width: "200px" }}>
          <div style={{ fontFamily: "Impact", color: "#ffff00", textAlign: "center", marginBottom: "6px" }}>DIGITAL CLOCK</div>
          <Clock />
        </div>
        <div style={{ width: "200px" }}>
          <div style={{ fontFamily: "Impact", color: "#ffff00", textAlign: "center", marginBottom: "6px" }}>WEATHER</div>
          <Weather />
        </div>
        <div style={{ width: "200px" }}>
          <div style={{ fontFamily: "Impact", color: "#ffff00", textAlign: "center", marginBottom: "6px" }}>CALCULATOR</div>
          <Calculator />
        </div>
      </section>

      <hr style={{ border: "none", height: "10px", background: "repeating-linear-gradient(45deg,#ff0 0 15px,#f0f 15px 30px)" }} />

      {/* Images placed terribly */}
      <section style={{ background: "#ff00ff", padding: "20px", position: "relative", overflow: "hidden" }}>
        <h2 style={{ fontFamily: "Papyrus, fantasy", fontSize: "50px", color: "#ffff00", textAlign: "center", textShadow: "0 0 12px #000" }}>OUR SUCCESS STORY</h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "4px", justifyContent: "center" }}>
          <SuccessClipart size={300} style={{ border: "8px ridge #00ff00", transform: "rotate(-4deg)", boxShadow: "10px 10px 0 #0000ff" }} />
          <SuccessClipart size={50} style={{ border: "2px solid #000", transform: "rotate(12deg)" }} />
          <SuccessClipart size={160} style={{ width: "120px", height: "60px", border: "5px dashed #ff0000" }} />
        </div>
        <div className="drift" style={{ position: "absolute", top: "40%", right: "5%", fontSize: "50px" }}>🎉</div>
        <div className="spin-slow" style={{ position: "absolute", bottom: "10px", left: "10%", fontSize: "44px" }}>⭐</div>
        <p style={{ fontFamily: "'Times New Roman', serif", color: "#00ffff", fontSize: "20px", maxWidth: "500px", margin: "20px auto", textAlign: "justify" }}>
          We once shook hands with a trophy. It was a Tuesday. The trophy said nothing. We said nothing. Business was conducted. Please do not ask follow-up questions about the trophy or the handshake or the Tuesday. Thank you for your continued interest in our success story.
        </p>
      </section>

      <hr style={{ border: "none", height: "8px", background: "#000" }} />

      {/* Under construction */}
      <section style={{ background: "repeating-linear-gradient(45deg,#000 0 20px,#ff0 20px 40px)", padding: "40px 10px", textAlign: "center" }}>
        <ConstructionGraphic size={120} className="wobble" />
        <h2 className="blink" style={{ fontFamily: "Impact", fontSize: "56px", color: "#ff0000", background: "#000", display: "inline-block", padding: "6px 16px", border: "4px outset #ff0" }}>UNDER CONSTRUCTION</h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", color: "#ffff00", fontSize: "18px", marginTop: "10px" }}>since 1998. check back in 2005.</p>
      </section>

      <hr style={{ border: "none", height: "14px", background: "repeating-linear-gradient(90deg,#00f 0 14px,#0ff 14px 28px)" }} />

      {/* pointless FAQ */}
      <section style={{ background: "#00ff00", padding: "30px 10px", border: "10px dotted #ff00ff" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "44px", color: "#ff0000", textAlign: "center", textDecoration: "underline wavy #0000ff" }}>F.A.Q. (nobody asked)</h2>
        <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "'Trebuchet MS', sans-serif" }}>
          {[
            ["Q: Is this website finished?", "A: No. It will never be finished. That is the point."],
            ["Q: Can I click the buttons?", "A: You may. We cannot stop you."],
            ["Q: Why does the background hurt?", "A: That is a feature, not a bug."],
            ["Q: Who made this?", "A: Nobody is taking credit."],
            ["Q: Is there a Home 2?", "A: Yes. It is the same as Home. Do not be fooled."],
          ].map((row, i) => (
            <div key={i} style={{ border: "2px solid #000", margin: "8px 0", padding: "8px", background: i % 2 ? "#ffff00" : "#00ffff", color: "#0000ff" }}>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>{row[0]}</div>
              <div style={{ fontStyle: "italic", fontSize: "14px", color: "#ff0000" }}>{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", height: "6px", background: "#ff8800" }} />

      {/* giant CLICK HERE + IMPORTANT tiny button */}
      <section style={{ background: "radial-gradient(circle, #ff0000, #000)", padding: "40px 10px", textAlign: "center" }}>
        <button
          onClick={() => showPopup(popups[Math.floor(Math.random()*popups.length)])}
          className="bounce"
          style={{
            fontFamily: "Impact",
            fontSize: "clamp(40px, 8vw, 90px)",
            color: "#ffff00",
            background: "#0000ff",
            border: "12px outset #ff00ff",
            padding: "20px 40px",
            cursor: "pointer",
            textShadow: "3px 3px 0 #000",
          }}
        >
          CLICK HERE!!!
        </button>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => showPopup("THIS WAS IMPORTANT. WAS IT?")}
            style={{ fontSize: "8px", fontFamily: "Arial", color: "#fff", background: "#000", border: "1px solid #fff", padding: "1px 2px", cursor: "pointer" }}
            aria-label="important tiny button"
          >
            IMPORTANT
          </button>
        </div>
      </section>

      {/* random quote */}
      <section style={{ background: "#0000ff", padding: "24px", textAlign: "center", borderTop: "6px solid #ff0", borderBottom: "6px solid #ff0" }}>
        <blockquote style={{ fontFamily: "Papyrus, fantasy", color: "#00ffff", fontSize: "28px", fontStyle: "italic", margin: 0 }}>
          "To click or not to click, that is the question." — A button, probably
        </blockquote>
      </section>

      {/* audio button */}
      <section style={{ background: "#ff00ff", padding: "20px", textAlign: "center" }}>
        <CheeseSound />
      </section>

      {/* unnecessary paragraph */}
      <section style={{ background: "#ffff00", padding: "20px" }}>
        <p style={{ fontFamily: "'Times New Roman', serif", fontSize: "16px", color: "#000080", maxWidth: "700px", margin: "0 auto", textAlign: "justify", lineHeight: 1.4 }}>
          As you may or may not be aware, this website is a website. It was made by a person (probably) using a computer (allegedly) at some point in time (unclear). The colors were chosen by spinning a wheel. The fonts were chosen by rolling dice. The buttons were chosen by a committee of one (1) confused individual. We appreciate your patience as we continue to not improve. Thank you for visiting. Please do not visit again. But if you do, there will be more of this.
        </p>
      </section>

      {/* testimonials marquee */}
      <TestimonialsMarquee />

      <hr style={{ border: "none", height: "8px", background: "repeating-linear-gradient(90deg,#f0f 0 12px,#0ff 12px 24px)" }} />

      {/* MORE FEATURES GRID OF TERROR */}
      <section style={{ background: "repeating-linear-gradient(60deg,#000080 0 30px,#4b0082 30px 60px)", padding: "24px 10px", borderTop: "10px ridge #ff00ff", borderBottom: "10px ridge #ff00ff" }}>
        <h2 style={{ fontFamily: "Impact", fontSize: "52px", color: "#ffff00", textAlign: "center", textShadow: "3px 3px 0 #ff0000", transform: "rotate(-1deg)", marginBottom: "16px" }}>EVEN MORE FEATURES!!!</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", maxWidth: "900px", margin: "0 auto" }}>
          <FakeSearch />
          <NewsletterSignup />
          <MoodRing />
          <WordOfTheDay />
          <SpinWheel />
          <TipJar />
          <NumberGuess />
          <NowPlaying />
          <GlobeWidget />
          <WebRing />
        </div>
      </section>

      <hr style={{ border: "none", height: "12px", background: "repeating-linear-gradient(45deg,#ff0 0 16px,#f00 16px 32px)" }} />

      {/* guestbook */}
      <section style={{ background: "#00ffff", padding: "30px 10px", border: "8px double #ff00ff" }}>
        <Guestbook />
      </section>

      <hr style={{ border: "none", height: "6px", background: "#000" }} />

      {/* footer */}
      <footer style={{ background: "#000", color: "#0f0", padding: "30px 10px", textAlign: "center", fontFamily: "'Courier New', monospace", borderTop: "10px ridge #ff00ff" }}>
        <div className="blink" style={{ fontSize: "24px" }}>© 1998-2004 (maybe 2026) ALL RIGHTS RESERVED (probably)</div>
        <div style={{ marginTop: "10px" }}>
          <Link to="/" style={{ color: "#ffff00", textDecoration: "underline" }}>HOME</Link>
          {" | "}
          <Link to="/" style={{ color: "#ff00ff", textDecoration: "line-through" }}>HOME (broken)</Link>
          {" | "}
          <Link to="/home-2" style={{ color: "#00ffff" }}>HOME 2</Link>
          {" | "}
          <span onClick={() => alert("this is just text but it is clickable")} style={{ color: "#ffffff", cursor: "pointer", textDecoration: "underline" }}>contact (it is just text)</span>
        </div>
        <div style={{ marginTop: "8px", fontSize: "10px", color: "#ff8800" }}>
          This website is 100% certified by absolutely nobody.
        </div>
        <div style={{ marginTop: "4px", fontSize: "9px" }}>
          BEST VIEWED AT 800x600 ON INTERNET EXPLORER 6 · LAST UPDATED: January 1, 2004
        </div>
      </footer>

      <CookieBanner />

      {/* popup overlay */}
      {popup && (
        <div style={{
          position: "fixed", top: "30%", left: "50%", transform: "translateX(-50%)",
          background: "#c0c0c0", border: "6px outset #fff", padding: "16px 24px",
          fontFamily: "Impact", fontSize: "28px", color: "#000", zIndex: 100,
          boxShadow: "8px 8px 0 #000", textAlign: "center", maxWidth: "80vw",
        }}>
          <div>{popup}</div>
          <button onClick={() => setPopup(null)} style={{ marginTop: "12px", fontFamily: "'Courier New', monospace", background: "#0000ff", color: "#fff", border: "3px outset #fff", padding: "4px 12px", cursor: "pointer" }}>OK FINE</button>
        </div>
      )}

      {/* joke popup that pops itself */}
      {jokeOpen && (
        <div style={{
          position: "fixed", top: "10px", right: "10px", background: "#ffff00", border: "4px dashed #ff0000",
          padding: "8px", maxWidth: "200px", fontFamily: "'Comic Sans MS', cursive", fontSize: "13px", color: "#ff00ff", zIndex: 60,
        }}>
          <button onClick={() => setJokeOpen(false)} style={{ float: "right", fontSize: "10px", cursor: "pointer" }}>x</button>
          📢 IMPORTANT ANNOUNCEMENT: this popup is important. probably. it has no close button (it does).
        </div>
      )}
    </div>
  );
}

function CheeseSound() {
  const play = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [440, 660, 880, 660, 440];
      notes.forEach((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = i % 2 ? "square" : "sawtooth";
        o.frequency.value = f;
        o.connect(g); g.connect(ctx.destination);
        g.gain.value = 0.08;
        o.start(i * 0.12);
        o.stop(i * 0.12 + 0.11);
      });
    } catch {}
  };
  return (
    <button onClick={play} className="shake-hover" style={{ fontFamily: "'Courier New', monospace", fontSize: "12px", background: "#00ff00", color: "#0000ff", border: "6px outset #ff0", padding: "6px 12px", cursor: "pointer" }}>
      ▶ PLAY SOUND (do it)
    </button>
  );
}