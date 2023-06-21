import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
      lg:py-2 lg:px-4 md:text-sm md:py-1 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
      xs:text-dark xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm hover:bg-nvidia
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-sun text-dark 
          p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-sun lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML 5" x="-7vw" y="2vw" />
        <Skill name="Tailwind CSS" x="-20vw" y="-15vw" />
        <Skill name="CSS" x="-2vw" y="-10vw" />
        <Skill name="Javascript" x="4vw" y="6vw" />
        <Skill name="React.js" x="0vw" y="12vw" />
        <Skill name="Next.js" x="-12vw" y="-5vw" />
        <Skill name="Git" x="15vw" y="-12vw" />
        <Skill name="Node.js" x="12vw" y="-5vw" />
        <Skill name="VSCODE" x="27vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="PHP" x="10vw" y="19vw" />
        <Skill name="Postman" x="21vw" y="22vw" />
        <Skill name="Bootstrap" x="-25vw" y="-1vw" />
        <Skill name="Netlify" x="-8vw" y="15vw" />
        <Skill name="Vercel" x="-1vw" y="19vw" />
        <Skill name="NoSQL" x="-15vw" y="10vw" />
        <Skill name="Canva" x="-9vw" y="24vw" />

        <Skill name="MongoDB" x="15vw" y="1vw" />
        <Skill name="Express.js" x="21vw" y="10vw" />
        <Skill name="Gitlab" x="19vw" y="14vw" />
        <Skill name="GitHub" x="-30vw" y="15vw" />
        <Skill name="SublimeText" x="10vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;
