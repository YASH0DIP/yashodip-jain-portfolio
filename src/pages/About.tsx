import { motion } from "framer-motion";
import { GithubOutlined, LinkedinFilled, MailOutlined, FacebookFilled, InstagramOutlined } from "@ant-design/icons";
import { SiGeeksforgeeks, SiVercel } from "react-icons/si";
import type { ReactElement } from "react";

interface SocialIcons {
  icon: ReactElement;
  label: string;
  link: string;
}

function About() {
  const socials: SocialIcons[] = [
    { icon: <LinkedinFilled />, label: "yashodipjainofficial", link: "https://www.linkedin.com/in/yashodipjainofficial/" },
    { icon: <GithubOutlined />, label: "YASH0DIP", link: "https://github.com/YASH0DIP" },
    { icon: <MailOutlined />, label: "jainyashodip777@gmail.com", link: "mailto:jainyashodip777@gmail.com" },
    { icon: <InstagramOutlined />, label: "y.a.s.h.o.d.i.p", link: "https://www.instagram.com/y.a.s.h.o.d.i.p/" },
    { icon: <FacebookFilled />, label: "yashodip.jain.75", link: "https://www.facebook.com/yashodip.jain.75/" },
    { icon: <SiGeeksforgeeks />, label: "jainyashvs3x", link: "https://www.geeksforgeeks.org/user/jainyashvs3x/" },
    // { icon: <BsTwitterX />, label: "", link: "" },
    { icon: <SiVercel />, label: "yash0dips-projects", link: "https://vercel.com/yash0dips-projects" },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#0a192f] text-gray-200 flex justify-center px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-[#64ffda]">
            About Me
          </h3>

          <p className="text-base sm:text-lg mb-5 leading-relaxed text-gray-300">
            I’m a <span className="text-[#64ffda] font-medium">Full Stack Developer</span> passionate about
            building responsive, user-friendly, and visually appealing web applications. I enjoy combining design and functionality
            to deliver seamless digital experiences.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-400">
            My tech stack includes{" "}
            <span className="text-[#64ffda] font-medium">React</span>,{" "}
            <span className="text-[#64ffda] font-medium">Next.js</span>,{" "}
            <span className="text-[#64ffda] font-medium">Tailwind CSS</span>,{" "}
            <span className="text-[#64ffda] font-medium">JavaScript</span>,{" "}
            <span className="text-[#64ffda] font-medium">TypeScript</span>,{" "}
            <span className="text-[#64ffda] font-medium">PHP</span>,{" "}
            <span className="text-[#64ffda] font-medium">Python / Django REST Framework</span>,{" "}
            <span className="text-[#64ffda] font-medium">Java / Spring Boot</span>, and{" "}
            <span className="text-[#64ffda] font-medium">Git</span>.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-400 mt-3">
            I love turning ideas into scalable applications, focusing on clean code, responsive design, and smooth user experiences.
          </p>
        </motion.div>


        {/* Socials Grid */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-8 text-4xl justify-items-center"
        >
          {socials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, color: "#64ffda" }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#64ffda] transition-colors text-center"
            >
              <a href={item.link}>{item.icon}</a>
              <p className="text-[10px] sm:text-xs break-all">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
