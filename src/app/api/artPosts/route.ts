import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../Prisma-Client';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import verifyUser from '@/middleware/verifyUser';

const artSchema = z.object({
    intensity: z.number(),
    backgroundColor: z.string(),
    color: z.string(),
    title: z.string().optional(),
    background: z.string().optional(),
    description: z.string().optional()
});

// POST async function for handling post requests
const postHandler = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json();
    console.log("body", body);
    const parsedBody = artSchema.safeParse(body);
    if (!parsedBody.success) {
        console.error(parsedBody.error);
        return Response.json({ error: 'Invalid request body' }, { status: 400 });
    }
    const { intensity, backgroundColor, color, title, background, description } = parsedBody.data;
    const artPost = await prisma.art.create({
        data: {
            intensity,
            backgroundColor,
            color,
            title, // Add appropriate title
            background, // Add appropriate background
            description // Add appropriate description
        }
    });
    return Response.json({ artPost });
}
//POST route for handling artPosts
export const POST = verifyUser(postHandler)