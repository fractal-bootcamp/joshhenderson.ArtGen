import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../Prisma-Client';
import { NextRequest, NextResponse } from 'next/server';
import { verifyUser } from '@/middleware/verifyUser';


// This will be for adding favorites to make my databse a bit more intersting 
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     return Response.json({ message: 'Hello, POST WORLD!' });
// }

export const GET = verifyUser(async (req: NextRequest, res: NextResponse) => {
    // get all the art from the database
    const art = await prisma.art.findMany();
    return Response.json(art);
})

export const dynamic = 'force-dynamic'