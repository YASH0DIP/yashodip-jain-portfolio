import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="font-inter text-gray-400 flex flex-col w-screen min-h-screen bg-[#0a192f] scroll-smooth">
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 grow">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
