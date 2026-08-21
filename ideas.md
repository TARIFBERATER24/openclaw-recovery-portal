# OpenClaw Recovery Portal — Design Directions

## Three possible directions

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **Signal Room** | A dark operations cockpit inspired by mission-control consoles, with a calm, high-trust reading rhythm instead of alarmist hacker aesthetics. | 0.07 |
| **Field Notebook** | A warm, paper-led technical journal where recovery steps feel curated, annotated, and deliberate. | 0.04 |
| **Voltage Archive** | A bold editorial archive that treats each recovery phase as a documented system event, using sharp geometry and archival labels. | 0.09 |

## Chosen approach — Signal Room

### Design Movement

The portal follows the **high-trust operations cockpit** aesthetic: a restrained blend of spacecraft mission-control interfaces, technical instrumentation, and premium developer tooling. It avoids cyberpunk clichés by using warm off-white type, mineral-blue surfaces, and a single luminous signal color rather than neon overload.

### Core Principles

1. **Operational clarity first.** Every visual element explains recovery state, action safety, or execution order.
2. **Calm under pressure.** The interface should feel controlled when a system is offline: generous whitespace, ordered zones, and unambiguous status language.
3. **Evidence is visible.** Findings, safety constraints, and commands are treated as first-class interface objects rather than hidden utility text.
4. **Meaningful contrast.** High-risk actions are visually separated from read-only inspection and verified-safe steps.

### Color Philosophy

The main field is deep carbon-blue rather than pure black, suggesting depth without panic. Bone-white typography reads as a technical document held under a console lamp. A distinctive **Signal Mint** accent communicates verified, connected, and copy-ready states; quiet amber labels communicate attention without using emergency red for ordinary recovery steps.

### Layout Paradigm

The page is a **two-rail field console** rather than a centered marketing landing page. A narrow operational index holds environment identity and phase navigation. The wider rail is a sequence of instrument panels that progressively exposes summary, command, evidence, and verification areas. On mobile, the index becomes a compact horizontal signal strip.

### Signature Elements

1. A slim vertical **signal spine** links the recovery phases and continuously anchors page orientation.
2. **Instrument tiles** use thin technical borders, small coordinate labels, and deliberate cut-corner details.
3. A soft **orbital grid** and star-map texture appear in the hero and status panels, remaining decorative rather than literal.

### Interaction Philosophy

Interactions feel like deliberate console operations: copy controls acknowledge completion immediately, phase cards reveal supporting evidence without navigation, and status filters remain local and reversible. Actions never imply infrastructure changes; the interface labels static command material as requiring operator review.

### Animation

Status indicators use a slow, low-amplitude pulse only when marked active. Panels enter with a short upward fade staggered at 50 ms intervals. Copy feedback shifts from outline to mint fill over 160 ms, and all motion respects reduced-motion preferences. No looping decorative animations appear in command areas.

### Typography System

**Space Grotesk** provides the crisp engineering voice for headlines and interface labels. **IBM Plex Mono** distinguishes commands, OCIDs, ports, and timestamps. Body copy uses Space Grotesk at a comfortable reading size with a 1.55 line-height. Large headings are tight and assertive; metadata remains small, uppercase, and widely tracked.

### Brand Essence

**OpenClaw Recovery Portal is a controlled recovery workspace for operators restoring access to an existing cloud-hosted OpenClaw installation without destructive shortcuts.**

Personality: **composed, exacting, protective**.

### Brand Voice

Headlines are concise and grounded. CTAs are operational, not promotional. Microcopy names risk and proof plainly.

> “Restore access without rewriting history.”

> “Copy the verified return sequence.”

### Wordmark & Logo

The logo is a compact **three-pronged claw orbiting a protected core**: an abstract symbol of recovery, containment, and controlled reattachment. The mark uses no text and remains recognizable at favicon scale.

### Signature Brand Color

**Signal Mint — `#83F2C2`**. It is reserved for verified, copied, healthy, and ready states.
