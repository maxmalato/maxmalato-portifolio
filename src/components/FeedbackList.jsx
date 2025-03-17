import { useState, useRef } from "react";
import { useFeedback } from "../context/FeedbackContext";
import FeedbackForm from "./FeedbackForm";

const FeedbackList = () => {
  const { feedbacks, deleteFeedback } = useFeedback();
  const currentUser = sessionStorage.getItem("currentUser");
  const [editingFeedback, setEditingFeedback] = useState(null);
  const formRef = useRef(null);

  const handleEdit = (feedback) => {
    if (feedback.userId === currentUser) {
      setEditingFeedback(feedback);
      formRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Você não tem permissão para editar este comentário.");
    }
  };

  const handleDelete = (feedbackId) => {
    const feedback = feedbacks.find((f) => f.id === feedbackId);
    const storedUser = sessionStorage.getItem("currentUser");

    if (!feedback || !storedUser) {
      alert("Erro ao identificar o usuário ou o comentário.");
      return;
    }

    if (feedback.userId?.toString() === storedUser.toString()) {
      deleteFeedback(feedbackId);
    } else {
      alert("Você não tem permissão para excluir este comentário.");
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Data não disponível";
    const date = new Date(dateString);
    if (isNaN(date)) return "Data inválida";

    return date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <article id="feedbacks" className="pt-24">
      <div className="dark:bg-slate-700 dark:text-slate-100">
        <h2 className="font-bold text-5xl drop-shadow-md text-center dark:text-slate-100">
          Comentários
        </h2>
        <p className="font-bold text-orange-600 text-center mb-5 tracking-wide">
          Não esqueça de deixar algum comentário!
        </p>
        <div ref={formRef} className="pt-24">
          <FeedbackForm
            editingFeedback={editingFeedback}
            setEditingFeedback={setEditingFeedback}
          />
        </div>
        {feedbacks.length === 0 ? (
          <p className="font-semibold">Nenhum feedback disponível.</p>
        ) : (
          feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="flex flex-col gap-2 border-l-2 border-orange-500 p-2 my-6"
            >
              <h3 className="text-start text-lg dark:border-slate-600">
                <span className="font-semibold">Nome: </span>
                {feedback.name}
              </h3>
              <p className="text-start">
                <span className="font-semibold">Comentário: </span>
                {feedback.comment}
              </p>
              <p className="text-start text-sm italic mt-6">
                <span className="font-semibold">Criado em:</span>{" "}
                {feedback.createdAt
                  ? formatDate(feedback.createdAt)
                  : "Data não disponível"}
              </p>
              <p className="text-start text-sm italic">
                <span className="font-semibold">Atualizado em:</span>{" "}
                {feedback.updatedAt
                  ? formatDate(feedback.updatedAt)
                  : "Nunca atualizado"}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(feedback)}
                  className="flex gap-1 items-center p-2 rounded-lg bg-orange-600 text-white"
                >
                  <i className="bx bxs-edit-alt"></i>
                  <span>Editar</span>
                </button>
                <button
                  onClick={() => handleDelete(feedback.id)}
                  className="flex gap-1 items-center p-2 rounded-lg bg-red-500  text-white"
                >
                  <i className="bx bxs-trash-alt"></i>
                  <span>Excluir</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
};

export default FeedbackList;
