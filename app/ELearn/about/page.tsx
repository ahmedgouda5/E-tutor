"use client";
import { InfiniteMovingCardsDemo } from "@/components/featuers/about/Testimonials";
import Sponsers from "@/components/featuers/Homepage/Sponsers";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const About = () => {
  const Pathname = usePathname();
  return (
    <div className="my-3">
      <nav className="flex justify-center flex-col items-center space-y-3">
        <h3 className="text-4xl font-bold text-gray-900">About</h3>
        <span className="capitalize">{Pathname.slice(1, Pathname.length)}</span>
      </nav>

      <main className="px-10 md:px-20 space-y-14 mt-10">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
          <div className="flex flex-col justify-start gap-6 md:gap-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
              2007-{new Date().getFullYear()}
            </h2>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900">
              We share knowledge with the world
            </h4>
            <p className="text-gray-400 font-mono text-sm md:text-base">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
              Donec non ipsum non risus egestas tincidunt at vitae nulla.
            </p>
          </div>

          <div className="mt-6 md:mt-0 col-span-1 md:col-span-2 flex justify-center md:justify-end">
            <Image
              src="/about/aboutpanner.png"
              alt="About us"
              width={500}
              height={500}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </section>
        <section>
          <Sponsers />
        </section>
        <section className="flex items-center gap-10 md:gap-20 p-4 flex-col md:flex-row bg-[#FFEEE8] rounded-lg">
          <Image
            src="/about/partners-working-office.png"
            alt="Our Mission"
            width={400}
            height={400}
            className="object-cover rounded-lg w-full"
            priority
          />
          <div>
            <h5 className="text-orange-600">OUR ONE BILLION MISSION</h5>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Our one billion mission sounds bold, We agree.
            </h2>
            <p className="text-gray-400 font-mono text-sm md:text-base">
              &rdquo;We cannot solve our problems with the same thinking we used when
              we created them.&ldquo;—Albert Einstein. Institutions are slow to
              change. Committees are where good ideas and innovative thinking go
              to die. Choose agility over dogma. Embrace and drive change. We
              need to wipe the slate clean and begin with bold, radical
              thinking.
            </p>
          </div>
        </section>
        <section className="flex items-center gap-10 md:gap-20 flex-col-reverse md:flex-row bg-[#F5F7FA] rounded-lg p-2">
          <div className="space-y-2">
            <h5 className="text-orange-600">OUR GALLERY</h5>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              We’ve been here almost 17 years
            </h2>
            <p className="text-gray-400 font-mono text-sm md:text-base">
              Fusce lobortis leo augue, sit amet tristique nisi commodo in.
              Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc
              libero. Curabitur in urna ligula. torquent per conubia nostra.
            </p>
            <Button className="bg-orange-500 text-white p-3 rounded-lg w-fit mt-1 hover:bg-orange-600 transition">
              Join our team →
            </Button>
          </div>
          <Image
            src="/about/Gallery.png"
            alt="Gallery"
            width={400}
            height={400}
            className="object-cover rounded-lg w-full"
            priority
          />
        </section>
        <section>
          <InfiniteMovingCardsDemo/>
        </section>
      </main>
    </div>
  );
};

export default React.memo(About);
