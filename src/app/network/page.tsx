import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "The mission network — science, technology and points",
  description: "Why ground observations matter, how our H3 satellite and QVAC mission architecture works, and how verified contributions create new possibilities for restoration finance.",
};

const sections = [
  ["why-humans", "Why people matter"],
  ["missions", "The mission experience"],
  ["architecture", "The technology stack"],
  ["verification", "Evidence and verification"],
  ["points", "The points system"],
  ["additionality", "From data to restoration"],
  ["finance", "Financial innovation"],
  ["batumi", "Start building"],
];
const observations = [
  ["Forest extent and canopy change", "Map large areas and detect change", "Investigate the causes of change"],
  ["Biomass and carbon", "Infer structure and biomass from optical, radar and LiDAR signals", "Measure trunk diameter, identify species and calibrate estimates"],
  ["Tree health and regeneration", "Detect some canopy stress and change", "Inspect seedlings, disease, damage and survival"],
  ["Biodiversity", "Map habitat and infer selected ecological properties", "Record species, understory and bioacoustic evidence"],
  ["Restoration opportunities", "Identify landscape patterns and candidate areas", "Investigate access, local conditions and barriers to recovery"],
];
const stack = [
  ["H3", "Index the planet in nested hexagonal cells. Assign observations, uncertainty, missions and repeat surveys to stable spatial identifiers.", "https://github.com/uber/h3"],
  ["AlphaEarth Foundations", "Use annual satellite embeddings as a starting point for environmental models. Combine them with ground observations to learn local ecological relationships.", "https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL"],
  ["GEDI", "Use spaceborne LiDAR footprints to inform canopy structure and aboveground biomass estimates within the instrument's coverage.", "https://gedi.umd.edu/"],
  ["Sentinel and Landsat", "Combine optical and radar time series to identify change, vegetation patterns and areas requiring investigation.", "https://dataspace.copernicus.eu/"],
  ["MapLibre + React Native", "Build the mobile mission map, crew experience, navigation to permitted sites and guided capture workflow.", "https://maplibre.org/"],
  ["QVAC", "Run local AI on compatible devices for species suggestions, image quality checks and guided observations, including offline fieldwork.", "https://qvac.tether.io/"],
  ["Holepunch / Hyperswarm", "Synchronise signed evidence and coordinate distributed devices through peer-to-peer infrastructure.", "https://github.com/holepunchto/hyperswarm"],
  ["GitHub", "Publish the mission schemas, code, model evaluation tools and reproducible tests. Assign development work through issues; review contributions through pull requests and CI; publish versioned releases.", "https://github.com/fraserbrownirl/netpositive-solutions"],
];
const routes = [
  ["Carbon finance", "When verified evidence helps an eligible project establish baselines, monitor outcomes or reduce uncertainty, negotiate a share of proceeds attributable to that work."],
  ["Environmental intelligence", "License commercial access to specialised, rights-cleared datasets, historical observations and continuously updated environmental products."],
  ["AI training data", "Commission or license labelled ecological datasets and independent evaluation sets for model developers."],
  ["Commissioned missions", "Enable researchers, restoration organisations and other buyers to fund investigations through the mission network."],
  ["Restoration finance", "Use the network to identify and monitor restoration opportunities; allocate agreed proceeds to the contributions that enabled funded projects."],
  ["Retrospective public goods funding", "Invite philanthropists, foundations and public institutions to reward demonstrated infrastructure and environmental benefits after delivery."],
  ["Tokenomic innovation", "Explore future token allocations based on the historical contribution ledger, with transparent issuance and distribution rules."],
  ["Environmental endowments", "Explore permanent pools of capital whose distributable returns support restoration and recognise qualifying contributions."],
];

