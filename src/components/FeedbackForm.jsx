import { useState, useEffect } from "react";
import { useFeedback } from "../context/FeedbackContext";

const FeedbackForm = ({ editingFeedback, setEditingFeedback }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const { addFeedback, editFeedback } = useFeedback();

    useEffect(() => {
        if (editingFeedback) {
            setName(editingFeedback.name);
            setComment(editingFeedback.comment);
        }
    }, [editingFeedback]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingFeedback) {
            editFeedback({ ...editingFeedback, name, comment, updatedAt: new Date().toLocaleString() });
            setEditingFeedback(null);
        } else {
            const userId = sessionStorage.getItem("currentUser");
            addFeedback({ name, comment, userId });
        }
        setName("");
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 dark:bg-slate-700 dark:text-slate-100">
            <h2 className="font-bold text-3xl text-center">{editingFeedback ? "Editar Comentário" : "Adicionar Comentário"}</h2>
            <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded-lg dark:bg-slate-800 dark:border-slate-600"
                required
            />
            <textarea
                placeholder="Seu comentário"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="p-2 border rounded-lg dark:bg-slate-800 dark:border-slate-600"
                required
            />
            <button type="submit" className="p-2 rounded-lg bg-orange-600 text-white w-80 font-semibold self-center">
                {editingFeedback ? "Salvar" : "Enviar"}
            </button>
        </form>
    );
};

export default FeedbackForm;
