import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-400 mb-6">
                Sorry, the page you’re looking for doesn’t exist.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition"
            >
                Go Home
            </Link>
        </main>
    );
}
