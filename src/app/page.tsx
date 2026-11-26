import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { institutionNames } from "@/lib/content";

const foundation = [
  {
    href: "/work/layered-restoration-fund",
    title: "Rwanda forest landscape restoration",
    description: "Fund design, climate finance strategy and investment readiness.",
  },
  {
    href: "/work/smallholder-monitoring",
    title: "Vietnam rice verification",
    description: "Sensors, farmer-owned data and independent verification for outcome-based finance.",
  },
  {
    href: "/work/restoration-token-design",
    title: "Restoration-linked monetary design",
    description: "A 2018 working paper tying issuance and payouts to verified restoration outcomes.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mission-hero">
          <Image src="/images/forest-restoration.png" alt="" fill priority sizes="100vw" />
          <div className="mission-hero-content">
            <p className="eyebrow">Net-Positive Solutions / Fraser Brown</p>
            <h1>Make regeneration <em>economically self-propelling.</em></h1>
            <p className="mission-intro">
              A proposed environmental intelligence network that turns local field missions into verified evidence,
              better restoration decisions and a basis for funding work that improves nature.
            </p>
            <div className="hero-actions">
              <Link className="button button-amber" href="/network">Explore the network</Link>
              <Link className="mission-link" href="/network#batumi">The Batumi pilot</Link>
            </div>
          </div>
        </section>

        <section className="section-wrap two-col">
          <h2>Every mission helps decide <em>what comes next.</em></h2>
          <div className="reading">
            <p className="lead">Find a mission nearby. Identify a tree, check whether a planting survived, or record what lives in a place.</p>
            <p>Verified observations fill gaps in the shared record. The network can use what it learns to suggest the next useful mission, from a walk with a phone to a survey that needs a specialist.</p>
            <p>The measure of success is additional restoration. Better data helps identify opportunities. Funding, delivery and follow-up evidence determine whether nature improves.</p>
            <Link className="text-link" href="/network#additionality">How to measure restoration outcomes</Link>
          </div>
        </section>

        <section className="section-wrap two-col mission-pilot">
          <div>
            <p className="eyebrow">First experiment · proposed</p>
            <h2>Start in Batumi.</h2>
          </div>
          <div className="reading">
            <p className="lead">100 missions. 20 young participants.</p>
            <p>Test whether a mobile map and guided fieldwork produce observations that independent reviewers can verify, and whether participants choose to return before financial rewards are available.</p>
            <Link className="button" href="/network#batumi">Read the pilot plan</Link>
          </div>
        </section>

        <section className="section-wrap mission-foundation">
          <div className="two-col">
            <h2>Built on a decade of <em>conservation finance.</em></h2>
            <div className="reading">
              <p>Fraser Brown was Director of Global Strategy at WeForest, Senior Advisor Green Finance at ICRAF, and a consultant to IUCN and CGIAR’s CCAFS programme. He designed financing mechanisms for the Bonn Challenge.</p>
              <div className="hero-actions">
                <Link className="button" href="/work">Explore the work archive</Link>
                <Link className="text-link" href="/about">About Fraser Brown</Link>
              </div>
            </div>
          </div>
          <div className="latest-grid">
            {foundation.map(({ href, title, description }) => (
              <Link className="card" href={href} key={href}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="text-link">Read the case</span>
              </Link>
            ))}
          </div>
          <ul className="mission-institutions" aria-label="Organisations and initiatives in the work record">
            {institutionNames.map((name) => <li key={name}>{name}</li>)}
          </ul>
        </section>

        <section className="note-band">
          <p>The Champion thesis explores how local institutions could turn restoration evidence into delivery and payments.</p>
          <Link className="button" href="/thesis">Read the Champion thesis</Link>
        </section>

        <section className="section-wrap two-col">
          <h2>Help shape the pilot.</h2>
          <div className="reading">
            <p>The proposal needs local youth and community organisations, ecologists, independent reviewers, restoration partners and builders who know how to make field tools work offline.</p>
            <Link className="button button-amber" href="/contact">Contact Fraser</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
