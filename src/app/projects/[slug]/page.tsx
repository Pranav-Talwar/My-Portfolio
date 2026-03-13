import { ArrowUpRight, FileText, GithubIcon } from "lucide-react";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, H3, P, Code, CodeBlock, Callout, MetaRow, HeroImage, Figure, StatGrid, Stat } from "@/components/prose";

/* ─── Case study data ─── */

const caseStudies = {
  "cosounds-bluetooth-backend": {
    title: "Bluetooth Presence Detection",
    tagline: "NFC tap gating, Raspberry Pi 3 scanning, and two-tier disconnect detection replacing timer-based session tracking.",
    date: "2025",
    role: "Backend Developer",
    timeline: "Proof of concept",
    tech: ["Raspberry Pi 3","Python",  "React.js", "Django","Matplotlib", "NumPy", "pg cron", "PostgreSQL",   "Supabase", "Tailwind CSS"],
    links: {
      github: "https://github.com/xtapx-labs/Presence-Detection-System",
      live: null,
      docs: "https://drive.google.com/file/d/1aJjhq5XfcSvrsh3bxsnt4j4HbBal0YQZ/view",
    },
    toc: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "The Problem" },
      { id: "constraints", label: "Constraints" },
      { id: "key-decisions", label: "Key Decisions" },
      { id: "results", label: "Results" },
      { id: "limitation", label: "Limitation" },
    ],
    next: null as { slug: string; title: string } | null,
    writeup: null as { href: string; label: string } | null,
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

