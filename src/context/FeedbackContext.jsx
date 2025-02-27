import { createContext, useContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("https://backend-portifolio-production.up.railway.app/feedbacks")
            .then((response) => response.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => console.error("Erro ao buscar feedbacks", error));
    }, []);

    return (
        <FeedbackContext.Provider value={{ feedbacks }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => useContext(FeedbackContext);