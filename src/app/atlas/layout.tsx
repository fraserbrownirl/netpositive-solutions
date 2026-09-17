import type { Metadata } from "next";
export const metadata: Metadata = { title: "Atlas Directory — Net-Positive Solutions", description: "A searchable research directory of public ecological, climate, energy, land and impact assets." };
export default function AtlasLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }