import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:{default:"Net-Positive Solutions — Fraser Brown",template:"%s — Net-Positive Solutions"},description:"Conservation finance, from mechanism design to proof-of-benefit."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}