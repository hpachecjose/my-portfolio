import React, { useState } from "react";
import "../assets/Main.css";
import "../assets/Responsive.css";
import Card from "./Card";
import Contact from "./Contact";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import PortfolioChatbot from './PortfolioChatbot';

const Main = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  // Função para enviar mensagem via EmailJS
  const sendMessage = (formData) => {
    emailjs
      .send(
        "service_597bl6m", // 🔹 Pegar no painel do EmailJS
        "template_4nxoaqe", // 🔹 Pegar no painel do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PC4suflzuUujuF8rQ" // 🔹 Pegar no painel do EmailJS
      )
      .then(() => {
        alert("✅ Mensagem enviada com sucesso!");
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Erro ao enviar mensagem.");
      });
  };

  return (
    <main className="main-content">
      <section className="About" id="about">
        <div>
          <div className="about-content">
            <div className="about-text">
              <div>
                <h1>
                  Olá <strong className="point-title-about">,</strong>
                </h1>
                <p>Sou Henrique, Programador e Desenvolvedor Web.</p>
              </div>
              <button
                id="btn-projects"
                onClick={() => handleScroll("projects")}
              >
                Obter um projeto
              </button>
              <button id="btn-contact" onClick={() => handleScroll("contact")}>
                Entre em contato
              </button>
            </div>
            {/* <div className="about-image">
              <div className="about-image-container">
                <img
                  src="/images/foto_henrique.png"
                  alt="Henrique"
                  className="about-photo"
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="container-about-text">
          <p className="about-text-footer">
            Sou um Desenvolvedor Fullstack apaixonado por transformar ideias em
            soluções robustas e escaláveis. Eu projeto e construo aplicativos de
            software usando diversas tecnologias em toda a pilha de
            desenvolvimento. Também me especializei em Redes de Computadores, garantindo experiências digitais seguras e
            eficientes. Como profissional e autodidata, canalizo a curiosidade
            para o aprendizado e a inovação, criando tecnologias que impactam
            positivamente a vida das pessoas.
          </p>
        </div>

        <div className="skills">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Python</p>
          <p>C++</p>
          <p>React</p>
          <p>Node.js</p>
          <p>Redes de Computadores</p>
        </div>
      </section>
      <section className="Projects" id="projects">
        <div className="Container-Cards">
          <Card
            title="InfoGestor"
            description="Software de gerenciamento de empresa de informática"
            imageUrl="https://raw.githubusercontent.com/hpachecjose/InfoGestor/refs/heads/main/Frontend/src/assets/2.png"
            buttonText="Ver projeto"
            projectLink="https://github.com/hpachecjose/InfoGestor"
          />
          <Card
            title="Tree Nexus API"
            description="A API Tree Nexus pesquisa produtos categorizados usando árvore binária."
            imageUrl="https://raw.githubusercontent.com/hpachecjose/tree_nexus_api/refs/heads/main/TREE%20NEXUS-1.png"
            buttonText="Ver projeto"
            projectLink="https://github.com/hpachecjose/tree_nexus_api"
          />
          <Card
            title="Pulse Track"
            description="App Android para registrar atividades físicas e monitorar progresso."
            imageUrl="https://raw.githubusercontent.com/hpachecjose/App-Pulse-Track/refs/heads/main/2.png"
            buttonText="Ver projeto"
            projectLink="https://github.com/hpachecjose/App-Pulse-Track"
          />
        </div>
      </section>
      <section className="Contact" id="contact">
        <Contact sendMessage={sendMessage} /> {/* 🔹 Passando a função */}
      </section>
   
      <Footer />
    </main>
  );
};

export default Main;
