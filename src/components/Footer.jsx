const Footer = () => {
    const CurrentYear = new Date().getFullYear()

    return (
        <footer>
            <div className="font-italic text-center text-sm mt-10 pt-2 border-t-2 border-orange-400 dark:text-white">
                <p>Copyright © <span>{CurrentYear}</span> Maxjannyfer Malato. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer