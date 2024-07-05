'use client'

import { User } from "@prisma/client";
import { Component, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArtRender from "../components/ArtRender";
import Controls from "../components/Controls";
import ArtParent from "../components/art-parent";
import Controls2 from "../components/controls2";


export default function MakeArt() {
    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")
    // const [background, setBackground] = useState("white")
    const router = useRouter()



    return (
        <>
            <div className="container mx-auto p-4 flex flex-col items-center">
                <div className="text-3xl font-bold mb-4">MakeArt</div>
                <ArtParent />
            </div>
        </>
    );
}