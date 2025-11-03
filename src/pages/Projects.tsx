import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

interface Projects {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

function Projects() {
  const projectData: Projects[] = [
    {
      title: "Online Bookstore",
      description:
        "A full-stack eCommerce platform using React, Django REST, PostgreSQL, and Stripe for secure payments.",
      tech: ["React", "Django REST", "PostgreSQL", "Stripe", "Tailwind"],
      github: "https://github.com/YASH0DIP/Online-Bookstore-Using-Python-DRF",
      live: "https://github.com/YASH0DIP/Online-Bookstore-Using-Python-DRF",
    },
    {
      title: "Laundry Management System",
      description:
        "Dynamic system with QR tracking, order customization, and automated invoice generation built with PHP and MySQL.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/YASH0DIP/DhobiGhat-Laundry-Services",
      live: "https://github.com/YASH0DIP/DhobiGhat-Laundry-Services",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio built with React, Tailwind, and Framer Motion for smooth animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/YASH0DIP/yashodip-jain-portfolio",
      live: "https://yashodip-jain-portfolio.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a192f] text-gray-200 px-4 sm:px-8 md:px-16 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#64ffda] text-center md:text-left">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-[#64ffda]/30 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#64ffda] mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#233554] text-gray-300 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-5 text-2xl text-gray-400 mt-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda]">
                  <GithubOutlined />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda]">
                  <LinkOutlined />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
