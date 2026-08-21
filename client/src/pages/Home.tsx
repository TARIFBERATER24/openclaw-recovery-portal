/**
 * Signal Room design reminder: this page is a calm, high-trust recovery cockpit.
 * Use carbon-blue space, Signal Mint verification accents, IBM Plex Mono for evidence,
 * and deliberate two-rail composition instead of generic centered marketing layouts.
 */
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleAlert,
  Clipboard,
  Copy,
  Cpu,
  FileCheck2,
  LockKeyhole,
  Network,
  Orbit,
  Radio,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

const phaseFiveCommand =
  "curl -fsSL https://8765-iwzxzgy9i8cjzkh9ly2e2-e1049970.us5.manus.computer/cloudshell_phase5_return_start.sh -o /tmp/phase5.sh && bash /tmp/phase5.sh";

const phases = [
  {
    id: "01",
    title: "Verify & isolate",
    state: "Verified",
    description: "Production identity and the original boot volume are matched before any move.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Offline repair",
    state: "Complete",
    description: "The original root volume is repaired only while mounted on the rescue VM.",
    icon: TerminalSquare,
  },
  {
    id: "03",
    title: "Return & start",
    state: "Ready",
    description: "Detach from rescue, reattach as boot, then wait for a clean production start.",
    icon: Orbit,
  },
  {
    id: "04",
    title: "Service proof",
    state: "Pending",
    description: "Verify SSH, Tailscale, Gateway, Telegram, and agent stability after boot.",
    icon: Radio,
  },
];

function CopyButton({ command, compact = false }: { command: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button className={`copy-button ${compact ? "copy-button--compact" : ""}`} onClick={copy} type="button">
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? "Copied" : compact ? "Copy" : "Copy verified command"}</span>
    </button>
  );
}

