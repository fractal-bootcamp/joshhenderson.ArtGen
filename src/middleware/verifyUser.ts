import { auth, currentUser } from "@clerk/nextjs/server";
import { NextApiHandler } from "next";
import { RequestHandler } from "next/dist/server/next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../Prisma-Client";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";

type NextRequestHandler = (req: NextRequest, res: NextResponse) => Promise<Response>;

type AuthResult = {
    userId: string | null;
};

interface NextRequestWithUser extends NextRequest {
    user: User
}


export default function verifyUser(handler: NextRequestHandler): NextRequestHandler {
    console.log("here verifyUser")

    return async (req: NextRequest, res: NextResponse) => {
        console.log("is this hit")
        const { userId }: { userId: string | null } = await auth() //attempt to get clerkId and assign to user variable
        console.log("here2")
        if (!userId) { //if user does not exist the redirect to /sign-in
            redirect('/')
        }
        else if (userId) {  //if userId exists then invoke prisma client to query the database for their clerkId
            const user = prisma.user.findUnique({
                where: {
                    clerkId: userId
                }
            })
            console.log("here3", user); //console.log the user 
            //req
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
        return handler(req, res)  //call the original handler once verifyUser is complete
    }
}