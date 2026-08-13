import React, { useState, useEffect } from "react";
import { SpinningGlobe } from "./LocalGraphics";

// A collection of additional terrible features, all local.

export function FakeSearch() {
  const [q, setQ] = useState("");
  const [res, setRes] = useState(null);
  const search = () => {
    if (!q.trim()) { setRes("type something first. anything."); return; }
    const reversed = q.split("").reverse().join("");
    const opts = [
      "no results found (good)",
      "did you mean: " + reversed + " ? no.",
      "searching... searching... done. nothing.",
      "1 result found. it is not relevant.",
      "ERROR 404: your query could not be located",
    ];
    setRes(opts[Math.floor(Math.random() * opts.length)]);
  };
  return (
    <div style={{ background: "#000080", border: "5px inset #c0c0c0", padding: "10px", maxWidth: "480px", margin: "0 auto" }}>
      <div style={{ fontFamily: "Impact", color: "#ffff00", fontSize: "22px", marginBottom: "6px" }}>🔍 SEARCH THE SITE</div>
      <div style={{ display: "flex", gap: "4px" }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && search()} placeholder="search for nothing" aria-label="search"
          style={{ flex: 1, fontFamily: "'Courier New', monospace", border: "3px inset #888" }} />
        <button onClick={search} className="shake-hover" style={{ fontFamily: "Impact", background: "#ff0000", color: "#fff", border: "3px outset #fff", cursor: "pointer" }}>GO</button>
      </div>
      {res && <div style={{ marginTop: "8px", fontFamily: "'Comic Sans MS', cursive", color: "#00ffff", fontSize: "14px" }} className="blink">{res}</div>}
    </div>
  );
}

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const sub = () => {
    if (!email.includes("@")) { alert("THAT IS NOT AN EMAIL. TRY AGAIN."); return; }
    setDone(true);
  };
  return (
    <div style={{ background: "#ff00ff", border: "8px double #ffff00", padding: "12px", textAlign: "center", maxWidth: "440px", margin: "0 auto" }}>
      <h3 style={{ fontFamily: "Papyrus, fantasy", color: "#00ffff", fontSize: "28px", margin: "0 0 6px" }} className="wobble">JOIN THE NEWSLETTER!!!</h3>
      {!done ? (
        <>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" aria-label="email"
            style={{ width: "100%", fontFamily: "Georgia, serif", border: "4px ridge #000", padding: "4px", marginBottom: "6px" }} />
          <button onClick={sub} className="bounce" style={{ fontFamily: "Impact", fontSize: "24px", background: "#00ff00", color: "#0000ff", border: "6px outset #fff", padding: "6px 16px", cursor: "pointer" }}>SUBSCRIBE NOW!!!</button>
        </>
      ) : (
        <div style={{ fontFamily: "Impact", color: "#ffff00", fontSize: "20px" }} className="blink">YOU ARE NOW SUBSCRIBER #1,000,000!!! (you are not)</div>
      )}
    </div>
  );
}

export function MoodRing() {
  const moods = [
    { m: "ANGRY", c: "#ff0000", t: "you are angry. click to fix it. (you cannot)" },
    { m: "CONFUSED", c: "#ff00ff", t: "you are confused. understandable." },
    { m: "TIRED", c: "#000080", t: "you are tired. go to bed. not here." },
    { m: "HUNGRY", c: "#ff8800", t: "you are hungry. eat something. not the website." },
    { m: "WHATEVER", c: "#00ff00", t: "you are whatever. mood of the day." },
  ];
  const [i, setI] = useState(0);
  return (
    <div style={{ textAlign: "center", background: "#000", padding: "14px", border: "6px groove #ffff00" }}>
      <div style={{ fontFamily: "Impact", color: "#ffff00", fontSize: "20px", marginBottom: "8px" }}>🔮 MOOD RING OF THE WEB</div>
      <div onClick={() => setI((i + 1) % moods.length)} style={{ cursor: "pointer", display: "inline-block", width: "90px", height: "90px", borderRadius: "50%", background: moods[i].c, border: "5px solid #fff", boxShadow: "0 0 20px " + moods[i].c, transition: "background 0.3s" }} title="click to change mood" />
      <div style={{ marginTop: "8px", fontFamily: "'Comic Sans MS', cursive", color: moods[i].c, fontSize: "24px", fontWeight: "bold" }}>{moods[i].m}</div>
      <div style={{ fontFamily: "'Times New Roman', serif", color: "#0f0", fontSize: "12px", marginTop: "4px" }}>{moods[i].t}</div>
    </div>
  );
}

