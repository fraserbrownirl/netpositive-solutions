import type { Metadata } from "next";
import "./globals.css";
const description="A proposed global movement of people, local AI and drones earning contribution points through verified environmental missions, with an enduring ambition for innovative restoration finance.";
export const metadata: Metadata={title:{default:"Net-Positive Solutions — The planet is our playing field",template:"%s — Net-Positive Solutions"},description,openGraph:{title:"The planet is our playing field",description,type:"website",images:["/images/forest-restoration.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}