function StatusDot({ tone = "mint" }: { tone?: "mint" | "amber" | "muted" }) {
  return <span className={`status-dot status-dot--${tone}`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="signal-room">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="OpenClaw Recovery Portal home">
          <span className="brand-mark">
            <img src="/manus-storage/openclaw-recovery-logo_03a495a6.png" alt="" />
          </span>
          <span>
            <span className="brand-name">OpenClaw</span>
            <span className="brand-subtitle">Recovery Portal</span>
          </span>
        </a>
        <div className="topbar-status">
          <span className="live-chip"><StatusDot /> Static recovery record</span>
          <span className="topbar-rule" />
          <span className="topbar-region">EU-MARSEILLE-1</span>
        </div>
      </header>

      <main id="top" className="portal-shell">
        <aside className="signal-rail" aria-label="Recovery steps">
          <div className="rail-eyebrow">Recovery sequence</div>
          <div className="rail-line" aria-hidden="true" />
          <nav className="phase-nav">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <a className={`phase-link ${index === 2 ? "phase-link--active" : ""}`} href={`#phase-${phase.id}`} key={phase.id}>
                  <span className="phase-index">{phase.id}</span>
                  <span className="phase-icon"><Icon size={15} /></span>
                  <span className="phase-label">{phase.title}</span>
                </a>
              );
            })}
          </nav>
          <div className="rail-footnote">
            <LockKeyhole size={15} />
            <span>Private keys are never stored or displayed by this portal.</span>
          </div>
        </aside>

        <section className="content-field">
          <section className="hero-panel">
            <div className="hero-image" aria-hidden="true" />
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> Controlled recovery workspace</p>
              <h1>Restore access<br /><em>without rewriting history.</em></h1>
              <p className="hero-lede">
                A permanent field console for returning an existing OpenClaw installation to service through verified, non-destructive recovery phases.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#phase-03">Open return sequence <ArrowUpRight size={16} /></a>
                <a className="secondary-link" href="#evidence">Review repair evidence <ChevronRight size={16} /></a>
              </div>
            </div>
            <div className="hero-insight">
              <span className="insight-label">Current gate</span>
              <strong>Return the repaired boot volume</strong>
              <span className="insight-meta"><StatusDot tone="amber" /> Operator execution required</span>
            </div>
          </section>

          <section className="snapshot-grid" aria-label="Recovery snapshot">
            <article className="snapshot-card snapshot-card--signal">
              <span className="snapshot-label">Recovery posture</span>
              <div className="snapshot-main"><StatusDot /> <strong>Non-destructive</strong></div>
              <p>Original data volume preserved; no termination, formatting, or reinstall actions.</p>
            </article>
            <article className="snapshot-card">
              <span className="snapshot-label">Host access finding</span>
              <div className="snapshot-main"><CircleAlert size={17} /> <strong>SSH blocked at host</strong></div>
              <p>UFW denied inbound TCP/22 while the OCI security list was already open.</p>
            </article>
            <article className="snapshot-card">
              <span className="snapshot-label">Repair applied</span>
              <div className="snapshot-main"><FileCheck2 size={17} /> <strong>Ready to return</strong></div>
              <p>SSH service enabled and persisted UFW TCP/22 allows were added with timestamped backups.</p>
            </article>
          </section>

          <section className="workflow-section" aria-labelledby="workflow-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Recovery map</p>
                <h2 id="workflow-title">The sequence stays visible.</h2>
              </div>
              <span className="section-caption">4 bounded phases · no automatic cloud execution</span>
            </div>
            <div className="phase-grid">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <article id={`phase-${phase.id}`} className={`phase-card ${index === 2 ? "phase-card--focus" : ""}`} key={phase.id}>
                    <div className="phase-card-top">
                      <span className="phase-card-number">{phase.id}</span>
                      <span className={`phase-state phase-state--${phase.state.toLowerCase()}`}><StatusDot tone={phase.state === "Pending" ? "muted" : phase.state === "Ready" ? "amber" : "mint"} />{phase.state}</span>
                    </div>
                    <Icon className="phase-card-icon" size={22} strokeWidth={1.7} />
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="phase-03" className="command-section" aria-labelledby="command-title">
            <div className="command-intro">
              <div className="signal-core-wrap"><img src="/manus-storage/openclaw-signal-core_f642bdaa.jpg" alt="Abstract protected signal core" /></div>
              <div>
                <p className="eyebrow">Phase 03 · Return & start</p>
                <h2 id="command-title">The verified return sequence.</h2>
                <p>
                  This command detaches the repaired data attachment from the rescue VM, reattaches the exact volume as the production boot volume, and waits for production to reach <code>RUNNING</code>.
                </p>
              </div>
            </div>
            <div className="command-shell">
              <div className="terminal-topline">
                <span><TerminalSquare size={15} /> OCI Cloud Shell</span>
                <span className="terminal-verified"><ShieldCheck size={14} /> reviewed sequence</span>
              </div>
              <pre><code>{phaseFiveCommand}</code></pre>
              <div className="command-bottomline">
                <span><Cpu size={15} /> Requires an authenticated Oracle Cloud Shell session.</span>
                <CopyButton command={phaseFiveCommand} />
              </div>
            </div>
            <p className="command-note"><CircleAlert size={15} /> Review the active instance and volume identity in your Oracle session before running any cloud command.</p>
          </section>

          <section id="evidence" className="evidence-section" aria-labelledby="evidence-title">
            <div className="evidence-art" aria-hidden="true" />
            <div className="evidence-copy">
              <p className="eyebrow">Evidence ledger</p>
              <h2 id="evidence-title">Repair only what the host proved broken.</h2>
              <p>
                The offline inspection separated network policy from application health. The Gateway configuration remains preserved while host access receives the minimum repair.
              </p>
              <div className="evidence-rows">
                <div><span>SSH service</span><strong><StatusDot /> enabled for next boot</strong></div>
                <div><span>UFW port 22</span><strong><StatusDot /> explicit ingress allow</strong></div>
                <div><span>OpenClaw config</span><strong><StatusDot /> preserved from last-good</strong></div>
              </div>
            </div>
            <div className="evidence-card">
              <span className="snapshot-label">Post-boot proof</span>
              <ol>
                <li><span>01</span> Confirm TCP/22 responds.</li>
                <li><span>02</span> Establish SSH as <code>ubuntu</code>.</li>
                <li><span>03</span> Verify Tailscale and Gateway for 2 minutes.</li>
                <li><span>04</span> Send a Telegram bot proof message.</li>
              </ol>
              <a href="#phase-04" className="evidence-link">Open verification checklist <ChevronRight size={16} /></a>
            </div>
          </section>

          <section id="phase-04" className="verification-section" aria-labelledby="verification-title">
            <div className="section-heading section-heading--compact">
              <div>
                <p className="eyebrow">Phase 04 · Service proof</p>
                <h2 id="verification-title">Confirm stability after the host returns.</h2>
              </div>
            </div>
            <div className="verification-grid">
              {[
                ["SSH", "TCP/22 reachable, authenticated shell established"],
                ["Tailscale", "Daemon active; mesh IP confirmed from the host"],
                ["OpenClaw Gateway", "Connected and stable for at least two minutes"],
                ["Telegram", "Bot responds through the restored Gateway"],
              ].map(([label, note]) => (
                <div className="verify-row" key={label}>
                  <span className="verify-mark"><Network size={16} /></span>
                  <div><strong>{label}</strong><p>{note}</p></div>
                  <span className="verify-pending">awaiting proof</span>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <footer className="portal-footer">
        <span>OpenClaw Recovery Portal</span>
        <span className="footer-separator" />
        <span>Static operator workspace · no credentials retained</span>
        <a href="#top">Back to signal <ArrowUpRight size={13} /></a>
      </footer>
    </div>
  );
}
