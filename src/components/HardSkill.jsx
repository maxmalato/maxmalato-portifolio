const HardSkill = () => {
  return (
    <section className="mb-10 pt-24" id="skills">
      <h2 className="font-bold text-5xl drop-shadow-md text-center lg:text-end dark:text-white">
        Hard Skill
      </h2>
      <h3 className="text-orange-600 text-lg font-semibold drop-shadow-md lg:text-right">
        Habilidades tecnológicas
      </h3>
      <div className="flex flex-wrap gap-2 justify-center mt-5 lg:justify-end lg:border-r-4 lg:pr-4 transition hover:border-orange-600">
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
        <i className="devicon-supabase-plain-wordmark colored icon-hard dark: text-white"></i>
      </div>
    </section>
  );
};

export default HardSkill;
