import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { H2, P, Code, CodeBlock, Callout, HeroImage } from "@/components/prose";

/* ─── Post data ─── */

const posts = {
  "bluetooth-presence-detection": {
    title: "Replacing Timer-Based Presence with Real-Time Bluetooth Detection",
    date: "MAR 02, 2025",
    readTime: "8 min read",
    tags: ["Raspberry Pi", "Bluetooth", "NFC", "Systems"],
    toc: [
      { id: "problem", label: "The Problem with Timers" },
      { id: "approach", label: "Bluetooth as a Signal" },
      { id: "implementation", label: "Implementation" },
      { id: "consent", label: "Consent-First Design" },
      { id: "outcome", label: "What Changed" },
    ],
    next: {
      slug: "ux-security-paradox",
      title: "The UX-Security Paradox in NFC Interaction Systems",
    },
  },
  "ux-security-paradox": {
    title: "The UX-Security Paradox in NFC Interaction Systems",
    date: "FEB 14, 2025",
    readTime: "6 min read",
    tags: ["UX", "Security", "NFC", "Research"],
    toc: [
      { id: "tension", label: "The Core Tension" },
      { id: "attack-surface", label: "Where UX Widens Attack Surface" },
      { id: "mitigations", label: "Mitigations That Don't Suck" },
      { id: "framework", label: "A Working Framework" },
    ],
    next: null,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

/* ─── Page ─── */

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];
  if (!post) notFound();

  const header = (
    <>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest">
          {post.date}
        </span>
        <span className="w-1 h-1 rounded-full bg-[var(--border-alt)]" />
        <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
          {post.readTime}
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[var(--text-heading)] leading-[1.15] mb-6 max-w-2xl tracking-tight">
        {post.title}
      </h1>

      <div className="h-[2px] w-12 mb-6" style={{ backgroundColor: "var(--accent)" }} />

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
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

  return (
    <ArticleLayout
      header={header}
      toc={post.toc}
      next={post.next ? { href: `/writings/${post.next.slug}`, title: post.next.title } : null}
      backHref="/writings"
      backLabel="Writings"
    >
      {slug === "bluetooth-presence-detection" && (
        <>
          <HeroImage caption="bluetooth-presence-detection · Raspberry Pi 4 + BLE Scanner Setup" date="Mar 2025" />

          <H2 id="problem" noTopMargin>The Problem with Timers</H2>
          <P>
            CoSounds originally used a timer-based presence model: if a device hadn&apos;t
            tapped in a while, it was assumed gone. Simple. Except it wasn&apos;t — a user
            who sat still for 20 minutes would get dropped from the session, breaking
            the soundscape for everyone else in the room.
          </P>
          <P>
            The core failure is that timers measure <em className="text-[var(--text-heading)] not-italic font-medium">time since interaction</em>, not
            actual presence. These are different things. A focused student doesn&apos;t
            interact with a soundscape — they benefit from it passively.
          </P>

          <H2 id="approach">Bluetooth as a Signal</H2>
          <P>
            Bluetooth Low Energy advertisement scanning gives you a passive signal of
            nearby devices without requiring the user to do anything. A Raspberry Pi
            running{" "}
            <Code>bluetoothctl</Code> can detect BLE advertisements from any phone
            within ~10 meters, giving you a continuous presence signal at zero UX cost.
          </P>
          <Callout>
            The key insight: presence detection and consent are separate concerns.
            Bluetooth tells you a device is nearby. NFC tap establishes consent. You
            need both signals — not one doing both jobs.
          </Callout>
          <P>
            We gate Bluetooth detection behind NFC tap consent. Once a user taps in,
            their device&apos;s Bluetooth address is enrolled in the session. The Pi then
            watches for that address. When it stops appearing in scans, the user is
            removed — cleanly, without any interaction required.
          </P>

          <H2 id="implementation">Implementation</H2>
          <P>
            The detection loop runs on a Raspberry Pi 4 with a USB Bluetooth adapter.{" "}
            <Code>hcitool lescan</Code> isn&apos;t suitable for production (it requires
            root and has reliability issues), so we use{" "}
            <Code>bluepy</Code> via a Python daemon:
          </P>

          <CodeBlock>{`from bluepy.btle import Scanner, DefaultDelegate

class PresenceDelegate(DefaultDelegate):
    def __init__(self, enrolled_devices):
        self.enrolled = enrolled_devices
        self.seen = set()

    def handleDiscovery(self, dev, isNewDev, isNewData):
        if dev.addr in self.enrolled:
            self.seen.add(dev.addr)

def scan_presence(enrolled, timeout=5.0):
    scanner = Scanner().withDelegate(
        PresenceDelegate(enrolled)
    )
    scanner.scan(timeout)
    return scanner.delegate.seen`}</CodeBlock>

          <P>
            The daemon runs on a 5-second scan cycle. If a device misses 3 consecutive
            scans (15 seconds), it&apos;s marked as absent and removed from the active
            session. This forgives brief signal drops without being slow to react to
            genuine departures.
          </P>

          <H2 id="consent">Consent-First Design</H2>
          <P>
            The consent model matters as much as the technical implementation. Users
            don&apos;t know their Bluetooth address is being tracked — and that&apos;s a
            legitimate concern even if the intent is benign.
          </P>
          <P>
            Our approach: the NFC tap flow explicitly discloses that Bluetooth scanning
            will be used for session presence. The enrolled address is stored
            ephemerally — it&apos;s cleared when the session ends, never written to permanent
            storage. No PII, no persistence.
          </P>

          <H2 id="outcome">What Changed</H2>
          <P>
            Timer-based dropout rate dropped from roughly 30% of sessions to under 4%.
            More importantly, the soundscape stayed coherent for full study blocks —
            the ML model had stable participant counts to work with instead of
            constantly reconciling phantom departures.
          </P>
          <P>
            The Pi adds a hardware dependency, but presence detection at the room level
            is a physical problem. Trying to solve it in software alone was the wrong
            abstraction.
          </P>
        </>
      )}

      {slug === "ux-security-paradox" && (
        <>
          <H2 id="tension" noTopMargin>The Core Tension</H2>
          <P>
            NFC interaction systems live at an uncomfortable intersection: every UX improvement
            that makes the system easier to use also makes it easier to abuse. The tap that
            enrolls a legitimate user is mechanically identical to the tap that enrolls a
            malicious one.
          </P>
          <P>
            This isn&apos;t a fixable bug. It&apos;s structural. The question isn&apos;t how to
            eliminate the tension — it&apos;s how to manage it without making the system so
            paranoid it stops being useful.
          </P>

          <H2 id="attack-surface">Where UX Widens Attack Surface</H2>
          <P>
            Three design choices we made for usability that each carry a security cost:
          </P>
          <Callout>
            Anonymous sessions reduce friction at enrollment but eliminate accountability
            post-session. There&apos;s no way to attribute a malicious action to a specific user
            after the fact.
          </Callout>
          <P>
            Ephemeral address storage (addresses cleared on session end) is good for privacy
            but bad for forensics. If someone enrolls a device to disrupt the soundscape, the
            evidence is gone when they leave.
          </P>
          <P>
            Physical proximity as the primary trust signal assumes that physical access implies
            legitimate intent. This is usually true. It&apos;s not always true, and the exceptions
            matter in a semi-public space.
          </P>

          <H2 id="mitigations">Mitigations That Don&apos;t Suck</H2>
          <P>
            The goal is to add friction for attackers without adding friction for users. Rate
            limiting at the NFC reader level works — one session per device per time window.
            It doesn&apos;t stop a determined attacker but it stops casual abuse.
          </P>
          <P>
            Session anomaly detection on the backend: if a device enrolls and immediately
            causes the preference vector to shift sharply in one direction, that&apos;s a signal.
            Not proof. But worth flagging.
          </P>

          <H2 id="framework">A Working Framework</H2>
          <P>
            The framework we landed on: accept that perfect security is impossible, optimize
            for making attacks inconvenient rather than impossible, and prioritize data
            minimization so that a successful attack has limited blast radius.
          </P>
          <P>
            Anonymity by default means there&apos;s nothing valuable to steal. Ephemeral storage
            means there&apos;s nothing to exfiltrate. The worst realistic attack is disrupting the
            soundscape for one session — annoying, not catastrophic.
          </P>
        </>
      )}
    </ArticleLayout>
  );
}