export function WordOfTheDay() {
  const words = ["HTML", "MARQUEE", "BLINK", "GUESTBOOK", "WEBRING", "HITS", "UNDER CONSTRUCTION", "BEST VIEWED IN", "VISITOR #", "FRAMES", "TABLE LAYOUT", "COMIC SANS"];
  const [w, setW] = useState(words[0]);
  useEffect(() => { const id = setInterval(() => setW(words[Math.floor(Math.random() * words.length)]), 4000); return () => clearInterval(id); }, []);
  return (
    <div style={{ background: "#ffff00", border: "5px dashed #0000ff", padding: "10px", textAlign: "center" }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#000080", fontStyle: "italic" }}>word of the day:</div>
      <div className="spin-slow" style={{ display: "inline-block", fontFamily: "Impact", fontSize: "36px", color: "#ff0000", textShadow: "2px 2px 0 #000" }}>{w}</div>
    </div>
  );
}

export function SpinWheel() {
  const [deg, setDeg] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(null);
  const prizes = ["NOTHING", "A HIGH FIVE", "MORE POPUPS", "FREE HTML", "1 (one) HIT", "TRY AGAIN", "CONGRATS?", "EMPTY"];
  const colors = ["#ff0000","#ffff00","#0000ff","#ff00ff","#00ffff","#ff8800","#8800ff","#00ff00"];
  const spin = () => {
    if (spinning) return;
    setSpinning(true); setPrize(null);
    const target = deg + 360 * 5 + Math.floor(Math.random() * 360);
    setDeg(target);
    setTimeout(() => {
      setSpinning(false);
      const idx = Math.floor(((target % 360) / 360) * prizes.length);
      setPrize(prizes[idx]);
    }, 2200);
  };
  return (
    <div style={{ textAlign: "center", background: "#00ff00", padding: "14px", border: "8px ridge #ff00ff" }}>
      <div style={{ fontFamily: "Impact", fontSize: "26px", color: "#0000ff", marginBottom: "8px" }}>🎡 SPIN THE WHEEL OF PRIZES</div>
      <div style={{ position: "relative", width: "160px", height: "160px", margin: "0 auto", borderRadius: "50%", overflow: "hidden", border: "6px solid #000", transition: "transform 2s cubic-bezier(.2,.8,.2,1)", transform: "rotate(" + deg + "deg)" }}>
        {prizes.map((p, i) => {
          const a = (360 / prizes.length) * i;
          return (
            <div key={i} style={{ position: "absolute", left: "50%", top: "50%", width: "50%", height: "50%", transformOrigin: "0% 0%", transform: "rotate(" + a + "deg)", background: colors[i], clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}>
              <span style={{ position: "absolute", left: "10px", top: "4px", fontFamily: "'Courier New', monospace", fontSize: "9px", color: "#000", fontWeight: "bold" }}>{p}</span>
            </div>
          );
        })}
      </div>
      <button onClick={spin} disabled={spinning} className="shake-hover" style={{ marginTop: "10px", fontFamily: "Impact", fontSize: "22px", background: "#ff0000", color: "#fff", border: "5px outset #fff", padding: "6px 18px", cursor: spinning ? "wait" : "pointer" }}>{spinning ? "SPINNING..." : "SPIN!"}</button>
      {prize && <div style={{ marginTop: "8px", fontFamily: "Papyrus, fantasy", fontSize: "22px", color: "#ff00ff" }} className="blink">YOU WON: {prize}!!!</div>}
    </div>
  );
}

export function TipJar() {
  const [tips, setTips] = useState(0);
  const tip = () => {
    const next = tips + 1;
    setTips(next);
    alert("THANK YOU FOR THE TIP! You have tipped " + next + " time(s). The webmaster appreciates it. (the webmaster is not real)");
  };
  return (
    <div style={{ textAlign: "center", background: "#000080", border: "6px double #ffcc00", padding: "12px" }}>
      <div style={{ fontSize: "50px" }}>🫙</div>
      <div style={{ fontFamily: "Impact", color: "#ffcc00", fontSize: "20px" }}>TIP THE WEBMASTER</div>
      <div style={{ fontFamily: "'Courier New', monospace", color: "#0f0", fontSize: "14px" }}>tips so far: {tips}</div>
      <button onClick={tip} className="bounce" style={{ fontFamily: "Impact", fontSize: "18px", background: "#00ff00", color: "#0000ff", border: "4px outset #ffcc00", padding: "4px 12px", cursor: "pointer", marginTop: "6px" }}>+1 TIP (free)</button>
    </div>
  );
}

export function NumberGuess() {
  const [target] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [msg, setMsg] = useState("guess a number 1-100. you will not.");
  const tryGuess = () => {
    const g = parseInt(guess, 10);
    if (isNaN(g)) { setMsg("that is not a number."); return; }
    if (g === target) setMsg("YES! it was " + target + ". you win nothing.");
    else if (g < target) setMsg("too low. like this website.");
    else setMsg("too high. like your expectations.");
  };
  return (
    <div style={{ background: "#ff00ff", border: "5px inset #fff", padding: "10px", textAlign: "center", maxWidth: "320px", margin: "0 auto" }}>
      <div style={{ fontFamily: "Papyrus, fantasy", color: "#ffff00", fontSize: "22px" }}>GUESS THE NUMBER</div>
      <input value={guess} onChange={(e) => setGuess(e.target.value)} onKeyDown={(e) => e.key === "Enter" && tryGuess()} placeholder="1-100" aria-label="guess"
        style={{ fontFamily: "'Courier New', monospace", width: "80px", border: "3px inset #888", margin: "6px 0" }} />
      <button onClick={tryGuess} className="shake-hover" style={{ fontFamily: "Impact", background: "#0000ff", color: "#fff", border: "3px outset #fff", cursor: "pointer" }}>GUESS</button>
      <div style={{ fontFamily: "'Comic Sans MS', cursive", color: "#00ffff", fontSize: "14px", marginTop: "6px" }}>{msg}</div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const items = [
    '"this website changed my life. it made it worse." — anonymous',
    '"i have seen things. this is one of them." — a person',
    '"5 stars. i do not know why." — critic',
    '"i came for the buttons. i stayed because i was trapped. (i was not trapped)" — visitor',
    '"best website of 1998." — the year 1998',
  ];
  return (
    <div style={{ background: "#000", overflow: "hidden", whiteSpace: "nowrap", borderTop: "4px ridge #ff00ff", borderBottom: "4px ridge #ff00ff" }}>
      <div className="marquee-l" style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#ffff00", padding: "8px 0" }}>
        {items.join("    ★    ")}    ★    {items.join("    ★    ")}
      </div>
    </div>
  );
}

export function WebRing() {
  return (
    <div style={{ background: "#c0c0c0", border: "4px outset #fff", padding: "10px", textAlign: "center", fontFamily: "'Times New Roman', serif" }}>
      <div style={{ fontSize: "11px", color: "#000080" }}>⭐ THE TERRIBLE WEB RING ⭐</div>
      <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "6px", flexWrap: "wrap" }}>
        <button onClick={() => alert("previous site: does not exist")} style={{ fontFamily: "monospace", fontSize: "11px", background: "#000080", color: "#fff", border: "2px outset #fff", cursor: "pointer" }}>◀ PREV</button>
        <button onClick={() => alert("random site: this one")} style={{ fontFamily: "monospace", fontSize: "11px", background: "#008000", color: "#fff", border: "2px outset #fff", cursor: "pointer" }}>🎲 RANDOM</button>
        <button onClick={() => alert("next site: also does not exist")} style={{ fontFamily: "monospace", fontSize: "11px", background: "#800000", color: "#fff", border: "2px outset #fff", cursor: "pointer" }}>NEXT ▶</button>
      </div>
      <div style={{ fontSize: "9px", color: "#666", marginTop: "4px" }}>you are visitor #00000073 of this ring</div>
    </div>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);
  if (!show) return null;
  return (
    <div style={{ position: "fixed", bottom: "0", left: "0", right: "0", background: "#ffff00", border: "6px ridge #ff0000", padding: "10px", textAlign: "center", zIndex: 70, fontFamily: "'Comic Sans MS', cursive" }}>
      <div style={{ fontSize: "16px", color: "#ff0000", fontWeight: "bold" }}>🍪 WE USE COOKIES. AND CAKE. AND BISCUITS. ACCEPT ALL OF THEM.</div>
      <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "6px", flexWrap: "wrap" }}>
        <button onClick={() => setShow(false)} style={{ fontFamily: "Impact", fontSize: "16px", background: "#00ff00", color: "#000", border: "4px outset #fff", cursor: "pointer", padding: "4px 12px" }}>ACCEPT ALL</button>
        <button onClick={() => { setN(n + 1); if (n >= 2) setShow(false); else alert("THERE IS NO REJECT OPTION. KEEP TRYING."); }} style={{ fontFamily: "Impact", fontSize: "12px", background: "#ff0000", color: "#fff", border: "3px outset #fff", cursor: "pointer", padding: "4px 10px" }}>REJECT ({n})</button>
      </div>
    </div>
  );
}

