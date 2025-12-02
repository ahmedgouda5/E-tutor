import React from "react";
type Props = {
  heading: string;
  para?: string;
};
const Heading = ({ heading, para }: Props) => {
  return (
    <div className="flex justify-center text-4xl font-bold text-gray-900 my-20 text-center flex-col gap-2">
      {heading}
      <p className="text-gray-800 font-light text-lg ">{para}</p>
    </div>
  );
};

export default Heading;
