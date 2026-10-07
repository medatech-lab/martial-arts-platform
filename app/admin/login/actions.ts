"use server";

import {
    createAdminSession,
    deleteAdminSession,
} from "@/lib/admin-auth";

import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUser || !adminPassword) {
        throw new Error(
            "ADMIN_USER oder ADMIN_PASSWORD ist nicht konfiguriert."
        );
    }

    if (username !== adminUser || password !== adminPassword) {
        redirect("/admin/login?error=1");
    }

    await createAdminSession();

    redirect("/admin/trainings");
}

export async function logoutAdmin() {
    await deleteAdminSession();

    redirect("/admin/login");
}