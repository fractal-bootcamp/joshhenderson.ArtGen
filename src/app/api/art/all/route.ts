import prisma from "../../../../../Prisma-Client";
import { NextRequest, NextResponse } from 'next/server';
import verifyUser from '@/middleware/verifyUser'


// export const GET = verifyUser(async (req: NextRequest, res: NextResponse) => {
//     // get all the art from the database
//     const art = await prisma.art.findMany();
//     return Response.json(art);
// })

export const dynamic = 'force-dynamic'
console.log('HELP')
//GET async function for handling get requests for the FEED
// const getHandler = 

//GET route for handling feed get requests  
const handler = async (request: Request, res: Response) => {
    const art = await prisma.art.findMany();
    return Response.json(art)
}

export const GET = verifyUser(handler)