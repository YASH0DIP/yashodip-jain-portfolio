// import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleSidebar = () => setIsOpen(!isOpen);

//     return (
//         <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f] text-gray-200 shadow-md">
//             {/* Desktop Navbar */}
//             <nav className="hidden md:flex items-center justify-between px-10 py-5">
//                 <div className="text-2xl font-bold tracking-wider text-[#64ffda]">YCJ</div>
//                 <ul className="flex gap-10 text-xl">
//                     <li><Link to="/" className="hover:text-[#64ffda]">Home</Link></li>
//                     <li><Link to="/about" className="hover:text-[#64ffda]">About</Link></li>
//                     <li><Link to="/projects" className="hover:text-[#64ffda]">Projects</Link></li>
//                 </ul>
//             </nav>

//             {/* Mobile Navbar */}
//             <nav className="flex md:hidden items-center justify-between px-6 py-4">
//                 <div className="text-xl font-bold text-[#64ffda]">YCJ</div>
//                 <button onClick={handleSidebar} className="text-2xl focus:outline-none">
//                     {isOpen ? <CloseOutlined /> : <MenuOutlined />}
//                 </button>
//             </nav>

//             {/* Mobile Sidebar */}
//             <div
//                 className={`fixed top-0 right-0 h-full w-2/3 bg-[#112240] text-gray-200 transform ${isOpen ? "translate-x-0" : "translate-x-full"
//                     } transition-transform duration-300 ease-in-out md:hidden z-40`}
//             >
//                 <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
//                     <Link to="/" onClick={handleSidebar} className="hover:text-[#64ffda]">Home</Link>
//                     <Link to="/about" onClick={handleSidebar} className="hover:text-[#64ffda]">About</Link>
//                     <Link to="/projects" onClick={handleSidebar} className="hover:text-[#64ffda]">Projects</Link>
//                 </div>
//             </div>

//             {/* Overlay for when sidebar is open */}
//             {isOpen && (
//                 <div
//                     onClick={handleSidebar}
//                     className="fixed inset-0 bg-gray-900 md:hidden z-30 transition-opacity duration-300 flex justify-start items-center"
//                 >
//                     {isOpen && <div className="text-2xl rounded-full transition-all ease-linear w-10 h-10 flex justify-center items-center ml-[20%]"><CloseOutlined /></div>}
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Header;

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f] text-gray-200 shadow-md">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between px-10 py-5">
        <div className="text-2xl font-bold tracking-wider text-[#64ffda] cursor-pointer" onClick={() => scrollToSection("home")}>YCJ</div>
        <ul className="flex gap-10 text-lg">
          <li onClick={() => scrollToSection("home")} className="hover:text-[#64ffda] cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-[#64ffda] cursor-pointer">About</li>
          <li onClick={() => scrollToSection("projects")} className="hover:text-[#64ffda] cursor-pointer">Projects</li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-[#64ffda] cursor-pointer" onClick={() => scrollToSection("home")}>YCJ</div>
        <button onClick={handleSidebar} className="text-2xl focus:outline-none">
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-[#112240] text-gray-200 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-40`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          <button onClick={() => scrollToSection("home")} className="hover:text-[#64ffda]">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-[#64ffda]">About</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-[#64ffda]">Projects</button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={handleSidebar}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 md:hidden z-30 transition-opacity duration-300"
        />
      )}
    </header>
  );
}

export default Header;

