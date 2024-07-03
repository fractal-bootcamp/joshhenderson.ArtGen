'use client'

import { User } from "@prisma/client";
import { Component, useEffect, useState } from "react";

function submissionHandler() {
    console.log("Submitting your art...")

}

function ArtRender({ title, description, background, setTitle, setDescription, setBackground }: { title: string, description: string, background: string, setTitle: (title: string) => void, setDescription: (description: string) => void, setBackground: (background: string) => void }) {
    return (
        <>
            <div>MakeArt</div>
            <div className={`bg-${background} h-80 w-80`}></div>
            <input className='text-black' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input className='text-black' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input className='border-black border-2 h-4 w-6' type="color" value={background} onChange={(e) => setBackground(e.target.value)}></input>
            <button onClick={() => { (submissionHandler()) }}>Submit your art!</button>
        </>
    )
}
export default function MakeArt() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [background, setBackground] = useState("white")

    function submissionHandler() {
        console.log("Submitting your art...")
        console.log({ title, description, background })
        fetch('/api/artPosts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description, background: background }),
        })
    }



    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <ArtRender key="2" title={title} description={description} background={background} setTitle={setTitle} setDescription={setDescription} setBackground={setBackground} />
            </div>
        </>
    );
}