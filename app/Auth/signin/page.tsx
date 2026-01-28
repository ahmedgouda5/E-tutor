import SignInForm from "@/components/featuers/Auth/SignInForm";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-[#EBEBFF] hidden md:flex items-center justify-center">
        <Image
          src="/Auth/Saly-10.svg"
          alt="illustration"
          width={500}
          height={500}
          priority
        />
      </div>

      <SignInForm />
    </div>
  );
};

export default SignIn;
