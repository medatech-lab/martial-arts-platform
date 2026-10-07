import { NextRequest, NextResponse } from "next/server";
import { isValidAdminToken } from "@/lib/admin-auth";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get("saints_admin_session")?.value;
    const authenticated = isValidAdminToken(token);

    if (pathname === "/admin/login") {
        if (authenticated) {
            return NextResponse.redirect(
                new URL("/admin/trainings", request.url)
            );
        }

        return NextResponse.next();
    }

    if (!authenticated) {
        return NextResponse.redirect(
            new URL("/admin/login", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};