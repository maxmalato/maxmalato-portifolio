
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import FeedbackList from './components/FeedbackList';
import ChatBot from './components/Chatbot';

function App() {

  return (
    <main className='max-w-[1024px] mx-auto' id='home'>
      <Navbar />
      <Header />
      <SocialLinks />
      <ChatBot/>

      {/* Sobre mim */}
      <section className='pt-24' id='aboutMe'>
        <h1 className="font-bold text-5xl drop-shadow-md text-center lg:text-left dark:text-white">Sobre mim</h1>

        <div className="transition hover:border-orange-600 lg:border-l-4 lg:pl-4 flex flex-col gap-3 mt-5">
          <p className="indent-8 text-justify lg:indent-0 dark:text-white"><span className="text-orange-600 font-bold text-2xl">S</span>ou Maxjannyfer, mais conhecido como Max. Tenho 31 anos, sou casado com a Carol e pai do Davi. Sou um desenvolvedor web em constante evolução, focado no front-end com React, mas também explorando o back-end para ampliar minhas habilidades. Tenho experiência prática com integração de APIs e estou sempre buscando aprimorar meus conhecimentos em todo o espectro do desenvolvimento web.</p>
          <p className="indent-8 text-justify lg:indent-0 dark:text-white"><span className="text-orange-600 font-bold text-2xl">A</span>ntes de ingressar na programação, acumulei mais de seis anos de experiência como suporte técnico em TI e, atualmente, atuo como Analista de TI, oferecendo suporte sistêmico. Minha abordagem profissional é marcada pela organização, atenção aos detalhes e valorização do trabalho em equipe.</p>
          <p className="indent-8 text-justify lg:indent-0 dark:text-white"><span className="text-orange-600 font-bold text-2xl">A</span>lém da tecnologia, sou cristão e baixista. No meu tempo livre, gosto de assistir séries e filmes com minha esposa, frequentar a igreja com minha família e me aventurar no mundo dos vídeo games.</p>
        </div>
      </section>

      {/* Hard Skills */}
      <section className="mb-10 pt-24" id='skills'>
        <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-end dark:text-white">Hard Skill</h2>
        <h3 className='text-orange-600 text-lg font-semibold drop-shadow-md lg:text-right'>Habilidades tecnológicas</h3>
        <div
          className="flex flex-wrap gap-2 justify-center mt-5 lg:justify-end lg:border-r-4 lg:pr-4 transition hover:border-orange-600">
          <i className="devicon-html5-plain-wordmark colored icon-hard rounded-lg"></i>
          <i className="devicon-css3-plain-wordmark colored icon-hard rounded-lg"></i>
          <i className="devicon-javascript-plain colored icon-hard rounded-lg"></i>
          <i className="devicon-tailwindcss-original colored icon-hard rounded-lg"></i>
          <i className="devicon-bootstrap-plain-wordmark colored icon-hard rounded-lg"></i>
          <i className="devicon-react-plain colored icon-hard rounded-lg"></i>
          <i className="devicon-mongodb-plain-wordmark colored icon-hard rounded-lg"></i>
          <i className="devicon-prisma-original-wordmark icon-hard rounded-lg dark:text-white"></i>
          <i className="devicon-git-plain-wordmark colored icon-hard rounded-lg"></i>
          <i className="devicon-nodejs-plain-wordmark colored icon-hard rounded-lg"></i>
          <i className="devicon-nextjs-original-wordmark icon-hard rounded-lg dark:text-white"></i>
          <i className="devicon-mysql-plain-wordmark icon-hard rounded-lg dark:text-white"></i>
          <i className="devicon-microsoftsqlserver-plain-wordmark icon-hard dark:text-white"></i>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="mb-10">
        <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-left dark:text-slate-100">Soft Skills</h2>
        <p className="font-bold text-orange-600 text-center mb-5 tracking-wide lg:text-left">Habilidades pessoais</p>
        <div className="grid grid-cols-2 gap-4 text-center lg:flex flex-wrap lg:border-l-4 lg:pl-4 transition-colors hover:border-orange-600">
          <p className="icon-soft dark:text-slate-100">Organização</p>
          <p className="icon-soft dark:text-slate-100">Atenção a detalhes</p>
          <p className="icon-soft dark:text-slate-100">Trabalho colaborativo</p>
          <p className="icon-soft dark:text-slate-100">Resolução de problemas</p>
          <p className="icon-soft dark:text-slate-100">Capacidade analítica</p>
          <p className="icon-soft dark:text-slate-100">Comunicação com clientes</p>
          <p className="icon-soft dark:text-slate-100">Agilidade</p>
          <p className="icon-soft dark:text-slate-100">Empatia</p>
        </div>
      </section>

      {/* Projetos */}
      <section id='projects' className='pt-24'>
        <Projects />
      </section>

      {/* Feedbacks */}
      <section id='feedbacks' className='pt-24'>
        <FeedbackList />
      </section>

      {/* Rodapé */}
      <Footer />
    </main>
  );
}

export default App