/* ─── Page ─── */

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) notFound();

  const header = (
    <>
      <span className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest block mb-5">
        Case Study · {study.date}
      </span>

      <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[var(--text-heading)] leading-[1.15] mb-3 max-w-2xl tracking-tight">
        {study.title}
      </h1>
      <p className="text-[1.0625rem] text-[var(--text-secondary)] mb-7 max-w-xl leading-relaxed">
        {study.tagline}
      </p>

      <div className="h-[2px] w-12 mb-8" style={{ backgroundColor: "var(--accent)" }} />

      {/* Meta grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 mb-8 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/30">
        <MetaRow label="Role" value={study.role} />
        <MetaRow label="Status" value={study.timeline} />
        <MetaRow label="Date" value={study.date} />
        <div>
          <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-2">
            Links
          </p>
          <div className="flex items-center gap-3">
            {study.links.github && study.links.github !== "#" && (
              <a
                href={study.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
            {study.links.live && (
              <a
                href={study.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Live
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {study.tech.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[10px] font-mono text-[var(--text-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const sidebarExtra = (
    <>
      {study.links.github && study.links.github !== "#" && (
        <a
          href={study.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          View on GitHub
        </a>
      )}
      {study.links.live && (
        <a
          href={study.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          Live Site
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
      {study.links.docs && (
        <a
          href={study.links.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          Documentation
        </a>
      )}
      {study.writeup && (
        <a
          href={study.writeup.href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
          {study.writeup.label}
        </a>
      )}
    </>
  );

  return (
    <ArticleLayout
      header={header}
      toc={study.toc}
      sidebarExtra={sidebarExtra}
      next={study.next ? { href: `/projects/${study.next.slug}`, title: study.next.title } : null}
      backHref="/projects"
      backLabel="Projects"
    >
      {slug === "cosounds" && (
        <>
          <HeroImage
            caption="CoSounds · Study Room Deployment · Building 4, Room 202"
            date="Jan 2025"
          />

          <H2 id="overview" noTopMargin>Overview</H2>
          <P>
            Shared study spaces have a noise problem. Everyone wants something different —
            some want silence, others need ambient sound to focus. The existing solution
            is headphones, which isolates people and eliminates the social dimension of
            studying together.
          </P>
          <P>
            CoSounds creates a shared adaptive soundscape for the room — one that
            learns and balances the preferences of everyone present, updated in
            real-time, without requiring anyone to actively manage it.
          </P>
          <P>
            The project started as a speculative design exercise: what if a room could
            listen to the people in it and respond? Over four months, that question turned
            into a working prototype deployed in a real campus study space, touching
            hardware, machine learning, real-time infrastructure, and interaction design
            simultaneously.
          </P>

          <H2 id="problem">The Problem</H2>
          <P>
            The initial research question was: can you collect ambient preference data
            from students in a shared space without interrupting their work? Surveys
            failed — nobody fills them out mid-session. Opt-in apps failed — nobody
            downloads an app for a study room.
          </P>

          <Figure
            name="infographic/user-friction-study.png"
            caption="Fig. 1 — Friction comparison: Survey vs. App vs. NFC tap across 3 weeks of observational study"
          />

          <Callout>
            Friction is fatal to data collection in passive environments. The system
            has to work around the user, not require the user to work around it.
          </Callout>
          <P>
            One NFC tap at the room entrance — something already part of the entry
            flow — became the interaction primitive. Anonymous, sub-second, zero
            cognitive load.
          </P>

          <H2 id="approach">My Approach</H2>
          <P>
            I split the system into three distinct layers, each with a clear
            responsibility boundary:
          </P>

          <Figure
            name="infographic/system-architecture-diagram.png"
            caption="Fig. 2 — System layer diagram: NFC intake → ML processing → Supabase Realtime → soundscape output"
          />

          <CodeBlock>{`// Simplified session architecture
Session
 ├── Participants[]         // NFC-enrolled devices (ephemeral)
 ├── PreferenceVector       // ML model state per participant
 ├── ConsensusScore         // Weighted blend across all participants
 └── SoundscapeEmitter      // Maps ConsensusScore → audio parameters`}</CodeBlock>

          <P>
            The ML layer uses a lightweight collaborative filtering model. It doesn&apos;t
            need large amounts of data because it&apos;s optimizing for a very narrow output
            space: BPM, energy level, and frequency balance. Three parameters, bounded
            ranges. Convergence is fast.
          </P>
          <P>
            The real engineering challenge was presence detection — knowing when
            someone left. We started with timers and moved to Bluetooth scanning via
            Raspberry Pi. If a device stops appearing in BLE scans for 15 seconds, they&apos;re
            removed from the active session.
          </P>

          <H2 id="decisions">Key Decisions</H2>
          <P>
            <strong className="text-[var(--text-heading)] font-semibold">Anonymous by default.</strong>{" "}
            No accounts, no stored identifiers. The NFC tap generates a session token
            that exists only for the duration of the session. This removed the entire
            privacy conversation from the design process.
          </P>
          <P>
            <strong className="text-[var(--text-heading)] font-semibold">Supabase Realtime over WebSockets.</strong>{" "}
            Rather than maintaining a custom WebSocket server, we used Supabase&apos;s
            Realtime channel to broadcast preference updates. This simplified the
            backend significantly — the ML model writes to a Supabase row, all
            connected clients receive the update automatically.
          </P>
          <P>
            <strong className="text-[var(--text-heading)] font-semibold">Separation of consent and presence.</strong>{" "}
            The NFC tap establishes consent. Bluetooth scanning measures presence. These
            are separate concerns and conflating them was an early design mistake we
            caught before shipping.
          </P>

          <H2 id="outcome">Outcome</H2>
          <P>
            The system shipped to one study room in our building for a 3-week pilot.
            Dropout rates (participants being removed erroneously) dropped from 30%
            with timers to under 4% with Bluetooth detection. The soundscape stayed
            coherent across full study blocks for the first time.
          </P>

          <Figure
            name="infographic/pilot-results-chart.png"
            caption="Fig. 3 — Pilot results: dropout rate 30% → 4%, session coherence across 3-week deployment"
          />

          <StatGrid>
            <Stat value="4%" label="Dropout Rate" sub="down from 30%" />
            <Stat value="3 wks" label="Pilot Duration" sub="1 live study room" />
            <Stat value="0" label="Accounts Needed" sub="anonymous by default" accent />
          </StatGrid>

          <P>
            The more interesting outcome was qualitative: participants reported that
            the room &quot;felt different&quot; from other study spaces without being able to
            articulate exactly why. The ambient audio was doing work below the threshold
            of conscious attention.
          </P>
          <P>
            What began as a research question became a proof that ambient computing can
            be genuinely unobtrusive. The next step is scaling the presence detection
            model to multi-room environments and open-sourcing the NFC consent framework
            as a standalone module.
          </P>
        </>
      )}

      {slug === "cosounds-bluetooth-backend" && (
        <>
          <H2 id="overview" noTopMargin>Overview</H2>
          <P>
            We built a Bluetooth presence detection backend for CoSounds to test whether timer-based occupancy
            tracking could be replaced with continuous room-level scanning. The prototype combined NFC tap gating,
            Raspberry Pi 3 scanning, PostgreSQL triggers, and <Code>pg_cron</Code>, then was tested with a small
            number of registered devices in a controlled environment.
          </P>

          <H2 id="problem">The Problem</H2>
          <P>
      The CoSounds prototype used a 2-hour timer after each NFC tap to infer presence. Timers detect entry; they do not detect departure. Students who left early remained marked as present, skewing the collective utility optimization toward preferences of users no longer in the room. Students who stayed beyond the timeout were silently disconnected, requiring manual re-tap to resume tracking. The system operated on occupancy assumptions rather than occupancy data. 
          </P>
          
<Callout>If 15 students were recorded as present but only 8 remained, the ML pipeline aggregated soundscape preferences for 7 phantom users.</Callout>
          <H2 id="constraints">Constraints</H2>
          <ul className="flex flex-col gap-2.5 mb-5">
            {[
              "Session records created only when a student has performed a deliberate physical action (NFC tap)",
              "No Bluetooth pairing dialog, app install, or manual check-out permitted",
              "Session state must remain consistent if the Django API server restarts between sequential status writes",
              "Hardware fixed at Raspberry Pi 3 with Bluetooth Classic; BLE unavailable during development phase",
              "Transient disconnections under 15 minutes must not terminate active sessions",
            ].map((c) => (
              <li key={c} className="flex items-start gap-3 text-base text-[var(--text-secondary)] leading-relaxed">
                <span className="text-emerald-500 mt-1 shrink-0 font-bold">—</span>
                {c}
              </li>
            ))}
          </ul>

          <H2 id="key-decisions">Key Decisions</H2>

          <H3>Gate session creation behind an NFC tap</H3>
          <P>
            A scanner running continuously would detect every registered device at proximity, including students who
            never meant to check in. That&apos;s passive tracking, and it&apos;s not acceptable in a study space.
            Requiring the tap flag before session creation means the system cannot create a record for a student who
            has not performed a deliberate physical action in that visit.
          </P>
          <P>
            The one-time consumption model, where the flag resets immediately after the session record is written,
            prevents duplicate sessions from multiple scan cycles. This satisfies the no passive tracking constraint
            structurally rather than by policy enforcement.
          </P>
          <p className="text-[11px] font-mono text-[var(--text-faint)] uppercase tracking-widest mb-2 mt-1">Alternatives considered</p>
          <ul className="flex flex-col gap-1.5 mb-5">
            {["GPS tracking", "Surveillance cameras", "Manual check-in/check-out"].map((alt) => (
              <li key={alt} className="flex items-start gap-3 text-sm text-[var(--text-faint)] leading-relaxed">
                <span className="text-[var(--border-alt)] mt-1 shrink-0">·</span>
                {alt}
              </li>
            ))}
          </ul>

          <H3>Two-Tier Disconnect Detection</H3>
          <P>
            Students leaving briefly — a bathroom break or a coffee run; should not be required to tap in again on
            return. A single-threshold model that ends the session immediately on disconnect treats a brief absence
            the same as a permanent departure.
          </P>
          <P>
            The 30-second scan timeout confirms the device has genuinely left Bluetooth range rather than missed a
            single scan cycle. The 15-minute grace period then holds the session open after that confirmed disconnect.
            If the student returns within 15 minutes, the session resumes automatically with no re-tap required. If
            they do not return within 15 minutes, the session ends and a new tap is required to start fresh.
          </P>

          <CodeBlock>{`-- pg_cron job: expire grace-period sessions every minute
SELECT cron.schedule(
  'expire-grace-sessions',
  '* * * * *',
  $$
    UPDATE sessions
    SET status = 'ended', ended_at = now()
    WHERE status = 'grace'
      AND grace_started_at < now() - interval '15 minutes';
  $$
);`}</CodeBlock>

          <p className="text-[11px] font-mono text-[var(--text-faint)] uppercase tracking-widest mb-2 mt-1">Alternatives considered</p>
          <ul className="flex flex-col gap-1.5 mb-8">
            {[
              "Single fixed timeout with no grace period",
              "Exponential backoff retry on missed scans",
              "Manual check-out as the only session termination path",
            ].map((alt) => (
              <li key={alt} className="flex items-start gap-3 text-sm text-[var(--text-faint)] leading-relaxed">
                <span className="text-[var(--border-alt)] mt-1 shrink-0">·</span>
                {alt}
              </li>
            ))}
          </ul>

          <H2 id="results">Results</H2>
          <P>
            Tested in a controlled environment with a small number of registered devices. Four defined scenarios
            validated:
          </P>
          <ul className="flex flex-col gap-2.5 mb-8">
            {[
              "Standard check-in/check-out: clean session, accurate timestamps",
              "Brief disconnection (bathroom, coffee run): 15-minute grace period holds the session",
              "Extended absence: grace period expires, trigger closes session, re-tap opens a new one",
              "Multiple simultaneous users: independent tracking, no conflicts",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-[var(--text-secondary)] leading-relaxed">
                <span className="text-emerald-500 mt-1 shrink-0 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <StatGrid>
            <Stat value="4" label="Scenarios" sub="all passed" />
            <Stat value="10s" label="Scan Interval" sub="continuous monitoring" />
            <Stat value="0" label="Phantom Sessions" sub="zero false check-ins" accent />
          </StatGrid>

          <P>
            Zero phantom sessions created without an explicit NFC tap across all test runs. Integration with the
            CoSounds ML pipeline is the next step, pending production hardening and extended scale testing.
          </P>

          <H2 id="limitation">Limitation</H2>
          <P>
            The main limitation is MAC address randomization. Modern smartphones randomize their Bluetooth MAC
            address across scan cycles. Static device registration, which this system depends on; works for
            laptops but fails for phones.
          </P>
          <Callout>
            A production version would need a native mobile app to expose a stable identifier during onboarding.
            Safari also does not expose the Bluetooth Web API, which removes browser-based registration as an
            option for iOS users. Both problems are solvable. Neither is solved in this prototype.
          </Callout>
        </>
      )}
    </ArticleLayout>
  );
}
