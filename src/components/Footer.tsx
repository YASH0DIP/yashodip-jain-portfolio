import {
  LinkedinFilled,
  GithubFilled,
  MailOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { SiGeeksforgeeks, SiVercel } from "react-icons/si";
import type { SocialIcons } from "../pages/About";

function Footer() {
  const footerSocials: SocialIcons[] = [
    {
      icon: <LinkedinFilled />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yashodipjainofficial/",
    },
    {
      icon: <GithubFilled />,
      label: "GitHub",
      link: "https://github.com/YASH0DIP",
    },
    {
      icon: <MailOutlined />,
      label: "Email",
      link: "mailto:jainyashodip777@gmail.com",
    },
    {
      icon: <InstagramOutlined />,
      label: "Instagram",
      link: "https://www.instagram.com/y.a.s.h.o.d.i.p/",
    },
    {
      icon: <SiGeeksforgeeks />,
      label: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/jainyashvs3x/",
    },
    {
      icon: <SiVercel />,
      label: "Vercel",
      link: "https://vercel.com/yash0dips-projects",
    },
  ];

  return (
    <footer className="w-full bg-[#0a192f] text-gray-400 py-8 border-t border-[#233554] flex flex-col items-center gap-4 text-center">
      {/* Social Links */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-2xl">
        {footerSocials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="hover:text-[#64ffda] transition-colors duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-xs sm:text-sm text-gray-500 tracking-wide mt-2">
        Built by{" "}
        <span className="text-[#64ffda] font-semibold">Yashodip Jain</span> ©{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