export function NowPlaying() {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(x => (x + 1) % 40), 200);
    return () => clearInterval(id);
  }, [playing]);
  const bars = "▁▃▅▇▅▃▁".split("");
  return (
    <div style={{ background: "#000", border: "4px inset #0f0", padding: "8px", textAlign: "center", maxWidth: "300px", margin: "0 auto" }}>
      <div style={{ fontFamily: "'Courier New', monospace", color: "#0f0", fontSize: "14px" }}>🎵 NOW PLAYING: track_01.mp3</div>
      <div style={{ fontFamily: "monospace", color: "#0f0", fontSize: "22px", letterSpacing: "2px" }}>{bars.map((b, i) => bars[(i + t) % bars.length]).join("")}</div>
      <button onClick={() => setPlaying(p => !p)} style={{ fontFamily: "Impact", fontSize: "14px", background: "#ff00ff", color: "#fff", border: "3px outset #fff", cursor: "pointer", padding: "2px 10px" }}>{playing ? "PAUSE" : "PLAY"}</button>
      <div style={{ fontSize: "9px", color: "#0f0" }}>(no actual audio. it is a lie.)</div>
    </div>
  );
}

export function GlobeWidget() {
  return (
    <div style={{ textAlign: "center", background: "#000080", padding: "10px", border: "5px ridge #00ff00" }}>
      <SpinningGlobe size={70} className="spin-slow" />
      <div style={{ fontFamily: "Papyrus, fantasy", color: "#ffff00", fontSize: "16px" }}>YOU ARE HERE (probably)</div>
    </div>
  );
}