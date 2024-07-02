import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/Prisma-Client";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const art = await prisma.art.findUnique({
        where: {
            id: String(id)
        }
    })
    // return Response.json({ message: 'Hello, I am /api/art/all !' });
    return Response.json(art);
} 