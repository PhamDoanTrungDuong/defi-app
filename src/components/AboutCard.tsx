import React from "react";

interface IProps {
      icon: any;
      heading: string;
      text: string;
}

const AboutCard: React.FC<IProps> = ({icon, heading, text}) => {
  return (
    <div className="flex flex-col text-left border py-12 px-8 rounded-2xl">
      <div>
        <div className="bg-[#00d8ff] inline-flex p-3 text-black rounded-full">
          {icon}
        </div>
        <h3 className="font-bold text-xl py-4">
          {heading}
        </h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
