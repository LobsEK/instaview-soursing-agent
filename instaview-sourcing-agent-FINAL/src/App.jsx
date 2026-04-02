import { useState, useRef, useEffect } from "react";

const C = {
  bg: "#EDEDEE",
  white: "#FFFFFF",
  border: "#E2E2E4",
  borderLight: "#EFEFEF",
  text: "#1A1A1A",
  textSec: "#5F6368",
  textMuted: "#9AA0A6",
  primary: "#6C5CE7",
  primaryLight: "#EDE9FE",
  primaryDark: "#5B4BD5",
  green: "#34A853",
  greenBg: "#E6F4EA",
  linkedIn: "#0A66C2",
  shadow: "0 2px 12px rgba(0,0,0,0.06)",
  shadowHover: "0 4px 20px rgba(0,0,0,0.1)",
};

/* ════════════════════════════════════════════════════════
   NAV ICON
   ════════════════════════════════════════════════════════ */
function NI({ t, c: cl }) {
  const c = cl || C.textSec; const s = { width: 20, height: 20, display: "block" };
  const m = {
    grid: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
    mic: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>,
    briefcase: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
    users: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    search: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    bot: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 8V5"/><circle cx="12" cy="3" r="2"/><circle cx="9" cy="14" r="1.5" fill={c}/><circle cx="15" cy="14" r="1.5" fill={c}/></svg>,
    credit: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    settings: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    help: <svg style={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  };
  return m[t] || null;
}

const CL = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>;
const CR = ({ size = 14 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>;

/* ════════════════════════════════════════════════════════
   SIDEBAR
   ════════════════════════════════════════════════════════ */
function Sidebar({ active, onNav, col, onToggle }) {
  const items = [
    { id: "dashboard", label: "Dashboard", icon: "grid" },
    { id: "pohovory", label: "Pohovory", icon: "mic" },
    { id: "pozice", label: "Pracovní pozice", icon: "briefcase" },
    { id: "kandidati", label: "Kandidáti", icon: "users" },
    { id: "sourcing", label: "Talent Sourcing", icon: "search" },
    { id: "agenti", label: "Agenti", icon: "bot" },
  ];
  const bot = [
    { id: "fakturace", label: "Fakturace a používání", icon: "credit" },
    { id: "nastaveni", label: "Nastavení", icon: "settings" },
    { id: "podpora", label: "Podpora", icon: "help" },
  ];
  const w = col ? 60 : 240;
  const Btn = ({ children, onClick }) => (
    <button onClick={onClick} style={{ width: 28, height: 28, borderRadius: 7, border: `1px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
      onMouseEnter={e => e.currentTarget.style.background = C.borderLight} onMouseLeave={e => e.currentTarget.style.background = C.white}
    >{children}</button>
  );
  return (
    <div style={{ width: w, minWidth: w, height: "100vh", background: C.white, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", transition: "width .25s ease, min-width .25s ease", overflow: "hidden" }}>
      <div style={{ padding: col ? "18px 0 10px" : "18px 14px 10px 20px", display: "flex", alignItems: "center", justifyContent: col ? "center" : "space-between", transition: "padding .25s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: col ? "pointer" : "default" }} onClick={col ? onToggle : undefined}>
          <div style={{ width: 32, height: 32, minWidth: 32, background: C.primary, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4 18L12 6l8 12H4z"/></svg>
          </div>
          {!col && <span style={{ fontSize: 17, fontWeight: 700, color: C.text, letterSpacing: -0.3, whiteSpace: "nowrap" }}>instaview</span>}
        </div>
        {!col && <Btn onClick={onToggle}><CL /></Btn>}
      </div>
      {col && <div style={{ display: "flex", justifyContent: "center", padding: "4px 0 8px" }}><Btn onClick={onToggle}><CR /></Btn></div>}
      {!col && <>
        <div style={{ padding: "4px 16px 12px" }}>
          <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 500 }}>Zvolená společnost</div>
          <div style={{ background: C.borderLight, borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: C.primary }}>IN</div>
            <span style={{ fontSize: 13, fontWeight: 500, color: C.text, flex: 1 }}>instaview - test</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        <div style={{ padding: "4px 16px 16px" }}>
          <div style={{ background: `linear-gradient(135deg, ${C.primaryLight}, #F3E8FF)`, borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.green }}/>
              <span style={{ fontSize: 12, fontWeight: 500, color: C.textSec }}>AI minuty</span>
              <div style={{ marginLeft: "auto", fontSize: 10, fontWeight: 600, color: C.primary, background: C.white, borderRadius: 4, padding: "2px 8px", cursor: "pointer" }}>Koupit</div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.primary }}>829.89 min</div>
            <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>Dostupné</div>
          </div>
        </div>
      </>}
      <nav style={{ flex: 1, padding: col ? "0 6px" : "0 8px", overflowY: "auto" }}>
        {items.map(it => {
          const a = it.id === active;
          return (
            <div key={it.id} onClick={() => onNav(it.id)} title={col ? it.label : undefined} style={{ display: "flex", alignItems: "center", gap: 10, padding: col ? "10px 0" : "9px 12px", justifyContent: col ? "center" : "flex-start", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: a ? C.primaryLight : "transparent", transition: "background .15s" }}
              onMouseEnter={e => { if (!a) e.currentTarget.style.background = C.borderLight; }} onMouseLeave={e => { e.currentTarget.style.background = a ? C.primaryLight : "transparent"; }}>
              <NI t={it.icon} c={a ? C.primary : C.textSec} />
              {!col && <span style={{ fontSize: 13.5, fontWeight: a ? 600 : 450, color: a ? C.primary : C.text, whiteSpace: "nowrap" }}>{it.label}</span>}
            </div>
          );
        })}
      </nav>
      <div style={{ padding: col ? "8px 6px 16px" : "8px 8px 16px", borderTop: `1px solid ${C.border}` }}>
        {bot.map(it => (
          <div key={it.id} title={col ? it.label : undefined} style={{ display: "flex", alignItems: "center", gap: 10, padding: col ? "9px 0" : "8px 12px", justifyContent: col ? "center" : "flex-start", borderRadius: 8, cursor: "pointer", fontSize: 13, color: C.textSec }}
            onMouseEnter={e => e.currentTarget.style.background = C.borderLight} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <NI t={it.icon} />{!col && <span style={{ whiteSpace: "nowrap" }}>{it.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   HISTORY PANEL
   ════════════════════════════════════════════════════════ */
function HistPanel({ hist, col, onToggle }) {
  if (col) return (
    <div style={{ width: 44, minWidth: 44, background: C.white, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 18, gap: 8 }}>
      <button onClick={onToggle} style={{ width: 32, height: 32, borderRadius: 7, border: `1px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        onMouseEnter={e => e.currentTarget.style.background = C.borderLight} onMouseLeave={e => e.currentTarget.style.background = C.white}><CR /></button>
      <div style={{ writingMode: "vertical-rl", fontSize: 11, color: C.textMuted, fontWeight: 500, marginTop: 8, cursor: "pointer" }} onClick={onToggle}>História</div>
    </div>
  );
  return (
    <div style={{ width: 250, minWidth: 250, background: C.white, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "18px 14px 14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={onToggle} style={{ width: 28, height: 28, borderRadius: 7, border: `1px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          onMouseEnter={e => e.currentTarget.style.background = C.borderLight} onMouseLeave={e => e.currentTarget.style.background = C.white}><CL /></button>
        <span style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>História hľadaní</span>
        <button style={{ width: 28, height: 28, borderRadius: 7, border: `1px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
      <div style={{ padding: "0 14px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: C.borderLight, borderRadius: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input placeholder="Hľadať..." style={{ border: "none", background: "none", outline: "none", fontSize: 12.5, color: C.text, width: "100%", fontFamily: "inherit" }}/>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 8px" }}>
        {hist.map(h => (
          <div key={h.id} style={{ padding: "10px 12px", borderRadius: 8, marginBottom: 2, cursor: "pointer", background: h.active ? C.primaryLight : "transparent" }}
            onMouseEnter={e => { if (!h.active) e.currentTarget.style.background = C.borderLight; }} onMouseLeave={e => { e.currentTarget.style.background = h.active ? C.primaryLight : "transparent"; }}>
            <div style={{ fontSize: 13, fontWeight: h.active ? 600 : 450, color: h.active ? C.primary : C.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.title}</div>
            <div style={{ fontSize: 11, color: C.textMuted, marginTop: 3 }}>{h.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   CHAT COMPONENTS
   ════════════════════════════════════════════════════════ */
const AgentAv = () => <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>;
const UserAv = () => <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: C.borderLight, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 00-16 0"/></svg></div>;

function Bubble({ text, isUser, variant }) {
  const v = variant || "normal";
  if (isUser) return (
    <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
      <UserAv />
      <div style={{ padding: "13px 18px", borderRadius: 16, background: C.borderLight, color: C.text, fontSize: 14, lineHeight: 1.6, maxWidth: "85%" }}>{text}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "flex-start" }}>
      <AgentAv />
      <div style={{ padding: "13px 18px", borderRadius: 16, background: C.white, maxWidth: "85%", fontSize: 14, lineHeight: 1.6, boxShadow: "0 1px 6px rgba(0,0,0,0.05)", color: v === "done" ? C.primary : C.text, fontStyle: v === "done" ? "italic" : "normal" }}>
        {v === "thinking" ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="2" style={{ animation: "ss .9s linear infinite" }}><circle cx="12" cy="12" r="10" strokeDasharray="32 64"/></svg>Thinking...</span>
        ) : text}
      </div>
    </div>
  );
}

function Steps({ steps }) {
  return (
    <div style={{ marginLeft: 18, marginBottom: 16, paddingLeft: 28, position: "relative" }}>
      <div style={{ position: "absolute", left: 17, top: -6, bottom: 4, width: 2, background: C.border }}/>
      <div style={{ position: "absolute", left: 12, top: -10 }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={C.border} strokeWidth="1.5"><polyline points="2 8 6 2 10 8"/></svg></div>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 7, position: "relative" }}>
          <div style={{ position: "absolute", left: -16, top: 5, width: 7, height: 7, borderRadius: "50%", background: C.textMuted, border: `2px solid ${C.bg}` }}/>
          <span style={{ fontSize: 12, color: C.textMuted, fontStyle: "italic", lineHeight: 1.5 }}>{s}</span>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   CANDIDATE ROW (unanalyzed)
   ════════════════════════════════════════════════════════ */
function CandRow({ c, sel, onToggle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: C.white, borderRadius: 14, marginBottom: 8, boxShadow: sel ? C.shadowHover : C.shadow, border: sel ? `2px solid ${C.primary}` : "1.5px solid transparent", cursor: "pointer", transition: "all .2s" }} onClick={onToggle}>
      <div style={{ width: 22, height: 22, borderRadius: 6, flexShrink: 0, border: sel ? "none" : `2px solid ${C.border}`, background: sel ? C.primary : C.white, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s" }}>
        {sel && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
      </div>
      <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: C.linkedIn, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "white", fontWeight: 800, fontSize: 17, fontFamily: "serif" }}>in</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: C.text }}>{c.name}</div>
        <div style={{ fontSize: 11.5, color: C.textMuted, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.headline}</div>
      </div>
      <button onClick={e => { e.stopPropagation(); onToggle(); }} style={{ padding: "9px 16px", borderRadius: 10, border: "none", background: C.primary, color: "white", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, boxShadow: "0 2px 8px rgba(108,92,231,0.3)" }}>Analyze a profile</button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   ANALYZED CARD
   ════════════════════════════════════════════════════════ */
function ACard({ c, liked, ignored, onLike, onIgnore }) {
  const sc = c.score >= 90 ? C.green : c.score >= 75 ? "#F59E0B" : C.textSec;
  return (
    <div style={{ background: C.white, borderRadius: 20, padding: 26, boxShadow: ignored ? "none" : C.shadow, border: liked ? `2px solid ${C.green}` : `1.5px solid ${ignored ? C.border : "transparent"}`, opacity: ignored ? 0.45 : 1, transition: "all .25s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div style={{ position: "relative" }}>
          <div style={{ width: 60, height: 60, borderRadius: 30, background: C.borderLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 00-16 0"/></svg>
          </div>
          <div style={{ position: "absolute", bottom: -2, left: -2, background: C.greenBg, border: `2.5px solid ${C.white}`, borderRadius: 8, padding: "2px 7px", fontSize: 10.5, fontWeight: 800, color: sc }}>{c.score}%</div>
        </div>
        <div style={{ flex: 1 }}><div style={{ fontSize: 17, fontWeight: 700, color: C.text }}>{c.name}</div></div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button style={{ flex: 1, padding: "9px 14px", borderRadius: 10, border: `1.5px solid ${C.linkedIn}`, background: C.white, color: C.linkedIn, fontSize: 11.5, fontWeight: 600, cursor: "pointer" }}>Contact on LinkedIn</button>
        <button style={{ flex: 1, padding: "9px 14px", borderRadius: 10, border: `1.5px solid ${C.border}`, background: C.borderLight, color: C.textSec, fontSize: 11.5, fontWeight: 600, cursor: "pointer" }}>Save to database or send email</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 800, color: C.text, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>Why they are a good fit for the role</div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: C.textSec, lineHeight: 1.75 }}>
            {c.fitReasons.map((r, i) => <li key={i} style={{ marginBottom: 4 }}>{r}</li>)}
          </ul>
        </div>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 800, color: C.text, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>Relevant experience</div>
          {c.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{exp.role}</div>
              <div style={{ fontSize: 11, color: C.textMuted }}>{exp.company} — {exp.duration}</div>
              <div style={{ fontSize: 11, color: C.textSec, marginTop: 2, fontStyle: "italic" }}>Why Relevant: {exp.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: C.borderLight, borderRadius: 14, padding: "16px 18px", marginBottom: 18 }}>
        <div style={{ fontSize: 10.5, fontWeight: 800, color: C.text, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>AI Match Analysis</div>
        <div style={{ fontSize: 12, color: C.textSec, lineHeight: 1.7 }}>{c.aiAnalysis}</div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 10.5, fontWeight: 800, color: C.text, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Key Skills</div>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {c.skills.map((s, i) => <span key={i} style={{ fontSize: 11.5, color: C.text, border: `1.5px solid ${C.border}`, borderRadius: 20, padding: "5px 14px", fontWeight: 500 }}>{s}</span>)}
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, paddingTop: 14, borderTop: `1px solid ${C.borderLight}` }}>
        <button onClick={onLike} style={{ flex: 1, padding: "10px", borderRadius: 12, border: "none", background: liked ? C.green : C.greenBg, color: liked ? C.white : C.green, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: liked ? "0 2px 10px rgba(52,168,83,0.3)" : "none" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill={liked ? "white" : "none"} stroke={liked ? "white" : C.green} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>Save
        </button>
        <button onClick={onIgnore} style={{ flex: 1, padding: "10px", borderRadius: 12, border: "none", background: ignored ? C.textMuted : C.borderLight, color: ignored ? C.white : C.textMuted, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ignored ? "white" : C.textMuted} strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Ignore
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MOCK DATA
   ════════════════════════════════════════════════════════ */
const UNAN = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: ["Eva Kováčová","Marek Novák","Zuzana Tóthová","Jakub Horváth","Petra Szabová","Andrej Procházka","Mária Kučerová","Tomáš Baláž","Katarína Vargová","Lukáš Molnár","Barbora Némethová","Filip Krajčovič","Simona Richterová","Daniel Kráľ","Veronika Blahová","Michal Dostál"][i],
  headline: "Information about the candidate and whether they meet the basic criteria.",
}));

const ANAL = [
  { id:101,name:"Eva Kováčová",score:95,fitReasons:["Strong Experience With Python And Development Of Production ML Systems, Including LLM And GenAI","Deep Knowledge Of Algorithms, Data Structures, And Cloud Platforms (AWS, Azure)","More Than 4 Years Of Relevant Experience In Tech Companies","Excellent Academic Background (PhD In AI/ML)"],experience:[{role:"AI Research Developer",company:"Ataicams",duration:"4 Yrs",note:"Proven Experience With Python In Production, ML Model Development"},{role:"Senior Data Scientist",company:"IBM",duration:"6 Mo",note:"Experience With GenAI, LLM, And Cloud Platforms"},{role:"Researcher PhD",company:"University Of Liverpool",duration:"4 Yrs",note:"PhD In Reinforcement Learning And Game Theory"}],aiAnalysis:"Strong Candidate With A PhD In AI/ML And Over 4 Years Of Experience In Developing Production Systems In Python. Deep Knowledge Of Algorithms And Cloud Platforms Is Highly Relevant.",skills:["Python","Linux","AWS","Data Science","Machine Learning","Artificial Intelligence"]},
  { id:102,name:"Marek Novák",score:91,fitReasons:["Extensive Enterprise UX Design Experience","Data-Driven Design With Strong User Research","Leadership Experience Managing Teams"],experience:[{role:"UX Design Lead",company:"EnterpriseInc",duration:"4 Yrs",note:"Led UX Strategy For Platform With 50k+ Users"},{role:"Senior UX Designer",company:"AgencyPro",duration:"4 Yrs",note:"Diverse Client Portfolio Including Banks And Fintech"}],aiAnalysis:"Strong Enterprise UX Background With Emphasis On User Research. Leadership Experience Makes Him Ideal For Senior Roles.",skills:["Figma","UX Research","Design Systems","Analytics","Team Leadership","Enterprise UX"]},
  { id:103,name:"Zuzana Tóthová",score:87,fitReasons:["Strong Portfolio Of Mobile And Web Applications","Experience With Agile And Cross-Functional Teams","Active Design Community Contributor"],experience:[{role:"Product Designer",company:"MobileApp s.r.o.",duration:"2.5 Yrs",note:"Designed App With 200k+ Downloads"},{role:"UI/UX Designer",company:"WebStudio",duration:"1.5 Yrs",note:"15+ Client Projects"}],aiAnalysis:"Strong Growth Potential With Solid Portfolio. Mobile-First Experience Valuable For Modern Product Roles.",skills:["Figma","Mobile Design","Agile","UI Design","Interaction Design","Prototyping"]},
  { id:104,name:"Jakub Horváth",score:82,fitReasons:["Good Combination Of UX Research And Visual Design","Experience With B2B And B2C Products"],experience:[{role:"UX/UI Designer",company:"SaaSPlatform",duration:"3 Yrs",note:"Dashboard And Admin Panel Design"},{role:"Graphic/UI Designer",company:"Freelance",duration:"2 Yrs",note:"Brand And Web Design For Startups"}],aiAnalysis:"Solid Foundation In Design With Good Transition From Visual To UX. Medium Priority Candidate.",skills:["Figma","Adobe Suite","Dashboard Design","Brand Design","CSS","Responsive Design"]},
];

/* ════════════════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════════════════ */
export default function App() {
  const [sCol, setSCol] = useState(false);
  const [hCol, setHCol] = useState(false);
  const [activeNav, setActiveNav] = useState("sourcing");
  const [phase, setPhase] = useState("initial");
  const [input, setInput] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [steps, setSt] = useState([]);
  const [sel, setSel] = useState(new Set());
  const [liked, setLiked] = useState(new Set());
  const [ignored, setIgnored] = useState(new Set());
  const [sortBy, setSortBy] = useState("score");
  const [anCount, setAnCount] = useState(0);
  const [hist] = useState([
    { id: 1, title: "Product Designer search", date: "Dnes", active: true },
    { id: 2, title: "Full-Stack Developer SK/CZ", date: "Včera" },
    { id: 3, title: "DevOps Engineer - Remote", date: "28.03.2026" },
  ]);
  const ceRef = useRef(null);

  useEffect(() => { ceRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, steps]);

  const runSearch = (q) => {
    setMsgs([{ type: "user", text: q }]);
    setPhase("searching");
    setTimeout(() => { setMsgs(p => [...p, { type: "agent", text: "No problem, I'll go through LinkedIn and other platforms right away. Do you have any additional requirements?" }]); setSt(["I am looking for candidates."]); }, 900);
    setTimeout(() => { setSt(p => [...p, "Finding candidates on LinkedIn, searching and reviewing their profiles."]); }, 2500);
    setTimeout(() => { setSt(p => [...p, "I am analyzing candidates. I did not find enough profiles, so I am searching again and expanding the search to other platforms."]); }, 4200);
    setTimeout(() => { setMsgs(p => [...p, { type: "thinking" }]); }, 5500);
    setTimeout(() => { setMsgs(p => p.filter(m => m.type !== "thinking").concat([{ type: "done", text: "Done... Is it okay, or is there still something wrong?" }])); setPhase("results"); }, 7200);
  };

  const handleInit = () => { if (!input.trim()) return; runSearch(input.trim()); setInput(""); };
  const handleChat = () => {
    if (!chatInput.trim()) return;
    const m = chatInput.trim(); setChatInput("");
    setMsgs(p => [...p, { type: "user", text: m }]);
    if (phase === "results") {
      setTimeout(() => setMsgs(p => [...p, { type: "thinking" }]), 400);
      setTimeout(() => { setAnCount(sel.size > 0 ? sel.size : UNAN.length); setMsgs(p => p.filter(x => x.type !== "thinking").concat([{ type: "done", text: "Done! Profiles analyzed and ranked." }])); setPhase("analyzed"); }, 2500);
    }
  };
  const handleAnalyze = () => {
    setMsgs(p => [...p, { type: "user", text: `This looks good to me. Can you analyze all ${UNAN.length} candidates you found and rank them based on experience?` }]);
    setTimeout(() => setMsgs(p => [...p, { type: "thinking" }]), 400);
    setTimeout(() => { setAnCount(sel.size > 0 ? sel.size : UNAN.length); setMsgs(p => p.filter(x => x.type !== "thinking").concat([{ type: "done", text: "Done! Profiles analyzed and ranked by experience." }])); setPhase("analyzed"); }, 2500);
  };

  const sorted = [...ANAL].sort((a, b) => sortBy === "score" ? b.score - a.score : a.name.localeCompare(b.name));

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter',-apple-system,sans-serif", background: C.bg, overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      <style>{`@keyframes ss{to{transform:rotate(360deg)}}`}</style>

      <Sidebar active={activeNav} onNav={setActiveNav} col={sCol} onToggle={() => setSCol(p => !p)} />
      <HistPanel hist={hist} col={hCol} onToggle={() => setHCol(p => !p)} />

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top header bar */}
        <div style={{ padding: "14px 28px", background: C.white, borderBottom: `1px solid ${C.border}`, boxShadow: "0 1px 4px rgba(0,0,0,0.03)", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>Chat with Sourcing Agent</div>
            <div style={{ fontSize: 11.5, color: C.textMuted }}>AI-powered candidate search and matching across platforms</div>
          </div>
          <div style={{ flex: 1 }}/>
          {phase !== "initial" && (
            <div style={{ display: "flex", alignItems: "center", gap: 7, borderRadius: 8, padding: "6px 14px", border: `1.5px solid ${C.border}`, fontSize: 12, fontWeight: 600 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.green }}/>Connected database
            </div>
          )}
        </div>

        {/* ── INITIAL PHASE ─────────────────────────── */}
        {phase === "initial" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 40px 80px" }}>
            <style>{`
              @keyframes typewriter { from { width: 0 } to { width: 100% } }
              @keyframes blink { 0%,100% { border-color: ${C.text} } 50% { border-color: transparent } }
              .tw-wrap { display: inline-block; overflow: hidden; white-space: nowrap; border-right: 3px solid ${C.text}; animation: typewriter 2s steps(44) 0.3s forwards, blink 0.7s step-end 2.3s 6; width: 0; }
            `}</style>

            {/* Typewriter heading */}
            <h1 style={{
              fontSize: 38, fontWeight: 700, color: C.text, textAlign: "center",
              marginBottom: 48, marginTop: 0, letterSpacing: -0.5, lineHeight: 1.2,
            }}>
              <span className="tw-wrap">Hello, I will find you the ideal candidate</span>
            </h1>

            {/* Dashed input box — white bg */}
            <div style={{
              maxWidth: 620, width: "100%",
              background: C.white,
              border: `2px dashed ${C.border}`,
              borderRadius: 20, padding: "22px 22px 16px",
            }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleInit(); } }}
                placeholder="Hello, what kind of candidate are you looking for on LinkedIn?"
                rows={2}
                style={{
                  width: "100%", border: "none", background: "none", outline: "none",
                  fontSize: 15.5, color: C.text, resize: "none", lineHeight: 1.6,
                  fontFamily: "inherit", padding: 0,
                }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{
                    padding: "6px 14px", borderRadius: 8,
                    border: `1.5px solid ${C.border}`, background: C.white,
                    fontSize: 12, color: C.textSec, cursor: "pointer", fontWeight: 500,
                  }}>URL link</button>
                  <button style={{
                    width: 34, height: 34, borderRadius: 8,
                    border: `1.5px solid ${C.border}`, background: C.white,
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
                  </button>
                </div>
                {/* Blue send button */}
                <button onClick={handleInit} style={{
                  width: 44, height: 44, borderRadius: 22, border: "none",
                  background: input.trim() ? "#4A6CF7" : "#B0B0B8",
                  cursor: input.trim() ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background .2s",
                  boxShadow: input.trim() ? "0 3px 14px rgba(74,108,247,0.4)" : "none",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── ACTIVE PHASE (chat + results) ─────────── */}
        {phase !== "initial" && (
          <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
            {/* Chat */}
            <div style={{ width: 320, minWidth: 320, display: "flex", flexDirection: "column", borderRight: `1px solid ${C.border}`, background: C.bg }}>
              <div style={{ flex: 1, overflowY: "auto", padding: "18px 16px 0" }}>
                {msgs.map((m, i) => {
                  if (m.type === "thinking") return <Bubble key={i} variant="thinking" />;
                  if (m.type === "done") return <Bubble key={i} text={m.text} variant="done" />;
                  return <Bubble key={i} text={m.text} isUser={m.type === "user"} />;
                })}
                {steps.length > 0 && <Steps steps={steps} />}
                <div ref={ceRef}/>
              </div>
              <div style={{ padding: "12px 14px 16px" }}>
                <div style={{ background: C.white, borderRadius: 16, padding: "12px 12px 12px 18px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: 10 }}>
                  <textarea value={chatInput} onChange={e => setChatInput(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleChat(); } }}
                    placeholder="Hello, what kind of candidate are you looking for on LinkedIn?"
                    rows={1} style={{ flex: 1, border: "none", background: "none", outline: "none", fontSize: 13.5, color: C.text, resize: "none", lineHeight: 1.5, fontFamily: "inherit", padding: 0, minHeight: 20 }}/>
                  <button onClick={handleChat} style={{ width: 36, height: 36, borderRadius: 18, border: "none", background: "#4A6CF7", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(74,108,247,0.3)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 10, paddingLeft: 4 }}>
                  <button style={{ padding: "5px 12px", borderRadius: 7, border: `1.5px solid ${C.border}`, background: C.white, fontSize: 11, color: C.textSec, cursor: "pointer" }}>URL link</button>
                  <button style={{ width: 28, height: 28, borderRadius: 7, border: `1.5px solid ${C.border}`, background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Results area */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {(phase === "results" || phase === "analyzed") && (
                <div style={{ display: "flex", alignItems: "flex-start", padding: "20px 28px", background: C.white, borderBottom: `1px solid ${C.border}`, boxShadow: "0 1px 4px rgba(0,0,0,0.03)", gap: 40 }}>
                  <div><div style={{ fontSize: 20, fontWeight: 800, color: C.text }}>Search results</div></div>
                  <div style={{ textAlign: "center" }}><div style={{ fontSize: 12, color: C.textMuted, marginBottom: 2 }}>Found profiles</div><div style={{ fontSize: 30, fontWeight: 800, color: C.text }}>100</div></div>
                  <div style={{ textAlign: "center" }}><div style={{ fontSize: 12, color: C.textMuted, marginBottom: 2 }}>Analyzed profiles</div><div style={{ fontSize: 30, fontWeight: 800, color: C.text }}>{anCount}</div></div>
                  <div style={{ flex: 1 }}/>
                  {phase === "results" && <button onClick={handleAnalyze} style={{ padding: "10px 20px", borderRadius: 10, border: "none", background: C.primary, color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", alignSelf: "center", boxShadow: "0 3px 12px rgba(108,92,231,0.3)" }}>Analyze all</button>}
                  {phase === "analyzed" && <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: "8px 14px", borderRadius: 10, border: `1.5px solid ${C.border}`, fontSize: 13, background: C.white, color: C.text, cursor: "pointer", fontFamily: "inherit", outline: "none", alignSelf: "center" }}><option value="score">Sort: Best match</option><option value="name">Sort: Name A-Z</option></select>}
                </div>
              )}
              <div style={{ flex: 1, overflowY: "auto", padding: phase === "searching" ? 0 : 22 }}>
                {phase === "searching" && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, border: `3.5px solid ${C.borderLight}`, borderTopColor: C.primary, animation: "ss .9s linear infinite" }}/>
                    <div style={{ fontSize: 14, color: C.textMuted, fontWeight: 500 }}>Searching for candidates...</div>
                  </div>
                )}
                {phase === "results" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {UNAN.map(c => <CandRow key={c.id} c={c} sel={sel.has(c.id)} onToggle={() => setSel(p => { const n = new Set(p); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n; })} />)}
                  </div>
                )}
                {phase === "analyzed" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    {sorted.map(c => <ACard key={c.id} c={c} liked={liked.has(c.id)} ignored={ignored.has(c.id)}
                      onLike={() => { setLiked(p => { const n = new Set(p); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n; }); setIgnored(p => { const n = new Set(p); n.delete(c.id); return n; }); }}
                      onIgnore={() => { setIgnored(p => { const n = new Set(p); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n; }); setLiked(p => { const n = new Set(p); n.delete(c.id); return n; }); }}
                    />)}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
