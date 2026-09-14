"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Search, Sprout } from "lucide-react";
import assets from "../../../public/regen-atlas-assets.json";

type Asset = (typeof assets)[number];
const typeOrder = ["Ecotokens", "Clean Energy", "Impact RWAs", "Commodities", "Cryptonative", "Currency"];
const typeDescriptions: Record<string, string> = {
  Ecotokens: "Nature, climate, carbon, biodiversity, plastic, soil, and water-linked assets.",
  "Clean Energy": "Energy, renewable generation, and energy-linked financial instruments.",
  "Impact RWAs": "Real-world assets with an impact or sustainability lens.",
  Commodities: "Land, forest, agricultural, and other commodity-linked assets.",
  Cryptonative: "Crypto-native projects, memberships, governance, and impact-to-earn systems.",
  Currency: "Currencies, stablecoins, reserve-backed, and insurance-linked instruments.",
};

function externalHost(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return "Open link"; }
}

export default function AtlasDirectory() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All projects");
  const [subtype, setSubtype] = useState("All subtypes");
  const [showAll, setShowAll] = useState(false);

  const subtypes = useMemo(() => Array.from(new Set(assets.flatMap((asset) => asset.subtypes))).sort(), []);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return assets.filter((asset) => {
      const matchesQuery = !normalized || [asset.name, asset.description, asset.issuer, ...asset.types, ...asset.subtypes].join(" ").toLowerCase().includes(normalized);
      const matchesType = type === "All projects" || asset.types.includes(type);
      const matchesSubtype = subtype === "All subtypes" || asset.subtypes.includes(subtype);
      return matchesQuery && matchesType && matchesSubtype;
    });
  }, [query, subtype, type]);

  const visible = showAll ? filtered : filtered.slice(0, 60);

  return <main className="atlas-page">
    <header className="atlas-topbar"><a className="atlas-brand" href="/"><span className="brand-mark"><Sprout size={18} /></span><span>THE COMMONS<br /><b>REFORESTATION ATLAS</b></span></a><a className="atlas-back" href="/"><ArrowLeft size={15} /> Back to briefing</a></header>
    <section className="atlas-hero"><div><p className="kicker">06 / project landscape</p><h1>505 assets.<br /><em>One living map.</em></h1><p>Regen Atlas is a live green-crypto marketplace. This directory is a captured research snapshot of every published asset listed there on 14 September 2026, organised by the site’s own asset taxonomy.</p></div><div className="atlas-count"><strong>505</strong><span>published assets</span><small>Regen Atlas snapshot<br />14 Sep 2026 UTC</small></div></section>
    <section className="atlas-controls"><div className="atlas-search"><Search size={17} /><input aria-label="Search projects" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search names, issuers, subtypes…" /></div><select aria-label="Filter by project type" value={type} onChange={(event) => setType(event.target.value)}><option>All projects</option>{typeOrder.map((name) => <option key={name}>{name}</option>)}</select><select aria-label="Filter by subtype" value={subtype} onChange={(event) => setSubtype(event.target.value)}><option>All subtypes</option>{subtypes.map((name) => <option key={name}>{name}</option>)}</select><span className="atlas-result-count">{filtered.length} shown</span></section>
    <section className="atlas-taxonomy"><p className="kicker">Atlas taxonomy</p><div className="taxonomy-grid">{typeOrder.map((name) => { const count = assets.filter((asset) => asset.types.includes(name)).length; return <button className={type === name ? "selected" : ""} key={name} onClick={() => setType(type === name ? "All projects" : name)}><strong>{count}</strong><span>{name}</span><small>{typeDescriptions[name]}</small></button>; })}</div></section>
    <section className="atlas-list"><div className="atlas-list-heading"><div><p className="kicker">Published project register</p><h2>{type === "All projects" ? "Every listed project" : type}</h2></div><p>Links are carried through from Regen Atlas. “Issuer” opens the project or issuer page; “market” opens the trading or asset page when supplied.</p></div><div className="asset-list">{visible.map((asset, index) => <AssetRow key={`${asset.id}-${index}`} asset={asset} />)}</div>{filtered.length > 60 && <button className="show-more" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer" : `Show all ${filtered.length} projects`} <ArrowUpRight size={15} /></button>}{filtered.length === 0 && <div className="empty-results">No published assets match those filters.</div>}</section>
    <footer className="atlas-footer"><span>Source: <a href="https://www.regenatlas.xyz/" target="_blank" rel="noreferrer">regenatlas.xyz</a></span><span>Snapshot captured 14 Sep 2026 UTC · Research use only</span><a href="/">Back to commons briefing ↑</a></footer>
  </main>;
}

function AssetRow({ asset }: { asset: Asset }) {
  const primaryLink = asset.issuerLink || asset.exchangeLink;
  return <article className="asset-row"><div className="asset-index">{String(assets.indexOf(asset) + 1).padStart(3, "0")}</div><div className="asset-main"><h3>{asset.name}</h3><p>{asset.description || "No description supplied in the Regen Atlas record."}</p><div className="asset-tags">{asset.types.map((tag) => <span className="asset-type" key={tag}>{tag}</span>)}{asset.subtypes.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="asset-links">{primaryLink ? <a href={primaryLink} target="_blank" rel="noreferrer"><ExternalLink size={14} /> {asset.issuerLink ? externalHost(asset.issuerLink) : "Market link"}</a> : <span className="no-link">No external link listed</span>}{asset.exchangeLink && asset.exchangeLink !== primaryLink && <a href={asset.exchangeLink} target="_blank" rel="noreferrer"><ArrowUpRight size={14} /> Market / asset page</a>}<small>{asset.issuer || "Issuer not supplied"}</small></div></article>;
}