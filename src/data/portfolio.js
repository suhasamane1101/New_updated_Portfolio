export const personal = {
  name: "Suhas Amane",
  firstName: "Suhas",
  lastName: "Amane",
  roles: ["Data Scientist", "Data Analyst", "AI Engineer", "ML Engineer", "Backend Developer"],
  tagline: "Aspiring Data Scientist with hands-on experience in Machine Learning, Deep Learning, and Generative AI. Skilled in Python, NLP, and building scalable data-driven applications, with a focus on solving real-world problems using intelligent systems. Currently pursuing MSc Computer Science at Karlsruhe Institute of Technology (KIT), Germany.",
  location: "Karlsruhe, Germany",
  email: "suhasamane2@gmail.com",
  portfolio: "suhasportfolio.in",
  portfolioUrl:"https://new-updated-portfolio-amber.vercel.app",
  github: "suhasamane1101",
  githubUrl: "https://github.com/suhasamane1101",
  linkedin: "suhas-amane",
  linkedinUrl: "https://www.linkedin.com/in/suhas-amane/",
  cvUrl: "https://drive.google.com/file/d/1eIz-O0RZNnRLMuH5gpD3FpXl60ASiJgH/view?usp=drive_link",
};

export const education = [
  {
    id: 1,
    degree: "Master of Science — Computer Science",
    institution: "Karlsruhe Institute of Technology (KIT)",
    period: "April 2026 – Present",
    location: "Karlsruhe, Germany",
    gpa: null,
    current: true,
  },
  {
    id: 2,
    degree: "Bachelor of Technology — Computer Science",
    institution: "Punyashlok Ahilyadevi Holkar Solapur University",
    period: "July 2021 – June 2025",
    location: "Solapur, India",
    gpa: "9.04 / 10 (German: 1.48)",
    current: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Gemburg Pvt. Ltd.",
    location: "Solapur, Maharashtra, India",
    period: "Feb 2025 – May 2025",
    points: [
      "Project — Learnomic: Worked on an educational learning platform as a Python backend developer.",
      "Developed and maintained backend functionalities using Python.",
      "Handled AI and Machine Learning related components within the project.",
    ],
    tags: ["Python", "AI/ML", "Backend"],
  },
  {
    id: 2,
    role: "Jr. Data Analyst Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    period: "May 2024 – Aug 2024",
    points: [
      "Worked with MySQL, Power BI, and Python for data analysis and visualization tasks.",
      "Built ML models using Machine Learning and Deep Learning algorithms.",
      "Gained hands-on experience in real-world data handling and analytics workflows.",
    ],
    tags: ["Power BI", "Python", "MySQL", "ML"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Health Risk Prediction Web App",
    subtitle: "Deep Learning · Computer Vision",
    description:
      "Flask-based web app to predict obesity, malnourishment, and metabolic risks using body measurements via MediaPipe pose estimation. Real-time body analysis pipeline.",
    tech: ["Python", "Flask", "TensorFlow", "OpenCV", "MediaPipe"],
    codeUrl: "https://github.com/suhasamane1101",
    liveUrl: null,
    featured: true,
    span: "large",
  },
  {
    id: 2,
    title: "Predictive Maintenance System",
    subtitle: "Machine Learning · Data Analysis",
    description:
      "Developed ML models to predict industrial equipment failure using sensor data. Improved uptime with early detection using Random Forest on time-series sensor streams.",
    tech: ["Python", "Random Forest", "Pandas", "Flask"],
    codeUrl: "https://github.com/suhasamane1101/Builtup_predictive_Analysis.git",
    liveUrl: "https://render-demo-builtup.onrender.com",
    featured: false,
    span: "small",
  },
  {
    id: 3,
    title: "PDF Query RAG System",
    subtitle: "LLM · NLP · GenAI",
    description:
      "Built a Retrieval-Augmented Generation system to query PDFs using embeddings and a vector database. Enables semantic search and intelligent Q&A over documents.",
    tech: ["LangChain", "AstraDB", "Python", "Hugging Face"],
    codeUrl: "https://github.com/suhasamane1101",
    liveUrl: null,
    featured: true,
    span: "small",
  },
  {
    id: 4,
    title: "Next Word Prediction (LSTM & GRU)",
    subtitle: "Deep Learning · NLP",
    description:
      "Implemented LSTM and GRU models with a Streamlit interface for real-time next-word prediction. Trained on custom corpus with attention to sequence modeling.",
    tech: ["Python", "TensorFlow", "Streamlit", "LSTM", "GRU"],
    codeUrl: "https://github.com/suhasamane1101",
    liveUrl: null,
    featured: false,
    span: "small",
  },
  {
    id: 5,
    title: "Multi-Language Invoice Extractor",
    subtitle: "GenAI · LLM",
    description:
      "End-to-end invoice extractor using Gemini Pro LLM. Supports multiple languages, OCR integration, and structured data extraction from invoice images.",
    tech: ["Python", "Gemini Pro", "Streamlit", "OCR"],
    codeUrl: "https://github.com/suhasamane1101/Image_Extractor_new.git",
    liveUrl: "https://imageextractornew-c2ml7cnogesgxahxqs3md9.streamlit.app/",
    featured: false,
    span: "small",
  },
  {
    id: 6,
    title: "Power BI Insurance Dashboard",
    subtitle: "Data Visualization · Analytics",
    description:
      "Built interactive dashboards with KPIs, trends, and drill-through analysis for insurance data. Connected to MSSQL with dynamic slicers and executive-level reporting.",
    tech: ["Power BI", "MSSQL", "DAX", "Data Modeling"],
    codeUrl: null,
    liveUrl: null,
    featured: false,
    span: "small",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "C", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
  { category: "ML / AI", items: ["TensorFlow", "Keras", "scikit-learn", "spaCy", "NLTK", "Transformers", "LangChain"] },
  { category: "Web & Backend", items: ["Flask", "Django", "Node.js", "Streamlit"] },
  { category: "Data & BI", items: ["Power BI", "Tableau", "Excel", "Pandas", "NumPy"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB", "Faiss", "AstraDB", "Snowflake"] },
  { category: "Cloud & DevOps", items: ["AWS EC2", "Azure", "Docker", "Vercel", "Render", "Git"] },
  { category: "MLOps & GenAI", items: ["MLflow", "BentoML", "Ollama", "Hugging Face", "LLMs", "RAG"] },
];

export const certifications = [
  { name: "Complete Generative AI Course with LangChain & HuggingFace", issuer: "Udemy", date: "Mar 2026" },
  { name: "IELTS Academic (IDP)", issuer: "IDP", date: "2024", note: "CEFR Level B2" },
];

export const languages = [
  { name: "English", level: "Professional (CEFR B2)", pct: 85 },
  { name: "Hindi", level: "Full Professional", pct: 95 },
  { name: "Marathi", level: "Full Professional", pct: 95 },
  { name: "German", level: "Elementary", pct: 25 },
];

;
