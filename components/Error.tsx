"use client";

import Image from "next/image";

interface ErrorProps {
  reset: () => void;
}

const Error = ({ reset }: ErrorProps) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2  h-screen items-center px-32">

      <section>
        <h1 className="text-5xl font-bold">Something went wrong</h1>

        <button
          onClick={reset}
          className="mt-4 px-4 py-2 text-xl bg-orange-500 text-white rounded w-fit"
        >
          Try again
        </button>
      </section>

      <section>
        <Image
          src="/Saly-2.png"
          alt="Error illustration"
          width={600}
          height={600}
          priority
        />
      </section>
    </main>
  );
};

export default Error;
