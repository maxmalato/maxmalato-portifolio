import { useFeedback } from "../context/FeedbackContext";

const FeedbackList = () => {
    const { feedbacks } = useFeedback();

    return (
        <article>
            <div className="border-t border-orange-600 p-5 rounded-lg dark:bg-slate-700 dark:text-slate-100">
                <h2 className="font-bold text-5xl drop-shadow-md text-center dark:text-slate-100">Comentários</h2>
                <p className="font-bold text-orange-600 text-center mb-5 tracking-wide">Não esqueça de deixar algum comentário!</p>
                {feedbacks.length === 0 ? (
                    <p className="font-semibold">Nenhum feedback disponível.</p>
                ) : (
                    feedbacks.map((feedback) => (
                        <div key={feedback.id} className="flex flex-col items-start border p-2 rounded-lg my-2 shadow-lg">
                            <h3>
                                <span className="font-semibold text-lg">Nome: </span>
                                {feedback.name}
                            </h3>
                            <p>
                                <span className="font-semibold text-lg">Comentário: </span>
                                {feedback.comment}
                            </p>
                            <p>
                                {feedback.createdAt}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </article>
    );
};

export default FeedbackList;