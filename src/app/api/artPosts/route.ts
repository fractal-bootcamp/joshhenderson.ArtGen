import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../Prisma-Client';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

const artSchema = z.object({
    title: z.string(),
    background: z.string(),
    description: z.string()
});


//POST route for handling artPosts
export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    console.log("body", body);
    const parsedBody = artSchema.safeParse(body);
    if (!parsedBody.success) {
        console.error(parsedBody.error);
        return Response.json({ error: 'Invalid request body' }, { status: 400 });
    }
    const { title, background, description } = parsedBody.data;
    const artPost = await prisma.art.create({ data: { title, background, description } });
    return Response.json({ artPost });
}
