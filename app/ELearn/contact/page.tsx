"use client";
import ContactForm from "@/components/featuers/about/ContactForm";
import Heading from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Contact = () => {
  const data = [
    {
      id: 1,
      image:"/about/Branches1.png",
    },
    {
      id: 2,
      image:"/about/Branches2.png",
    },
    {
      id: 3,
      image:"/about/Branches3.png",
    },
    {
      id: 4,
      image:"/about/Branches.png",
    },
  ];
  const Pathname = usePathname();
  return (
    <div className="my-6">
      <nav className="flex justify-center flex-col items-center space-y-3">
        <h3 className="text-4xl font-bold text-gray-900">About</h3>
        <span className="capitalize">{Pathname.slice(1, Pathname.length)}</span>
      </nav>
      <main className="px-10 md:px-20 space-y-14 mt-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
          <div className="flex flex-col justify-center items-center md:items-start  md:justify-start gap-3 md:gap-4">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900">
              Connect with us{" "}
            </h4>
            <p className="text-gray-400 font-mono text-sm md:text-base md:w-[400px] text-center md:text-left">
              Want to chat? We’d love to hear from you! Get in touch with our
              Customer Success Team to inquire about speaking events,
              advertising rates, or just say hello.
            </p>
            <Button className="bg-orange-600 text-white p-3 rounded-lg w-fit mt-1 hover:bg-orange-600 transition">
              <div className="flex items-center gap-2">
                <Mail className=" h-2 w-2 " />
                <span>Send a message</span>
              </div>
            </Button>
          </div>

          <div className="mt-6 md:mt-0 col-span-1  flex justify-center md:justify-end">
            <Image
              src="/about/Fit.png"
              alt="About us"
              width={500}
              height={500}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </section>
        <section>
          <Heading
            heading="Our branches all over the world."
            para="Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. "
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 ">
           { data.map((item)=>( <Image
              src={item.image}
              key={item.id}
              alt="Our branches"
              width={1200}
              height={600}
              className="object-cover rounded-lg mt-6"
              priority
            />))}
          </div>
        </section>
        <section>
             <Heading
            heading="Contact Us"
          />
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default Contact;
