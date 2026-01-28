import Image from "next/image";
import SignUpForm from "@/components/featuers/Auth/SignUpForm";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-[#EBEBFF] hidden md:flex items-center justify-center">
        <Image
          src="/Auth/Saly-1.svg"
          alt="illustration"
          width={500}
          height={500}
          priority
        />
      </div>

      <SignUpForm />
    </div>
  );
};

export default SignUp;
 
