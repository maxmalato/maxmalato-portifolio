import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import FeedbackList from "./components/FeedbackList";
import ChatBot from "./components/Chatbot";
import AboutMe from "./components/AboutMe";
import HardSkill from "./components/HardSkill";
import SoftSkill from "./components/SoftSkill";

function App() {
  return (
    <main className="max-w-[1024px] mx-auto text-center px-2 lg:px-0" id="home">
      <Navbar />
      <Header />
      <SocialLinks />
      <ChatBot />

      {/* Sobre mim */}
      <AboutMe />

      {/* Hard Skills */}
      <HardSkill />

      {/* Soft Skills */}
      <SoftSkill />

      {/* Projetos */}
      <Projects />

      {/* Feedbacks */}
      <FeedbackList />

      {/* Rodapé */}
      <Footer />
    </main>
  );
}

export default App;
