"use client";
import Image from "next/image";
import verifyUser from "@/middleware/verifyUser";
import ArtDisplay from "../art-rendering/art-display";
import { Canvas, useFrame } from "@react-three/fiber"
import { Physics, SphereProps, useBox, usePlane, useSphere } from "@react-three/cannon"
import { Mesh, Sphere } from "three"
import { RefObject, forwardRef, useState } from 'react'
import { Ball } from './ball'
import Controls2 from './controls2'
import ArtChild from './art-child'







export default function ArtParent() {
    const [intensity, setIntensity] = useState(0.5);
    const [color, setColor] = useState('red');
    const [backgroundColor, setBackgroundColor] = useState('wheat');

    console.log(backgroundColor)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ fontFamily: 'CoolFont, sans-serif', textAlign: 'center', fontSize: '1.5rem' }}>
            <div>
                Testing
                <ArtChild intensity={intensity} backgroundColor={backgroundColor} color={color} />
                <Controls2 setIntensity={setIntensity} setBackgroundColor={setBackgroundColor} setColor={setColor} />
            </div>
        </main>
    );
}
