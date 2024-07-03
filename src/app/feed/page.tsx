'use client'
import React, { useEffect, useState } from 'react'
import { NextResponse } from 'next/server';


const seed = [{
    title: "Art 1",
    user: "User 1",
    background: "FF0099",
    description: "Description 1",
    createdAt: new Date()
},
{
    title: "Art 2",
    user: "User 2",
    background: "00CCFF",
    description: "Description 2",
    createdAt: new Date()
},
{
    title: "Art 3",
    user: "User 3",
    background: "CC0000",
    description: "Description 3",
    createdAt: new Date()
}]

type ArtFeedProps = {
    id: string,
    title: string,
    user: string,
    background: string,
    description: string,
    createdAt: Date
};

type FeedProps = {
    artList: ArtFeedProps[]
}



function ArtFeed({ title, user, background, description, createdAt }: ArtFeedProps) {
    return (
        <>
            <div className='text-white border rounded p-4'>
                <h1>{title}</h1>
                <p>{description} by {user}</p>
                <p>{createdAt.toString()}</p>
            </div>
            <div className={`h-[200px] w-[200px] bg-[${background}] text-[text]`}>Your Art Here</div>
        </>
    )
}

async function fetchArtPosts() {
    const res = await fetch('http://localhost:3000/api/art/all')
    const data = await res.json()
    return data
}




export default function Feed() {
    const [artList, setArtList] = useState<ArtFeedProps[]>([])
    console.log('art is ', artList)
    //let seedList = [...seed]
    //useEffect to fetch the artList
    useEffect(() => {
        fetchArtPosts().then((data) => setArtList(data))
    }, [])

    return (
        artList.map((art: ArtFeedProps) => {
            return <ArtFeed key={art.id} {...art} />
        })
    )
}
