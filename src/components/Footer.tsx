import { LinkedinFilled, GithubFilled, MailOutlined, InstagramOutlined, FacebookFilled } from "@ant-design/icons";

function Footer() {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-400 py-8 border-t border-[#233554] flex flex-col items-center gap-4 text-center">
      <div className="flex space-x-6 text-2xl">
        <a href="#" className="hover:text-[#64ffda]"><LinkedinFilled /></a>
        <a href="#" className="hover:text-[#64ffda]"><GithubFilled /></a>
        <a href="mailto:jainyashodip777@gmail.com" className="hover:text-[#64ffda]"><MailOutlined /></a>
        <a href="#" className="hover:text-[#64ffda]"><InstagramOutlined /></a>
        <a href="#" className="hover:text-[#64ffda]"><FacebookFilled /></a>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 tracking-wide">
        Built by <span className="text-[#64ffda] font-semibold">Yashodip Jain</span> © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
