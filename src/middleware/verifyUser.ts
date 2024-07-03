import { auth } from "@clerk/nextjs/server";
import { NextApiHandler } from "next";
import { RequestHandler } from "next/dist/server/next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../Prisma-Client";

type NextRequestHandler = (req: NextRequest, res: NextResponse) => Promise<Response>;

type AuthResult = {
    userId: string | null;
};

export const verifyUser = (handler: NextRequestHandler): NextRequestHandler => {
    return async (req, res) => {
        const authResult: AuthResult = await auth();
        if (authResult.userId) {
            const user = await prisma.user.findUnique({
                where: {
                    id: authResult.userId
                }
            })
        }

        return (
            handler(req, res) //question when i return req now will it have a user property?
        )
    }



}