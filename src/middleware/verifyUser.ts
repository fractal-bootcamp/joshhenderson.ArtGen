import { auth, currentUser } from "@clerk/nextjs/server";
import { NextApiHandler } from "next";
import { RequestHandler } from "next/dist/server/next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../Prisma-Client";
import { redirect } from "next/navigation";

type NextRequestHandler = (req: NextRequest, res: NextResponse) => Promise<Response>;

type AuthResult = {
    userId: string | null;
};

export async function verifyUser(handler: NextRequestHandler): Promise<NextRequestHandler> {


    const { userId }: { userId: string | null } = await auth() //attempt to get clerkId and assign to user variable

    if (!userId) { //if user does not exist the redirect to /sign-in
        redirect('/sign-in')
    }

    else if (userId) {  //if userId exists then invoke prisma client to query the database for their clerkId
        const user = prisma.user.findUnique({
            where: {
                clerkId: userId
            }
        })
        if (!user) { //if the clerkId exists but they are not in the database then use prisma.user.create to create a new user
            const user = await currentUser()
            if (user) {
                const newUser = prisma.user.create({
                    data: {
                        clerkId: userId,
                        email: user.emailAddresses[0].emailAddress
                    }
                })
            }
        }
    }
    return handler //call the original handler once verifyUser is complete
}