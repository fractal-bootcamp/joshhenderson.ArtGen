"use client";
import Image from "next/image";
import verifyUser from "@/middleware/verifyUser";
import ArtDisplay from "./art-rendering/art-display";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ fontFamily: 'CoolFont, sans-serif', textAlign: 'center', fontSize: '1.5rem' }}>
      <div>
        hello art world
        <ArtDisplay />
      </div>
    </main>
  );
}
