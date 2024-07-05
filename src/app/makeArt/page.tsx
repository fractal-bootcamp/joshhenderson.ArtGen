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
            <div className="container mx-auto p-4 flex flex-col items-center">
                <div className="text-3xl font-bold mb-4">MakeArt</div>

                <ArtRender title={title} description={description} background={background} />

                <div className="flex flex-col items-center justify-center space-y-4 w-full">
                    <Controls title={title} description={description} background={background} setTitle={setTitle} setDescription={setDescription} setBackground={setBackground} />
                </div>
                <button
                    onClick={submissionHandler}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Submit your art!
                </button>
            </div>
        </>
    );
}