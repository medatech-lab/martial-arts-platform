import { loginAdmin } from "./actions";
import { logoutAdmin } from "@/app/admin/login/actions";

type LoginPageProps = {
    searchParams: Promise<{
        error?: string;
    }>;
};

export default async function AdminLogin({
    searchParams,
}: LoginPageProps) {
    const params = await searchParams;
    const loginFailed = params.error === "1";

    return (
        <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-neutral-950 px-6 py-12 text-white">
            <div className="w-full max-w-md">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    Saints Workouts
                </p>

                <h1 className="mt-4 text-4xl font-bold uppercase">
                    Admin
                </h1>

                <p className="mt-3 text-sm text-neutral-400">
                    Melde dich an, um Trainings und Buchungen zu verwalten.
                </p>

                {loginFailed && (
                    <div className="mt-6 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        Benutzername oder Passwort ist falsch.
                    </div>
                )}

                <form action={loginAdmin} className="mt-8 grid gap-5">
                    <div>
                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-neutral-300"
                        >
                            Benutzername
                        </label>

                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="w-full rounded-md border border-white/15 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white/40"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-neutral-300"
                        >
                            Passwort
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full rounded-md border border-white/15 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white/40"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 rounded-md bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-neutral-300"
                    >
                        Anmelden
                    </button>
                </form>
            </div>
        </main>
    );
}