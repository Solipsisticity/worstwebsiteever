import React, { useState, useEffect } from "react";

// Local-only guestbook stored in localStorage. Terrible styling.
export default function Guestbook() {
  const [entries, setEntries] = useState(() => {
    try { return JSON.parse(localStorage.getItem("terrible_guestbook") || "[]"); } catch { return []; }
  });
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const sign = () => {
    if (!name.trim() || !msg.trim()) { alert("YOU MUST SIGN THE GUESTBOOK. BOTH BOXES. NOW."); return; }
    const e = { name: name.slice(0, 30), msg: msg.slice(0, 80), t: new Date().toLocaleString() };
    const next = [e, ...entries].slice(0, 20);
    setEntries(next);
    localStorage.setItem("terrible_guestbook", JSON.stringify(next));
    setName(""); setMsg("");
    alert("THANK YOU FOR SIGNING. NOBODY WILL READ IT.");
  };

  const clearAll = () => {
    if (confirm("DELETE THE ENTIRE GUESTBOOK? (yes)")) {
      setEntries([]); localStorage.removeItem("terrible_guestbook");
    }
  };

  return (
    <div style={{ background: "#c0c0c0", border: "6px ridge #ff00ff", padding: "12px", maxWidth: "560px", margin: "0 auto" }}>
      <h3 style={{ fontFamily: "Papyrus, fantasy", fontSize: "34px", color: "#0000ff", textAlign: "center", margin: "0 0 8px" }}>📖 SIGN MY GUESTBOOK!!!</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ur name" aria-label="your name"
        style={{ width: "100%", fontFamily: "'Comic Sans MS', cursive", fontSize: "16px", border: "4px inset #888", marginBottom: "6px", padding: "4px" }} />
      <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="say something nice (or don't)" aria-label="your message"
        style={{ width: "100%", fontFamily: "'Comic Sans MS', cursive", fontSize: "16px", border: "4px inset #888", marginBottom: "6px", padding: "4px" }} />
      <div style={{ display: "flex", gap: "6px" }}>
        <button onClick={sign} className="shake-hover" style={{ flex: 1, fontFamily: "Impact", fontSize: "22px", background: "#ff0000", color: "#ffff00", border: "5px outset #fff", cursor: "pointer" }}>SIGN IT!!!</button>
        <button onClick={clearAll} style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", background: "#000", color: "#0f0", border: "2px solid #0f0", cursor: "pointer" }}>nuke</button>
      </div>
      <div style={{ marginTop: "10px", maxHeight: "200px", overflowY: "auto", border: "3px dashed #000", background: "#fff" }}>
        {entries.length === 0 && <div style={{ fontFamily: "'Times New Roman', serif", color: "#888", padding: "8px", textAlign: "center", fontStyle: "italic" }}>no one has signed. be the first. or don't.</div>}
        {entries.map((e, i) => (
          <div key={i} style={{ borderBottom: "1px dotted #000", padding: "4px 6px", background: i % 2 ? "#ffffcc" : "#ccffff" }}>
            <div style={{ fontFamily: "Impact", color: ["#ff0000","#0000ff","#ff00ff","#008800"][i%4], fontSize: "16px" }}>{e.name} <span style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: "#666" }}>— {e.t}</span></div>
            <div style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: "14px", color: "#000" }}>{e.msg}</div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: "#666", textAlign: "center", marginTop: "4px" }}>entries stored in your browser only. forever. or until you nuke them.</div>
    </div>
  );
}