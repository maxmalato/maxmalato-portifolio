import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://backend-portifolio-production.up.railway.app/feedbacks")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Erro ao buscar feedbacks", error));
  }, []);

  useEffect(() => {
    let userId = sessionStorage.getItem("currentUser");
    if (!userId) {
      userId = String(Date.now());
      sessionStorage.setItem("currentUser", userId);
    }
  }, []);

  // Criação de um novo feedback
  const addFeedback = (feedback) => {
    const userId = sessionStorage.getItem("currentUser");

    const newFeedback = {
      name: feedback.name,
      comment: feedback.comment,
    };

    fetch("https://backend-portifolio-production.up.railway.app/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks([...feedbacks, data]);
      })
      .catch((error) => console.error("Erro ao adicionar feedback", error));
  };

  // Edição de um feedback
  const editFeedback = (updatedFeedback) => {
    const userId = sessionStorage.getItem("currentUser");

    fetch(
      `https://backend-portifolio-production.up.railway.app/feedbacks/${updatedFeedback.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedFeedback, userId }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(
          feedbacks.map((feedback) =>
            feedback.id === data.id ? data : feedback
          )
        );
      })
      .catch((error) => console.error("Erro ao editar feedback", error));
  };

  // Deletar um feedback
  const deleteFeedback = (feedbackId) => {
    const userId = sessionStorage.getItem("currentUser");

    fetch(
      `https://backend-portifolio-production.up.railway.app/feedbacks/${feedbackId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }
    )
      .then(() => {
        setFeedbacks(
          feedbacks.filter((feedback) => feedback.id !== feedbackId)
        );
      })
      .catch((error) => console.error("Erro ao deletar feedback", error));
  };

  return (
    <FeedbackContext.Provider
      value={{ feedbacks, addFeedback, editFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

FeedbackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFeedback = () => useContext(FeedbackContext);
