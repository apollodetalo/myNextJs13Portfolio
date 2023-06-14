import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Backend from "../../public/images/articles/Backend.jpg";
import Frontend from "../../public/images/articles/Frontend.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }} // Hover effects here
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Apollo Detalo | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Hands on Trainings"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Backend Certificate"
              summary="
              Core: Javascript, MonggoDB, Node.js , Express.js, and Postman.
              
              Specialized in client-side (front-end) and server-side (back-end) technologies required to create a complete and functional web application."
              time="View"
              link="http://share.zertify.zuitt.co/certificate/324ab5c9-8390-4381-b23b-85e313b0df8e"
              img={Backend} // Represents an Image imported above
            />

            <FeaturedArticle
              title="Frontend Certificate"
              summary="Core: HTML, CSS, Bootstrap 5, and Git. 
              Focuses on the server-side of web applications, handling the logic, data, and infrastructure that powers the application."
              time="View"
              link="https://share.zertify.zuitt.co/certificate/dff6ce62-2efc-4cc1-a158-58f7da8c28b3/"
              img={Frontend} //Represents an Image imported above
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Certificates
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="June 15, 2023"
              link="/"
              img={article3} //Represents an Image imported above
            />

            <Article
              title="Backend - handle tasks such as data storage and retrieval, server configuration, implementing business logic, handling user authentication and authorization, and processing requests from the frontend. "
              date="June 09, 2023"
              link="/"
              img={Backend} //Represents an Image imported above
            />

            <Article
              title="Frondend - involves working with web technologies such as HTML (Hypertext Markup Language) for structuring the content, CSS (Cascading Style Sheets) for styling and layout, and JavaScript for adding interactivity and functionality. "
              date="May 20, 2023"
              link="/"
              img={Frontend} //Represents an Image imported above
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
