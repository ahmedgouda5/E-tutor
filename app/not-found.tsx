import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen px-6 py-10 text-center md:text-left gap-5">
      <section className="flex flex-col items-center justify-start ">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-400">Error 404</h1>
        <h4 className="text-lg md:text-xl mb-4 text-gray-700">
          Oops! Page not found
        </h4>

        <p className="text-gray-400 mb-6 max-w-md text-center">
          Something went wrong. It looks like your requested page could not be
          found. The link might be broken or the page may have been removed.
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-400 transition"
        >
          Go Back
        </Link>
      </section>

      <section className="flex justify-center ">
        <Image      
          src="/about/Error.png"
          alt="Not Found"
          width={500}
          height={500}
          className="object-cover  max-w-xs md:max-w-lg"
          priority
        />
      </section>
    </main>
  );
}
