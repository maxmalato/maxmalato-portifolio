import { useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher"

const Navbar = () => {
    const [isAsideVisible, setIsAsideVisible] = useState(false)

    const toggleAside = () => {
        setIsAsideVisible(!isAsideVisible)
    }

    return (
        <header className="sticky top-8 drop-shadow-md z-10 bg-white/75 rounded-lg dark:bg-slate-700/75">
            <div className="flex justify-between items-center p-2">
                {/* Botão acessível para o menu */}
                <button
                    className="cursor-pointer hover:text-orange-400 dark:text-white"
                    onClick={toggleAside}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={isAsideVisible}
                >
                    <i className='bx bx-menu bx-md'></i>
                </button>
                <a href="#home">
                    <i class='bx bx-home-alt bx-tada-hover bx-sm dark:text-white' ></i>
                </a>
                <ThemeSwitcher />
            </div>


            {/* Navegação lateral */}
            <aside className={`z-10 fixed bg-white drop-shadow-lg p-2 rounded-md mt-2 transition-all duration-300 dark:bg-slate-700 ${isAsideVisible ? "opacity-800 translate-x-0" : "opacity-0 -translate-x-1"
                }`}
                style={{ pointerEvents: isAsideVisible ? "auto" : "none" }}>
                <nav aria-label="Menu Lateral" className="flex flex-col items-start gap-2 p-1">
                    <a href="#aboutMe" className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Sobre Mim</a>
                    <a href="#skills " className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Habilidades</a>
                    <a href="#projects" className="hover:text-orange-400 dark:text-white" onClick={() => setIsAsideVisible(false)}>Projetos</a>
                </nav>
            </aside>
        </header>
    )
}

export default Navbar