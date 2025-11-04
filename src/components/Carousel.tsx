import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiPostgresql, SiJavascript, SiTypescript, SiNextdotjs, SiMysql } from "react-icons/si";

export default function Carousel() {
  const skills = [
  { icon: <FaReact className="text-[#61DBFB]" />, name: "React" }, // React blue
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" }, // Next.js white/black
  { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: "Tailwind CSS" }, // Tailwind cyan
  { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "JavaScript" }, // JS yellow
  { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" }, // TS blue
  { icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node.js" }, // Node green
  { icon: <SiDjango className="text-[#9da9a5]" />, name: "Django" }, // Django dark green
  { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" }, // PostgreSQL blue
  { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" }, // MySQL blue
  { icon: <FaJava className="text-[#E76F00]" />, name: "Java" }, // Java orange
  { icon: <FaPython className="text-[#3776AB]" />, name: "Python" }, // Python blue
  { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" }, // Git orange
  { icon: <FaDatabase className="text-[#9CA3AF]" />, name: "SQL" }, // Neutral gray
];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 330, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-5 space-y-3">
      <Slider {...settings}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ rotateY: 15, scale: 1 }}
            className="flex flex-col items-center justify-center p-4"
          >
            <div className="flex justify-center items-center rounded-full py-3 px-3 transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-5xl">{skill.icon}</div>
            </div>
            <p className="text-gray-300 text-sm mt-3 hidden sm:block">{skill.name}</p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
