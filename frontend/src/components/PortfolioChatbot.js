import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

const PortfolioChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual do Henrique. Posso te ajudar a conhecer mais sobre as habilidades, projetos e experiências dele. O que você gostaria de saber?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const botResponses = {
    skills: {
      keywords: ['skill', 'habilidade', 'tecnologia', 'linguagem', 'framework', 'programação'],
      responses: [
        "🚀 Principais tecnologias que domino:\n• HTML & CSS\n• JavaScript & React\n• Python & C++\n• Node.js\n• Redes de Computadores\n• Git & Versionamento\n\nSou apaixonado por transformar ideias em soluções robustas! Quer saber mais sobre alguma específica?"
      ]
    },
    projects: {
      keywords: ['projeto', 'portfólio', 'trabalho', 'desenvolveu', 'criou', 'infogestor', 'tree nexus', 'pulse track'],
      responses: [
        "💼 Meus projetos em destaque:\n\n🏢 InfoGestor\n• Software de gerenciamento para empresas de informática\n• Sistema completo de gestão\n\n🌳 Tree Nexus API\n• API de pesquisa com árvore binária\n• Busca categorizada de produtos\n\n💪 Pulse Track\n• App Android para atividades físicas\n• Monitoramento de progresso\n\nTodos disponíveis no meu GitHub! Quer ver algum em detalhes?"
      ]
    },
    experience: {
      keywords: ['experiência', 'trabalhou', 'empresa', 'tempo', 'carreira', 'fullstack', 'desenvolvedor'],
      responses: [
        "💪 Sobre minha jornada:\n\n👨‍💻 Desenvolvedor Fullstack\n• Especialista em pilha completa\n• Foco em soluções escaláveis\n• Redes de Computadores\n\n🏆 Características:\n• Profissional autodidata\n• Apaixonado por inovação\n• Criador de tecnologias que impactam positivamente\n\nSempre em busca de novos desafios!"
      ]
    },
    contact: {
      keywords: ['contato', 'email', 'telefone', 'whatsapp', 'linkedin', 'github'],
      responses: [
        "📞 Vamos conversar!\n\n🐙 GitHub: github.com/hpachecjose\n💼 LinkedIn: Entre em contato pelo formulário\n✉️ Email: Use o formulário de contato do site\n📱 Redes sociais: Veja no rodapé do site\n\nEstou sempre aberto para novos projetos e oportunidades!"
      ]
    },
    pricing: {
      keywords: ['preço', 'valor', 'quanto custa', 'orçamento', 'investimento'],
      responses: [
        "💰 Valores dos serviços:\n\n🌐 Landing Page: R$ 800 - R$ 2.500\n🛒 E-commerce: R$ 3.000 - R$ 8.000\n📱 App Mobile: R$ 5.000 - R$ 15.000\n🔧 Sistema Custom: Sob consulta\n\n💡 Ofereço orçamento personalizado baseado no seu projeto. Quer conversarmos sobre sua ideia?"
      ]
    },
    default: [
      "🤔 Interessante! Posso te ajudar com informações sobre:\n• Minhas habilidades técnicas\n• Projetos do portfólio\n• Experiência profissional\n• Formas de contato\n• Valores dos serviços\n\nO que te interessa mais?",
      "✨ Estou aqui para te ajudar! Você pode perguntar sobre tecnologias, projetos anteriores, experiência ou como podemos trabalhar juntos.",
      "🎯 Que tal conhecer meus projetos ou descobrir como posso ajudar com seu próximo desenvolvimento?"
    ]
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    for (const [category, data] of Object.entries(botResponses)) {
      if (category === 'default') continue;
      
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return data.responses[Math.floor(Math.random() * data.responses.length)];
      }
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simula o tempo de digitação do bot
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Quais suas principais habilidades?",
    "Mostre seus projetos",
    "Como posso te contratar?",
    "Qual o valor dos serviços?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <Bot className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">SkyBot</h3>
            <p className="text-xs opacity-90">Online agora</p>
          </div>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="p-1 hover:bg-white/20 rounded-lg transition-colors"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'}`}>
                {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`rounded-2xl p-3 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length === 1 && (
        <div className="p-3 border-t border-gray-200 bg-white">
          <p className="text-xs text-gray-500 mb-2">Perguntas rápidas:</p>
          <div className="flex flex-wrap gap-1">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 px-2 py-1 rounded-full transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ''}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-2 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioChatbot;