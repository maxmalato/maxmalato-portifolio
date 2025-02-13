import loggieImage from "../assets/images/loggie.jpg"
import cadastroUsuarioImage from "../assets/images/cadastro-usuario.png"
import previsaTempoImage from "../assets/images/previsao-tempo.png"

const projects = [
    {
        title: "Gallery",
        description: "Buscar imagens e salvar fotos favoritas de forma prática e personalizada.",
        image: cadastroUsuarioImage,
        demoLink: "https://app-cadastro-usuario.netlify.app/",
        codeLink: "https://github.com/maxmalato/cadastro-usuario"
    },
    {
        title: "Loggie",
        description: "Cadastrar usuários com autenticação e acesso restrito a usuários registrados.",
        image: loggieImage,
        demoLink: "https://app-loggie.onrender.com/",
        codeLink: "https://github.com/maxmalato/app-loggie"
    },
    {
        title: "Previsão do Tempo",
        description: "Pesquise sobre sua cidade para saber como está o seu clima em tempo real.",
        image: previsaTempoImage,
        demoLink: "https://maxmalato.github.io/previsao-tempo/",
        codeLink: "https://github.com/maxmalato/previsao-tempo"
    },
    {
        title: "Cadastro de Usuário",
        description: "Cadastro de usuário com nome, e-mail e idade no banco de dados.",
        image: cadastroUsuarioImage,
        demoLink: "https://app-cadastro-usuario.netlify.app/",
        codeLink: "https://github.com/maxmalato/cadastro-usuario"
    },
];

const ProjectCard = ({ title, description, image, demoLink, codeLink }) => {
    return (
        <article className="flex flex-col pt-3 px-2 max-w-[350px] h-[500px] bg-slate-100 rounded-lg transition transform drop-shadow-lg hover:-translate-y-2 dark:bg-slate-700">
            <img className="rounded-md w-[90%] mx-4" src={image} alt={title} />
            <div className="flex flex-col h-full mt-5 gap-3">
                <div>
                    <h3 className="text-2xl text-center font-bold mt-3 dark:text-white">{title}</h3>
                    <p className="text-center mt-3 dark:text-white">{description}</p>
                </div>
                <div className="flex gap-10 justify-center dark:text-white">
                    <a href={demoLink} target="_blank" aria-label={`Acessar: ${title}`}>
                        <i class='bx bx-link-alt bx-md bx-tada-hover'></i>
                    </a>
                    <a href={codeLink} target="_blank" aria-label={`Acessar: ${title}`}>
                        <i class='bx bxl-github bx-md bx-tada-hover' ></i>
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <section className="">
            <h2 className="font-bold text-5xl drop-shadow-md text-center mb-8 dark:text-white">Meus projetos</h2>
            <div className="flex flex-wrap gap-6 justify-center lg:grid lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
