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

    const addFeedback = (feedback) => {
        const newFeedback = {
            ...feedback,
            id: Date.now(),
            userId: sessionStorage.getItem("currentUser"),
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
        };
        setFeedbacks([...feedbacks, newFeedback]);
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

export const useFeedback = () => useContext(FeedbackContext);