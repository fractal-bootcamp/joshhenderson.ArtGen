import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/Prisma-Client';


//POST route for handling artPosts
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { title, background, description } = req.body;
    const artPost = await prisma.art.create({ data: { title, background, description } });
    return res.status(201).json(artPost)
}