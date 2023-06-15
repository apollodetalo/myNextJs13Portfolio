import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primaryDark dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer | MERN Full-Stack Web Developer"
            company="Zuitt"
            companyLink="https://zuitt.co/"
            time="Feb - May 2023"
            address="Manila, Philippines"
            work="As a MERN full-stack web developer, my latest achievement includes successfully developing and deploying robust web applications using the MERN stack (MongoDB, Express.js, React.js, Next.js and Node.js). With a strong command over front-end and back-end technologies, I have delivered highly functional and user-friendly websites ready to be used by clients. I am now ready to provide my expertise and services to businesses and individuals looking for professional web development solutions.."
          />

          <Details
            position="UberEats Lead Generator"
            company="Ares Growth Agency"
            companyLink="/"
            time="Jan 2023-Present"
            address="Toronto, CA (remote)"
            work="As a part-time UberEats lead generator, I specialized in finding the most updated leads to be used in maximizing SEO for restaurant owners, my work involves driving targeted traffic and generating leads for restaurants on the UberEats platform."
          />

          <Details
            position="Porting Specialist"
            company="Sprint"
            companyLink="https://www.t-mobile.com/"
            time="Oct 2018 - July 2021"
            address="USA (remote)"
            work="
As a porting specialist for Sprint, now T-Mobile, my role involves facilitating the seamless transition of customer phone numbers from other carriers to the Sprint/T-Mobile network. I specialize in the complex process of porting, ensuring that customers can keep their existing phone numbers while switching service providers. ."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
