"use client";
import Image from "next/image";
import verifyUser from "@/middleware/verifyUser";
import ArtParent from "../components/art-parent";


export default function Home2() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ fontFamily: 'CoolFont, sans-serif', textAlign: 'center', fontSize: '1.5rem' }}>
            <div>
                <ArtParent />
            </div>
        </main>
    );
}
