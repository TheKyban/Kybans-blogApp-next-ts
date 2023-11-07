// import { NextRequest, NextResponse } from "next/server";
// import { authSession } from "./utils/auth";
export { default } from "next-auth/middleware";

// export const middleware = async (req: NextRequest) => {
//     const session = await authSession();
//     const path = await req.nextUrl.pathname;
//     console.log(path);
// };

export const config = {
    matcher: ["/write"],
};
