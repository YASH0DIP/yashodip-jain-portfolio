import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App(): React.ReactElement {
  return (
    <div className="font-inter text-gray-400 flex flex-col min-h-screen bg-[#0a192f] scroll-smooth px-4">
      <Header />
      <main className="px-4 sm:px-8 md:px-16 lg:px-20 pt-10 grow">
        <Hero />
        <About />
        <Education />
        <Projects />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
