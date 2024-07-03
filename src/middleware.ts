import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/feed(.*)',
    '/makeArt(.*)',
    '/'
]);

export default clerkMiddleware((auth, req) => {
    console.log("here middleware")
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
};

//