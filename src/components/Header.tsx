import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

function Header(): React.ReactElement {
  const navigationLinks: string[] = ["home", "about", "education", "projects",];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleSidebar = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a192f]/95" : "bg-[#0a192f]"
      }`}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between py-5 px-10 lg:px-20 text-gray-200">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold tracking-wider text-[#64ffda] cursor-pointer hover:scale-105 transition-transform"
        >
          YCJ
        </div>

        {/* Menu Items */}
        <ul className="flex gap-10 lg:gap-14 text-base lg:text-lg font-medium">
          {navigationLinks.map((item: string) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative cursor-pointer text-gray-300 hover:text-[#64ffda] transition-colors duration-300 group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`flex md:hidden items-center justify-between px-6 py-4 text-gray-200 ${
          isScrolled ? "bg-[#0a192f]/95 backdrop-blur-md" : "bg-[#0a192f]"
        }`}
      >
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-[#64ffda] cursor-pointer"
        >
          YCJ
        </div>
        <button
          onClick={handleSidebar}
          className="text-2xl focus:outline-none hover:text-[#64ffda] transition-colors"
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-[#112240] text-gray-200 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40 shadow-lg`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-medium">
          {navigationLinks.map((item: string) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-[#64ffda] transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={handleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30 transition-opacity duration-300"
        />
      )}
    </header>
  );
}

export default Header;
