import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
const projects = [

    {
    title: "Sistema de Atendimento Documental com Chatbot",
    link:"",
    company: "Arquivos Doc",
    period: "ago 2025",
    description:
      "ste sistema integra gestão documental corporativa com um canal de atendimento inteligente baseado em chatbot, proporcionando eficiência no gerenciamento e consulta de acervos de clientes.",
    skills: ["Symfony","React", "API REST", "Tailwind", "Jwt","Machine Learning","Metodologias ágeis"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=WkM_pWYvQu0" },

  },

  {
    title: "Tropa Digital",
    link:"https://tropa-digital-mzkq.vercel.app/",
    company: "Tropa Digital",
    period: "jul 2025",
    description:
      "desafio técnico proposto pela Tropa Digital, desenvolvida com foco em performance, organização e atenção aos detalhes de layout e responsividade..",
    skills: ["Node","React", "Vite", "Tailwind", "Metodologias ágeis", "Figma"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=5YvUCG_losU" },

  },
  {
    title: "Sistema de Ponto com Reconhecimento Facial",
    link:"",
    company: "ProdutiveDoc / Arquivos Doc",
    period: "mai 2025 - jun 2025",
    description:
      "Módulo de Reconhecimento Facial para registro de ponto automatizado, seguro e em múltiplos dispositivos.",
    skills: ["Symfony", "Python", "Flask", "React", "Metodologias ágeis"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=-wyXwnRMobs" },

  },
  {
    title: "Integração Digital – ProdutiveDoc",
    link:"",
    company: "Arquivos Doc",
    period: "fev 2025 - abr 2025",
    description:
      "Fluxo 100% digital e seguro para integração de novos colaboradores, com validade jurídica ICP-Brasil.",
    skills: ["Symfony", "Mercure", "Amazon S3", "React","Machine Learning", "Metodologias ágeis"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=HlwCgIMgm9Q" },
  },
  {
    title: "Sistema de Elaboração Legislativa",
    link:"https://camposdojordao.arquivosdoc.com.br/",
    company: "Arquivos Doc",
    period: "nov 2024 - jan 2025",
    description:
      "Ferramenta para criação, edição e exportação de normas jurídicas, com controle de versões e padronização.",
    skills: ["Symfony", "Amazon S3", "API REST", "React", "Metodologias ágeis"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=liYnX7QsXaY" },
  },
  {
    title: "LogísticaDoc",
    link:"https://logistica.arquivosdoc.com.br/login",
    company: "Arquivos Doc",
    period: "jan 2024 - set 2024",
    description:
      "Controle físico e digital de documentos e caixas com QR Code, facilitando busca e rastreabilidade.",
    skills: ["API REST", "Twig", "JavaScript", "Symfony", "Amazon S3", "Metodologias ágeis"],
    media: { type: "image", url: "/log.png" },
  },
  {
    title: "ScanBox",
    link:"",
    company: "Arquivos Doc",
    period: "jan 2024 - mai 2024",
    description:
      "Cadastro automatizado de caixas com OCR e leitura de QR Code, integrando físico e digital.",
    skills: ["Python", "OpenCV", "Pygame", "Tesseract", "Metodologias ágeis"],
    media: { type: "image", url: "/scan.png" },
  },
  {
    title: "IndexDoc",
    link:"https://index.arquivosdoc.com.br/login",
    company: "PUC Minas",
    period: "ago 2023 - dez 2023",
    description:
      "Plataforma de automação documental para otimizar digitalização e Assinatura Digital ICP-Brasil de arquivos.",
    skills: ["API REST", "CSS", "Twig", "JavaScript", "Symfony", "Amazon S3", "MySQL"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=gL4eTbVvr9E" },
  },
  {
    title: "ProdutiveDoc",
    link:"https://produtive.arquivosdoc.com.br/login",
    company: "Arquivos Doc",
    period: "jan 2022 - jul 2023",
    description:
      "Sistema oficial da ArquivosDoc que centraliza gestão de documentos e produtividade de colaboradores.",
    skills: ["API REST", "Twig", "JavaScript", "Symfony", "Amazon S3", "Metodologias ágeis"],
    media: { type: "image", url: "/produtive.png" },
  },
  {
    title: "AppTechear",
    link:"",
    company: "UGB",
    period: "jan 2020 - jan 2021",
    description:
      "Sistema de chamada estudantil inteligente baseado em reconhecimento facial para automação de presença.",
    skills: ["OpenCV", "Dlib", "JavaScript", "Django", "Python"],
    media: { type: "image", url: "/app.png" },
  },

  {
    title: "ArquivosGED",
    link:"https://ged.arquivosdoc.com.br/login",
    company: "Arquivos Doc",
    period: "jan 2022 - jan 2023",
    description:
      "Sistema de gestão de documentos eletrônicos com funcionalidades de busca e organização.",
    skills: ["Symfony", "API REST", "Amazon S3", "React", "Metodologias ágeis"],
    media: { type: "youtube", url: "https://www.youtube.com/watch?v=lpgBrwGmDR8" },
  },
];

export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-lg border-b border-gray-800">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold tracking-tight">LSCruzeiro ~ </h1>
          <ul className="hidden sm:flex gap-6">
            <li><a href="#about" className="hover:text-blue-400">Sobre</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projetos</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
          </ul>
        </nav>
      </header>
<br></br><br></br>

<section className="px-6 py-10 bg-gray-950 text-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">

    {/* Hero */}
    <div className="text-center md:text-left flex flex-col justify-center">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-snug max-w-xl"
      >
        Olá, eu sou <span className="text-blue-500">Leonardo</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 italic mb-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
      >
        Desenvolvedor Full Stack e Engenheiro de Software com sólida experiência em projetos autonomos e complexos para gestão documental, automação de processos e integração com serviços públicos. Atuo em todas as etapas — da arquitetura à entrega e manutenção — aplicando metodologias ágeis, ferramentas modernas e boas práticas de engenharia de software. Tenho experiência no cumprimento de requisitos legais e arquivísticos, como e-Arq Brasil e ICP-Brasil, e invisto continuamente em estudos e pesquisas tecnológicas para aprimorar soluções e impulsionar a inovação.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <a href="#projects" className="px-6 py-2 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition">
          Ver Projetos
        </a>
        <a href="#contact" className="px-6 py-2 border border-gray-600 rounded-full hover:border-blue-500 hover:text-blue-400 transition">
          Contato
        </a>
      </motion.div>
    </div>

    {/* Competências + Formação */}
    <div className="space-y-6">
      {/* Competências */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-gray-900/60 backdrop-blur-md p-4 rounded-2xl border border-gray-800"
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Competências mais praticadas</h3>
        <p className="text-gray-300 text-sm sm:text-base">Symfony • React • Python • API REST • Amazon S3 • Machine Learning • Metodologias Ágeis</p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2">Outras Competências</h3>
        <p className="text-gray-300 text-sm sm:text-base">Node.js • Vue.js • Laravel • Django • Flask API</p>

        <p className="text-gray-400 italic mt-4 text-sm sm:text-base">
          Adapto-me rapidamente a novas linguagens e tecnologias, buscando soluções eficientes.
        </p>
      </motion.div>

      {/* Formação Acadêmica */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid sm:grid-cols-2 gap-4"
      >
        <div className="bg-gray-900/60 backdrop-blur-md p-4 rounded-2xl border border-gray-800">
          <p className="font-semibold">PUC Minas</p>
          <p className="text-gray-400 text-sm">Pós-Graduação em Engenharia de Software</p>
          <p className="text-gray-500 text-xs mt-1">mar 2022 - abr 2024</p>
        </div>
        <div className="bg-gray-900/60 backdrop-blur-md p-4 rounded-2xl border border-gray-800">
          <p className="font-semibold">UGB - Centro Universitário Geraldo Di Biase</p>
          <p className="text-gray-400 text-sm">Bacharelado em Sistemas de Informação</p>
          <p className="text-gray-500 text-xs mt-1">fev 2018 - fev 2022</p>
        </div>
      </motion.div>
    </div>

  </div>
</section>



      {/* Projetos */}
      <section id="projects" className="min-h-[80vh] px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Projetos</h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-gray-800 p-5 bg-gray-900/60 backdrop-blur-xl shadow-xl"
            >
              {/* Media */}
              {proj.media?.type === "youtube" ? (
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <iframe
                    className="w-full h-full"
                    src={proj.media.url.replace("watch?v=", "embed/")}
                    title={proj.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : proj.media?.type === "image" ? (
                <img src={proj.media.url} alt={proj.title} className="h-48 w-full object-cover rounded-xl mb-4" />
              ) : null}

              {/* Conteúdo */}
              <h4 className="font-semibold mb-1">{proj.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{proj.period} – {proj.company}</p>
              <p className="text-gray-300 text-sm mb-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {proj.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-blue-600/40 px-2 py-1 rounded-full">{skill}</span>
                ))}
              </div>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm">
                  Ver Projeto
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>


      {/* Contato */}
      <section id="contact" className="px-6 py-16 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Fale comigo</h3>
          <p className="text-gray-300 mb-6">+55 24 99957-6391</p>
          <p className="text-gray-300 mb-6">cruzeirosouza@gmail.com</p>
          <a href="mailto:cruzeirosouza@gmail.com" className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition">
            Enviar e-mail
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center border-t border-gray-800">
        <p className="text-gray-500">© {new Date().getFullYear()} Leonardo Cruzeiro</p>
      </footer>
    </div>
  );
}

