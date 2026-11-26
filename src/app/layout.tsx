import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:{default:"Net-Positive Solutions — Fraser Brown",template:"%s — Net-Positive Solutions"},description:"Fraser Brown’s environmental mission network proposal, grounded in a decade of conservation finance and restoration work."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}