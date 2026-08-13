import React from "react";
import { Link } from "react-router-dom";

// A "confusingly similar" page — same chaos, slightly different, still terrible.
export default function Home2() {
  return (
    <div style={{ background: "repeating-linear-gradient(-30deg,#ff00ff 0 30px,#00ff00 30px 60px,#ffff00 60px 90px)", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ background: "#000", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="marquee-r" style={{ color: "#ff0000", fontFamily: "Papyrus, fantasy", fontSize: "26px" }}>
          THIS IS HOME 2. IT IS NOT HOME. OR IS IT. THIS IS HOME 2. IT IS NOT HOME. OR IS IT.
        </div>
      </div>
      <header style={{ textAlign: "center", padding: "40px 10px", backgroundImage: "linear-gradient(45deg,#00ffff,#ff8800,#8800ff)" }}>
        <h1 style={{
          fontFamily: "Papyrus, fantasy",
          fontSize: "clamp(40px, 10vw, 96px)",
          color: "#ff0000",
          textShadow: "3px 3px 0 #ffff00",
          transform: "rotate(2deg)",
          display: "inline-block",
        }} className="wobble">
          WELCOME TO HOME 2!!!
        </h1>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", color: "#0000ff", fontSize: "20px", marginTop: "10px" }}>
          (this is the same as home but the colors are different. do not be fooled.)
        </p>
        <Link to="/" className="blink" style={{ display: "inline-block", fontFamily: "Impact", fontSize: "30px", color: "#ffff00", background: "#0000ff", border: "6px outset #ff00ff", padding: "6px 16px", marginTop: "14px" }}>
          BACK TO HOME (maybe)
        </Link>
      </header>

      <hr style={{ border: "none", height: "16px", background: "repeating-linear-gradient(90deg,#000 0 16px,#0f0 16px 32px)" }} />

      <section style={{ background: "#000080", padding: "30px 10px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "44px", color: "#00ff00", textDecoration: "underline overline" }}>YOU ARE NOW ON HOME 2</h2>
        <p style={{ fontFamily: "'Times New Roman', serif", color: "#ff00ff", fontSize: "16px", maxWidth: "500px", margin: "12px auto" }}>
          You clicked a link. The link brought you here. Here is home 2. Home 2 is a home that is second. There was a first home. You left it. You can go back. Or you can stay. Staying is an option. So is leaving. We are neutral.
        </p>
        <div className="spin-slow" style={{ display: "inline-block", fontSize: "60px" }}>🔄</div>
      </section>

      <hr style={{ border: "none", height: "8px", background: "#ffff00" }} />

      <section style={{ background: "#ff00ff", padding: "24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Impact", color: "#ffff00", fontSize: "50px", transform: "rotate(-3deg)", display: "inline-block" }}>SAME BUTTONS, DIFFERENT HOME</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", marginTop: "16px" }}>
          {["[CLICK HOME]","[HOME 2 HOME]","[GO TO HOME]","[NOT HOME]","[HOME???]","[BACK]","[FORWARD?]","[SIDEWAYS]"].map((b, i) => (
            <button key={i} onClick={() => alert(b === "[SIDEWAYS]" ? "THERE IS NO SIDEWAYS" : "ok")} className="shake-hover" style={{
              fontFamily: "Impact", fontSize: i % 2 ? "10px" : "22px",
              color: ["#fff","#000","#ff0"][i%3], background: ["#000","#0ff","#f0f"][i%3],
              border: `${i%2?2:6}px solid #000`, padding: "4px 8px", cursor: "pointer",
            }}>{b}</button>
          ))}
        </div>
      </section>

      <footer style={{ background: "#000", color: "#0f0", padding: "20px", textAlign: "center", fontFamily: "monospace", borderTop: "8px ridge #ff0" }}>
        <div className="blink">© HOME 2 · ESTABLISHED MOMENTS AGO · LAST UPDATED: January 1, 2004</div>
        <Link to="/" style={{ color: "#ff00ff" }}>RETURN TO HOME 1</Link>
      </footer>
    </div>
  );
}