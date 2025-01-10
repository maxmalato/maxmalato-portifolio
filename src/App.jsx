
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {

  return (
    <main className='max-w-[1024px] mx-auto' id='home'>
      <Navbar />
      <Header />
      <SocialLinks />

      {/* Sobre mim */}
      <section className='pt-24' id='aboutMe'>
        <h1 className="font-bold text-5xl drop-shadow-md text-center lg:text-left dark:text-white">Sobre mim</h1>

        <div className="transition hover:border-orange-600 lg:border-l-4 lg:pl-4 flex flex-col gap-3 mt-5">
          <p className="indent-8 text-justify lg:indent-0 dark:text-white"><span className="text-orange-600 font-bold text-2xl">S</span>ou Maxjannyfer, mas todos me chamam de Max. Tenho 31 anos, sou casado com a Carol e pai do Davi. Atualmente, estou aprimorando meus conhecimentos em React e tecnologias relacionadas, além de continuar com meus projetos pessoais e aprofundar meu entendimento na área de backend.

          </p>
          <p className="indent-8 text-justify lg:indent-0 dark:text-white"><span
            className="text-orange-600 font-bold text-2xl">C</span>om mais de 6 anos de experiência como suporte técnico em TI, atualmente atuo como Analista de TI, oferecendo suporte sistêmico. Sou uma pessoa organizada, atenta aos detalhes e valorizo o trabalho em equipe.
          </p>
          <p className="indent-8 text-justify lg:indent-0 dark:text-white"><span
            className="text-orange-600 font-bold text-2xl">F</span>ora do ambiente profissional, gosto de assistir filmes e séries com minha esposa, frequentar a igreja com minha família e sou apaixonado por vídeo games.
          </p>
        </div>
      </section>

      {/* Habilidades */}
      <section className="mb-10 pt-24" id='skills'>
        <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-end mb-5 dark:text-white">Minhas Habilidades</h2>
        <div
          className="flex flex-wrap gap-2 justify-center lg:justify-end lg:border-r-4 lg:pr-4 transition hover:border-orange-600">
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

      {/* Projetos */}
      <section id='projects' className='pt-24'>
        <Projects />
      </section>

      {/* Rodapé */}
      <Footer />
    </main>
  );
}

export default App