export default function Network() {
  return <><SiteHeader/><main>
    <section className="page-intro"><p className="eyebrow">The mission network</p><h1>Millions of missions. <em>One planetary ambition.</em></h1><p>Satellites observe the Earth. AI interprets it. People and machines investigate what remains unknown. We connect them through a global mission network and a permanent record of contributions.</p><div className="hero-actions" style={{marginTop:28}}><Link className="button button-amber" href="/community">Join the movement</Link><a className="mission-link" href="https://github.com/fraserbrownirl/netpositive-solutions">Build in the open ↗</a></div></section>
    <div className="article-layout"><nav className="toc" aria-label="On this page"><span>ON THIS PAGE</span>{sections.map(([id,title])=><Link href={`#${id}`} key={id}>{title}</Link>)}</nav>
    <article className="longform mission-article">
      <h2 id="why-humans">Why the planet needs people on the ground</h2>
      <p className="lead">Satellites give us extraordinary coverage. They do not give us every answer.</p>
      <p>Remote sensing measures reflected light, radar returns and forest structure. Models translate those signals into estimates of ecological properties. Reliable ground-reference observations are essential to calibrate and evaluate those estimates across different species, climates and landscapes.</p>
      <p>Two forests can have similar canopy height and very different biomass. Species, wood density, trunk diameter and condition matter. A satellite can detect canopy loss, but a visit can establish whether it came from harvesting, disease, fire or another disturbance. Early seedling survival, understory diversity and many local barriers to regeneration need closer investigation.</p>
      <div className="science-table-wrap"><table className="science-table"><thead><tr><th>Question</th><th>From above</th><th>On the ground</th></tr></thead><tbody>{observations.map(([q,a,b])=><tr key={q}><th scope="row">{q}</th><td>{a}</td><td>{b}</td></tr>)}</tbody></table></div>
      <p>Our mission engine uses active learning: prioritise locations where a new observation is most informative, alongside representative sampling that avoids bias towards easy-to-reach places. Repeated observations reveal change. Independently collected reference measurements test whether models are accurate. A single well-chosen observation can improve predictions across many similar locations.</p>
      <p>NASA's <a className="text-link" href="https://gedi.umd.edu/">GEDI programme</a> and Google's <a className="text-link" href="https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL">AlphaEarth satellite embeddings</a> provide important building blocks. Our contribution is the distributed ground-observation and mission network that connects global intelligence with local reality.</p>
      <div className="callout"><strong>Four assets we build together:</strong> ground-reference datasets, longitudinal ecosystem records, restoration intelligence, and a worldwide community capable of investigating and acting on local environmental questions.</div>

      <h2 id="missions">The world becomes a mission map</h2>
      <p>Discover a mission nearby. Claim it, invite friends, follow the guided capture workflow and submit evidence. Earn points when the contribution is accepted. Collect species, level up, form crews and compete in regional and university challenges.</p>
      <dl className="mission-inputs"><div><dt>Field missions</dt><dd>Identify species, measure trunk diameter with a tape or calibrated image, record canopy and ground cover, capture bioacoustic samples, check seedling survival.</dd></div><div><dt>Verification missions</dt><dd>Revisit a location, resolve inconsistent observations or independently check measurements.</dd></div><div><dt>Drone missions</dt><dd>Survey permitted areas, capture georeferenced imagery and investigate large or inaccessible cells.</dd></div><div><dt>AI and developer missions</dt><dd>Improve models, fix software, curate datasets, evaluate predictions and automate repetitive work.</dd></div><div><dt>Restoration missions</dt><dd>Investigate restoration opportunities, assist approved interventions and monitor recovery.</dd></div></dl>
      <p>Each mission defines the question, location, access requirements, measurement protocol, evidence and acceptance criteria. Leases prevent unnecessary duplication; independent checks are separate missions. Technical failures return a task to the queue. Unresolved questions generate follow-up work.</p>
      <p>As models improve, drones and autonomous devices take on more repeatable work. People move towards calibration, investigation, community engagement and increasingly sophisticated field operations.</p>

      <h2 id="architecture">Our technology stack</h2>
      <p>We organise the system as a shared spatial grid, a mission engine, mobile and machine clients, an evidence store and an append-only contribution ledger. Development is open source. These are the implementation choices for the system we are building.</p>
      <dl className="mission-inputs">{stack.map(([name,body,url])=><div key={name}><dt><a href={url} target="_blank" rel="noreferrer">{name} ↗</a></dt><dd>{body}</dd></div>)}</dl>
      <p>Implement satellite ingestion through the relevant data services and APIs, cache permitted derived products, attach their source and acquisition date, and schedule missions from model uncertainty and observed changes. Use signed mission IDs and evidence manifests to connect mobile, drone and software contributions to the same record.</p>
      <p>GitHub is our development workspace: issues specify deliverables and acceptance tests; pull requests implement them; CI runs reproducible checks. Keep personal field evidence and sensitive locations in access-controlled storage, not public Git history.</p>
      <div className="mission-pipeline" aria-label="Mission processing sequence">{["Satellite grid","Identify knowledge gaps","Dispatch missions","Capture and verify evidence","Improve models","Generate new missions"].map((step,i)=><div key={step}><span>0{i+1}</span><strong>{step}</strong></div>)}</div>

      <h2 id="verification">Make every observation useful</h2>
      <p>Capture structured measurements, timestamps, geospatial references, method versions and evidence hashes. QVAC guides contributors through capture and flags quality problems. Preserve uncertainty and measurement method, rather than treating model estimates as direct observations.</p>
      <p>Run automated quality checks, assign independent repeat visits and compare with calibrated reference measurements. Maintain geographically separated evaluation datasets, track accuracy by ecosystem type and publish reproducible evaluation results. Control sensitive locations and obtain permission for access and data use.</p>
      <p>Accept useful records, reject invalid evidence and reroute technical faults. This is the foundation of both scientific value and fair attribution.</p>

      <h2 id="points">Every contribution earns its place</h2>
      <p>Points recognise accepted observations, verification, software, model improvements, community work and restoration. Award more for scientifically informative missions and valuable independent checks, not simply for volume. Retrospective bonuses recognise contributions whose importance becomes clear later.</p>
      <p>Under every points allocation sits a durable contribution record: mission ID, contributor, evidence reference, method, verdict, points awarded and subsequent use. A measurement can improve a model today and help enable a restoration project years later. The record preserves that lineage.</p>
      <p>Points power progression, reputation, crews and collective achievements. They also preserve the basis for future economic recognition. They have no fixed monetary value or guaranteed redemption; the movement creates the value before it designs the economics.</p>

      <h2 id="additionality">From knowledge to regeneration</h2>
      <p>Map what exists, identify what could improve, investigate the barriers, and track the results of interventions. Compare outcomes with an appropriate baseline. Existing carbon stock is not the same as new sequestration; a verified observation is not itself a carbon credit.</p>
      <p>Respect ecological suitability and local land rights. Restoration means healthy, resilient ecosystems, not planting trees everywhere. Monitor survival and condition over time. The same mission infrastructure connects observations, interventions and independent follow-up.</p>

      <h2 id="finance">Create value first. Discover the economics.</h2>
      <p className="lead">Carbon has value. Data has value. A global network of skilled contributors has value. We do not wait for a financing mechanism before creating those assets.</p>
      <p>Years of work on innovative financial mechanisms across Africa and Asia established the central lesson: aligning capital, institutions and delivery in advance can consume years. We reverse that order. Build the movement, accumulate verified contributions and preserve their attribution. Then innovate around what exists.</p>
      <h3>Eight routes to realising value</h3>
      <dl className="mission-inputs finance-routes">{routes.map(([name,body])=><div key={name}><dt>{name}</dt><dd>{body}</dd></div>)}</dl>
      <h3>Retrospective finance</h3>
      <p>Instead of asking funders to underwrite a promise, bring them functioning infrastructure, verified datasets, measurable environmental outcomes and a community that can deliver more. Explore retrospective funding, outcome payments and new tokenomic structures around that achievement.</p>
      <p>For each funding event, establish eligible contributions, data rights, costs, the available reward pool and transparent allocation rules. Regional work can be attributed locally; shared models and infrastructure can be recognised globally. The ledger allows multiple mechanisms to coexist without assigning a universal cash price to a point.</p>
      <p>For example, if a future funder dedicates $100,000 to a defined group of eligible historical contributions totalling 1,000,000 weighted points, a contributor with 2,500 eligible points would receive $250 under a simple proportional rule. This illustrates an allocation method, not a valuation or promised payout. Different mechanisms can recognise different contributions.</p>
      <p>Learn from results-based finance such as the <a className="text-link" href="https://www.forestcarbonpartnership.org/">Forest Carbon Partnership Facility</a>, and invent mechanisms beyond existing schemes. The <Link className="text-link" href="/work">work archive</Link> documents the years of financial innovation behind this ambition.</p>

      <h2 id="batumi">Start building, everywhere</h2>
      <p>Develop the grid and ingestion services, publish the mission schema, build the map and guided mobile capture, implement evidence review and points accounting, then connect drone workflows. Begin field testing in Batumi with 100 missions and 20 participants as an initial target, and publish the playbook for other communities.</p>
      <p>Recruit university crews, ecology students, open-source developers and drone enthusiasts. The immediate goal is useful work, repeat participation and a growing verified record.</p>
      <div className="hero-actions"><Link className="button button-amber" href="/community">Join the movement</Link><a className="text-link" href="https://github.com/fraserbrownirl/netpositive-solutions">GitHub ↗</a></div>
    </article></div>
  </main><SiteFooter/></>;
}
