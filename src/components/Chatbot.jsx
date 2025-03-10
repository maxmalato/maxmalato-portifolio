import { useState, useEffect, useRef } from "react";
import responses from "../responses.json"; // Verifique se esse caminho está correto!

// Função para remover acentos e normalizar texto
const normalizeText = (text) => {
  return text
    .normalize("NFD") // Separa letras de acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .toLowerCase();
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };

    const botReplyText = getBotReply(input);
    const botMessage = { text: botReplyText, user: false };

    // Adiciona as mensagens ao estado
    setMessages((prev) => [...prev, userMessage, botMessage]);

    setInput("");
  };

  const getBotReply = (input) => {
    const normalizedInput = normalizeText(input);

    console.log("Usuário digitou:", input); // Depuração
    console.log("Texto normalizado:", normalizedInput);

    if (
      normalizedInput.includes("habilidade pessoal") ||
      normalizedInput.includes("habilidades pessoais") ||
      normalizedInput.includes("soft skill") ||
      normalizedInput.includes("soft skills")
    ) {
      return `🌟 Minhas habilidades pessoais incluem: ${responses.skills.softSkills.join(
        ", "
      )}.`;
    }
    if (
      normalizedInput.includes("habilidade tecnológica") ||
      normalizedInput.includes("habilidades tecnológicas") ||
      normalizedInput.includes("habilidade tecnologica") ||
      normalizedInput.includes("habilidades tecnologicas") ||
      normalizedInput.includes("hard skills")
    ) {
      return `⚡ Minhas habilidades tecnológicas incluem: ${responses.skills.hardSkills.join(
        ", "
      )}.`;
    }
    if (
      normalizedInput.includes("experiencia") ||
      normalizedInput.includes("experiência")
    ) {
      return `💼 Minhas experiências incluem: ${responses.experience
        .map(
          (exp) =>
            `${exp.position} na ${exp.company} de (${exp.start_date} até ${exp.end_date})`
        )
        .join(" e ")}.`;
    }
    if (
      normalizedInput.includes("educacao") ||
      normalizedInput.includes("formação") ||
      normalizedInput.includes("formacao") ||
      normalizedInput.includes("educação")
    ) {
      return `🎓 Minha educação inclui: ${responses.education
        .map(
          (edu) =>
            `${edu.degree} pela ${edu.institution} (${edu.completion_year})`
        )
        .join(" e ")}.`;
    }
    if (
      normalizedInput.includes("projetos") ||
      normalizedInput.includes("projects")
    ) {
      return responses.projects
        .map(
          (project) =>
            `🔧 ${project.title}: ${project.description} - [Demo](${project.demoLink}) - [Código](${project.codeLink})`
        )
        .join("\n\n");
    }
    if (
      normalizedInput.includes("contato") ||
      normalizedInput.includes("contact")
    ) {
      return `📩 Você pode me contatar pelo e-mail: ${responses.contact}`;
    }
    if (
      normalizedInput.includes("resumo") ||
      normalizedInput.includes("summary")
    ) {
      return `📄 Resumo: ${responses.summary}`;
    }
    if (
      normalizedInput.includes("telefone") ||
      normalizedInput.includes("phone")
    ) {
      return `📞 Meus telefones são: ${responses.phone.join(", ")}`;
    }
    if (
      normalizedInput.includes("email") ||
      normalizedInput.includes("e-mail")
    ) {
      return `📧 Meu e-mail é: ${responses.email}`;
    }
    if (normalizedInput.includes("linkedin")) {
      return `🔗 Meu LinkedIn: ${responses.linkedin}`;
    }
    if (normalizedInput.includes("github")) {
      return `🔗 Meu GitHub: ${responses.github}`;
    }
    if (
      normalizedInput.includes("portfolio") ||
      normalizedInput.includes("portfólio")
    ) {
      return `🌐 Meu portfólio: ${responses.portfolio}`;
    }

    return "❌ Não entendi, poderia reformular?";
  };

  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={chatbotRef}>
      {isOpen ? (
        <div className="w-80 h-96 border rounded-lg shadow-lg bg-white flex flex-col">
          <div className="flex-1 overflow-y-scroll border-b border-gray-300 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-${msg.user ? "right" : "left"} mb-2`}
              >
                <strong>{msg.user ? "Você" : "Bot"}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Pergunte algo..."
              className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-orange-600 text-white rounded-r"
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-orange-600 text-white rounded-full shadow-lg"
        >
          <i className="bx bx-bot bx-tada bx-sm"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
