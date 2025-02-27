import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-full"
        >
            {theme === "light" ? (<i class='bx bxs-moon bx-flashing-hover bx-sm' ></i>): (<i class='bx bxs-sun bx-flashing-hover bx-sm dark:text-white' ></i>)}
        </button>
    );
};

export default ThemeSwitcher;