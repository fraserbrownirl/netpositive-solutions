import type { Metadata } from "next";
import "./globals.css";
const description="A global movement combining satellite intelligence, QVAC, mobile field missions and drones to build verified environmental knowledge, accumulate contribution points and invent the economics of restoration.";
export const metadata: Metadata={title:{default:"Net-Positive Solutions — The planet is our playing field",template:"%s — Net-Positive Solutions"},description,openGraph:{title:"The planet is our playing field",description,type:"website",images:["/images/forest-restoration.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}