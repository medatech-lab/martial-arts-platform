import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "saints_admin_session";

function getSessionToken() {
    const username = process.env.ADMIN_USER;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
        throw new Error(
            "ADMIN_USER oder ADMIN_PASSWORD fehlt in der .env-Datei."
        );
    }

    return createHmac("sha256", password)
        .update(`saints-workouts:${username}`)
        .digest("hex");
}

export function isValidAdminToken(token?: string) {
    if (!token) {
        return false;
    }

    const expectedToken = getSessionToken();

    const tokenBuffer = Buffer.from(token);
    const expectedBuffer = Buffer.from(expectedToken);

    if (tokenBuffer.length !== expectedBuffer.length) {
        return false;
    }

    return timingSafeEqual(tokenBuffer, expectedBuffer);
}

export async function isAdminAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    return isValidAdminToken(token);
}

export async function requireAdmin() {
    const authenticated = await isAdminAuthenticated();

    if (!authenticated) {
        throw new Error("Nicht autorisiert.");
    }
}

export async function createAdminSession() {
    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, getSessionToken(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 12,
    });
}

export async function deleteAdminSession() {
    const cookieStore = await cookies();

    cookieStore.delete(COOKIE_NAME);
}