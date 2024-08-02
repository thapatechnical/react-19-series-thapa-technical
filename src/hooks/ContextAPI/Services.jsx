import { useContext } from "react";
import { BioContext } from ".";

export const Services = () => {
  const { myName, myAge } = useContext(BioContext);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
    >
      <h1>
        Hello Context API (Services). My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};
