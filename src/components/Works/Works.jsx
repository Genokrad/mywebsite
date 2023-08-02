// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";

import { SectionWraper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { ProjectCard } from "./ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl loading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi
          perspiciatis quos est. Numquam quisquam similique deleniti animi qui
          autem. Tenetur praesentium quos sunt? Vel dolorum animi itaque autem
          quibusdam.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWraper(Works, "");
