import React, { useState } from "react";
import Carousel from "../components/Carousel";
import ContactModal from "./ContactModal";

function Hero(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center text-center gap-8 pt-20 px-2"
    >
      {/* Heading */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-4 leading-tight">
          <span className="block text-2xl sm:text-3xl">Hi, I’m</span>{" "}
          <span className="text-[#64ffda]">Yashodip Jain</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          A passionate Full Stack Developer focused on building clean, responsive, and
          user-friendly web experiences.
        </p>
      </div>

      {/* Skills Carousel */}
      <div className="w-full max-w-5xl">
        <Carousel />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4 sm:gap-6 mt-2 w-full max-w-md">
        <a
          href="/Yashodip Jain's Resume.pdf"
          download
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md text-base sm:text-lg font-medium transition-all duration-300 hover:bg-[#64ffda]/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.4)]"
        >
          Download Resume
        </a>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md text-base sm:text-lg font-medium transition-all duration-300 hover:bg-[#64ffda]/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.4)]"
        >
          Contact Me
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default React.memo(Hero);
