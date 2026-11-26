import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "The environmental mission network",
  description: "A proposal to connect field missions, environmental intelligence and restoration finance, starting with a pilot in Batumi.",
};

const sections = [
  ["missions", "The mission protocol"],
  ["batumi", "The Batumi pilot"],
  ["architecture", "A network that learns"],
  ["additionality", "Measuring additional restoration"],
  ["finance", "Funding and contribution"],
];

export default function Network() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-intro">
          <p className="eyebrow">Current proposal</p>
          <h1>The environmental <em>mission network.</em></h1>
          <p>
            Make it enjoyable to explore nature and useful to record what you find. Use verified evidence
            to guide the next field mission, identify opportunities for restoration and track what funding delivers.
          </p>
        </section>

        <div className="article-layout">
          <nav className="toc" aria-label="On this page">
            <span>ON THIS PAGE</span>
            {sections.map(([id, title]) => <Link href={`#${id}`} key={id}>{title}</Link>)}
          </nav>

          <article className="longform mission-article">
            <h2 id="missions">The mission protocol</h2>
            <p>On a Saturday morning, open a map, find a nearby mission and invite someone along. A phone can guide you through identifying a tree species, recording local biodiversity or checking the survival of a recent planting. A canopy or soil survey might go to a drone operator or a specialist.</p>
            <p>Each mission specifies a question or action, the location and access conditions, the required capability, the evidence to collect and how to verify it. Accepted work records its provenance. Inconclusive results can trigger a follow-up mission.</p>

            <h2 id="batumi">The first test in Batumi</h2>
            <p>Start with a mobile map and a small mission protocol. The proposed pilot aims for <strong>100 missions and 20 young participants.</strong></p>
            <ol>
              <li>Co-design missions with local youth partners and ecologists. Choose accessible sites and agree on consent, group participation and what can appear publicly.</li>
              <li>Give participants a map with nearby missions and a guided workflow that can capture observations offline.</li>
              <li>Have independent reviewers check a sample for completeness, accuracy and usefulness.</li>
              <li>Track voluntary return visits before introducing financial rewards. Publish collective progress on a live map using aggregated or approved locations.</li>
            </ol>
            <p>Use repeat participation, evidence quality and verification effort to decide whether to run a larger pilot.</p>

            <h2 id="architecture">A network that learns from the field</h2>
            <p>Start with simple rules to identify gaps, assign missions and check submissions. As accepted observations improve the shared record and its models, the network can propose better follow-up work. Over time, software agents could suggest what needs checking and route tasks to people, sensors or machines, with review for consequential decisions.</p>
            <dl className="mission-inputs">
              <div><dt>P vs NP project</dt><dd>Inspiration for decomposing complex work into smaller, verifiable tasks and distributing them according to capability.</dd></div>
              <div><dt>QVAC and Holepunch</dt><dd>Candidate technologies for on-device analysis, offline workflows and resilient exchange. Maps, search and early training can use conventional services.</dd></div>
              <div><dt>TreesAI / GUS</dt><dd>A reference for modelling what nature could be worth under different restoration scenarios.</dd></div>
              <div><dt>Echo Labs</dt><dd>A reference for assessing ecosystem condition and shaping scientifically useful fieldwork.</dd></div>
              <div><dt>Contribution-linked finance</dt><dd>A proposed way to connect verified work today to qualifying value created later.</dd></div>
            </dl>
            <p>These are design influences and candidates to evaluate during development.</p>

            <h2 id="additionality">Measuring additional restoration</h2>
            <ol>
              <li><strong>Observation.</strong> Establish ecosystem condition and record what is already happening.</li>
              <li><strong>Prediction.</strong> Estimate what could improve with an intervention and what would likely happen without it.</li>
              <li><strong>Financing.</strong> Identify who can deliver the work, how much it costs and who might fund it under measurable terms.</li>
              <li><strong>Regeneration.</strong> Monitor survival and ecological condition over time to assess improvement against the expected baseline.</li>
            </ol>
            <p>The <Link className="text-link" href="/thesis">Champion restoration thesis</Link> explores an institutional route for coordinating landholders, verifiers and funders around that work.</p>

            <h2 id="finance">From verified contributions to future value</h2>
            <p>A contribution ledger records accepted work, provenance and assessed value. Published allocation rules would determine how contributors share in qualifying proceeds. Rewards would become payable only when eligible funding or revenue actually comes in and the agreed conditions are met.</p>
            <p>Regional and shared pools are one possible way to recognise observations that improve models used elsewhere. Attribution, funding rules and legal design remain open. The pilot tests participation and data quality before introducing this economic layer.</p>
            <div className="hero-actions">
              <Link className="button button-amber" href="/contact">Discuss the pilot</Link>
              <Link className="text-link" href="/work">Explore the work behind it</Link>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
