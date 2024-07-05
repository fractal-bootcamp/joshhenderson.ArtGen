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
import { useRouter } from 'next/navigation'
import styles from './ArtParent.module.css';

export default function ArtParent() {
    const [intensity, setIntensity] = useState(0.5);
    const [color, setColor] = useState('red');
    const [backgroundColor, setBackgroundColor] = useState('wheat');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter()

    async function submissionHandler() {

        console.log("Submitting your art...")
        console.log({ intensity, backgroundColor, color })
        await fetch('/api/artPosts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ intensity: intensity, backgroundColor: backgroundColor, color: color }),

        })
        // redirect to feed page
        router.push('/feed')
    }

    console.log(backgroundColor)

    return (
        <main className={styles.main}>
            <div>
                <ArtChild intensity={intensity} backgroundColor={backgroundColor} color={color} />
                <Controls2 setIntensity={setIntensity} setBackgroundColor={setBackgroundColor} setColor={setColor} setTitle={setTitle} setDescription={setDescription} />
            </div>
            <button
                onClick={submissionHandler}
                className={styles.submitButton}>
                Submit your art!
            </button>
        </main>
    );
}
