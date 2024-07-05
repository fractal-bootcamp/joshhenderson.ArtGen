'use client'

import { User } from "@prisma/client";
import { Component, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArtRender from "../components/ArtRender";
import Controls from "../components/Controls";


export default function MakeArt() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [background, setBackground] = useState("white")
    const router = useRouter()

    async function submissionHandler() {

        console.log("Submitting your art...")
        console.log({ title, description, background })
        await fetch('/api/artPosts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description, background: background }),

        })
        // redirect to feed page
        router.push('/feed')
    }



    return (
        <>
            <div>MakeArt</div>

            <ArtRender title={title} description={description} background={background} />

            <div className="flex flex-col items-center justify-center h-screen">
                {console.log('background', background)}
                <Controls title={title} description={description} background={background} setTitle={setTitle} setDescription={setDescription} setBackground={setBackground} />
            </div>
            <button onClick={submissionHandler}>Submit your art!</button>
        </>
    );
}