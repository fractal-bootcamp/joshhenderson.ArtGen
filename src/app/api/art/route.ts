import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/Prisma-Client';

// This will be for adding favorites to make my databse a bit more intersting 
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     return Response.json({ message: 'Hello, POST WORLD!' });
// }

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    // get all the art from the database
    const art = await prisma.art.findMany();
    return Response.json(art);
}