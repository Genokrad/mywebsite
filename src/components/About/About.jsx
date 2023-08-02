// import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";

import { fadeIn, textVariant } from "../../utils/motion";
import { ServiceCard } from "./ServiceCard";

import { SectionWraper } from "../../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a junior frontend developer, I am responsible and attentive to
        details. I have a quick learning ability, and I am always ready to
        explore new technologies to improve my skills. I am proficient in
        JavaScript, Sass, HTML5, CSS3, React, Redux, Sketch, Figma, Tailwind
        CSS, Framer, and MUI. My passion for web development drives me to create
        engaging and user-friendly interfaces, and I am eager to contribute my
        knowledge to build innovative and exciting web projects. <br /> If you
        have any other requests or need further assistance, feel free to ask!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((item, index) => (
          <ServiceCard key={item.title} index={index} item={item} />
        ))}
      </div>
    </>
  );
};
export default SectionWraper(About, "about");
