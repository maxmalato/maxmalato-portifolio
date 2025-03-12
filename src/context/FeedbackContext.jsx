import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("https://backend-portifolio-production.up.railway.app/feedbacks")
            .then((response) => response.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => console.error("Erro ao buscar feedbacks", error));
    }, []);

    const addFeedback = (feedback) => {
        const newFeedback = {
            ...feedback,
            id: Date.now(),
            userId: sessionStorage.getItem("currentUser"),
            createdAt: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
            updatedAt: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        };

        console.log("Adicionando feedback:", newFeedback);

        fetch("https://backend-portifolio-production.up.railway.app/feedbacks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFeedback)
        })
            .then((response) => response.json())
            .then((data) => {
                // Garantir que o userId seja mantido corretamente
                data.userId = newFeedback.userId;
                console.log("Resposta do servidor:", data);
                setFeedbacks([...feedbacks, data]);
            })
            .catch((error) => console.error("Erro ao adicionar feedback", error));
    };

    const editFeedback = (updatedFeedback) => {
        setFeedbacks(feedbacks.map(feedback => feedback.id === updatedFeedback.id ? updatedFeedback : feedback));
    };

    const deleteFeedback = (feedbackId) => {
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== feedbackId));
    };

    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback, editFeedback, deleteFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};

FeedbackProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useFeedback = () => useContext(FeedbackContext);