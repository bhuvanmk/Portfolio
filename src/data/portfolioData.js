// Centralized Data Store for Bhuvan MB Portfolio
// Fully synchronized with Bhuvan MB's official resume & certificates.

export const defaultPersonalInfo = {
  name: "Bhuvan MB",
  degree: "B.E. in Computer Science",
  cgpa: "8.5 / 10.0",
  college: "Yenepoya Institute of Technology",
  usn: "4DM22CS027",
  location: "Bhadravathi, Shivamogga, Karnataka – 577301",
  primaryRole: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Java Developer",
    "Python Developer",
    "AI Application Developer"
  ],
  status: "Open to Software Development Opportunities",
  bio: "Aspiring Full Stack Developer skilled in Python and Java, focused on building scalable and efficient web applications. B.E. Computer Science graduate (CGPA 8.5) with experience in React, Spring Boot, FastAPI, LangChain, and Applied AI.",
  
  linkedin: "https://www.linkedin.com/in/bhuvan-mb/",
  github: "https://github.com/bhuvanmk",
  email: "bhuvanmb713@gmail.com",
  phone: "+91-8618877235",
  resumeUrl: "https://drive.google.com/file/d/1p9Vw5dIBkFGJ2cd_cwc88tcsG1O1vZWj/view?usp=drivesdk",
  profileImage: "https://lh3.googleusercontent.com/d/1K8ypU1C18VwCEwE0DKzJvcZGHFTcCsxA",

  metrics: [
    { label: "Degree", value: "B.E. Computer Science (CGPA: 8.5)" },
    { label: "Specialization", value: "Full-Stack + AI Systems" },
    { label: "Core Languages", value: "Java · Python · JavaScript · SQL" },
    { label: "Availability", value: "Immediate / Open to Hire" }
  ]
};

export const defaultSkillsData = {
  "Programming Languages": [
    { name: "Java", level: "Core & Enterprise", icon: "java" },
    { name: "Python", level: "FastAPI / Streamlit / AI", icon: "python" },
    { name: "JavaScript", level: "ES6+ / Modern", icon: "js" },
    { name: "C", level: "Foundational", icon: "c" },
    { name: "SQL", level: "Relational Queries & Indexing", icon: "sql" }
  ],
  "Frontend Development": [
    { name: "React.js", level: "SPA & Hooks", icon: "react" },
    { name: "HTML5 & CSS3", level: "Responsive Layouts", icon: "html" },
    { name: "Tailwind CSS", level: "Utility Styling", icon: "css" },
    { name: "React Icons", level: "UI Iconography", icon: "react" }
  ],
  "Backend & Frameworks": [
    { name: "Java Spring Boot", level: "Security / JWT / REST", icon: "spring" },
    { name: "FastAPI", level: "Python REST Microservices", icon: "flask" },
    { name: "Flask", level: "Python Microservices", icon: "flask" },
    { name: "Spring Security & JWT", level: "Auth & Encryption", icon: "spring" }
  ],
  "Database & Payments": [
    { name: "MySQL", level: "Normalized Schemas & Indexing", icon: "mysql" },
    { name: "Razorpay Gateway", level: "Payment Signature Verification", icon: "db" }
  ],
  "AI, ML & NLP": [
    { name: "LangChain & RAG", level: "Vector QA & Embeddings", icon: "ai" },
    { name: "Prompt Engineering", level: "LLM Context Optimization", icon: "ai" },
    { name: "FAISS Vector DB", level: "Semantic Search Index", icon: "ai" },
    { name: "Hugging Face Transformers", level: "NLP & Language Models", icon: "ai" },
    { name: "Scikit-Learn", level: "ML Performance Predictors", icon: "ai" },
    { name: "TF-IDF & Cosine Similarity", level: "Matching Algorithms", icon: "ai" }
  ],
  "Developer Tools & Libraries": [
    { name: "Python All-in-One Libraries", level: "Pandas / NumPy / Scikit / Matplotlib", icon: "python" },
    { name: "Git & GitHub", level: "Version Control & Repos", icon: "git" },
    { name: "VS Code", level: "Primary Development IDE", icon: "vscode" },
    { name: "Kali Linux", level: "Security Environment", icon: "linux" }
  ]
};

export const defaultProjectsData = [
  {
    id: "resume-analyzer",
    title: "AI-Powered Resume Analyzer and Enhancer",
    tagline: "NLP & Transformer-driven ATS compatibility scoring engine",
    category: "AI / NLP + Streamlit",
    whyItMatters: "Architected an intelligent Resume Analyzer powered by NLP and Hugging Face Transformer models to boost ATS compatibility.",
    description: "An interactive Streamlit web application that parses resumes, extracts technical skills, applies TF-IDF and cosine similarity techniques to match candidate skills against target job descriptions, and delivers instant AI-driven content refinements.",
    stack: ["Python", "Streamlit", "NLP", "Hugging Face Transformers", "Pandas", "Regex", "TF-IDF / Cosine Similarity"],
    highlights: [
      "Architected an intelligent Resume Analyzer with auto-enhancement features powered by NLP and Hugging Face Transformer models.",
      "Applied TF-IDF and cosine similarity techniques to match candidate skills against job descriptions for precise relevance scoring.",
      "Boosted ATS compatibility by surfacing targeted keyword recommendations and tailored optimization strategies for higher rankings.",
      "Launched an interactive Streamlit web application delivering instant resume insights and AI-driven content refinements to users."
    ],
    architecture: {
      client: "Streamlit interactive web dashboard for instant resume uploading & score visualization",
      nlpPipeline: "Regex text extractor + Hugging Face Transformer models for entity tagging",
      matchingEngine: "TF-IDF Vectorizer + Cosine Similarity scoring matrix against target job specs",
      insights: "Actionable keyword recommendations engine to optimize ATS ranking"
    },
    github: "https://github.com/bhuvanmk/Ai-Powered-Resume-Analyzer-and-Enhancer",
    liveDemo: "ADD_LIVE_DEMO_URL",
    featured: true
  },
  {
    id: "ecommerce-ai-sales",
    title: "E-Commerce Platform & AI Sales Assistant",
    tagline: "Full-stack Java Spring Boot store with RAG-based AI sales advisor & Razorpay",
    category: "Full-Stack + AI",
    whyItMatters: "Combines robust full-stack transaction management with an AI sales assistant for instant product recommendations and automated invoicing.",
    description: "A production-grade e-commerce application built with Java Spring Boot, React, and MySQL. Features Spring Security JWT auth, an AI sales assistant powered by FastAPI, LangChain, FAISS, and RAG, Razorpay payment gateway integration, and automated OpenPDF invoice generation.",
    stack: ["Java", "Spring Boot", "Spring Security", "React", "Python", "FastAPI", "LangChain", "FAISS", "RAG", "MySQL", "JWT", "Razorpay"],
    highlights: [
      "Developed a full-stack e-commerce platform using Java, Spring Boot, React, and MySQL, supporting product browsing, cart, orders, reviews, and admin management.",
      "Implemented secure authentication using Spring Security, JWT, BCrypt, refresh tokens, and OTP-based email verification.",
      "Built an AI-powered sales assistant using Python, FastAPI, LangChain, FAISS, and RAG for semantic product recommendations and FAQ support.",
      "Integrated Razorpay Payment Gateway with secure payment signature verification and automated PDF invoice generation using OpenPDF.",
      "Designed a normalized MySQL database with relational tables, foreign keys, and indexes for users, products, orders, payments, and authentication data."
    ],
    architecture: {
      client: "React SPA with product catalog, cart management, and AI Sales Assistant chat widget",
      backend: "Spring Boot REST service with Spring Security & JWT token authentication",
      aiAssistant: "FastAPI + LangChain + FAISS RAG vector store for product semantic search",
      payments: "Razorpay signature verification + OpenPDF automated receipt generator",
      database: "Normalized MySQL schema storing orders, accounts, and payments"
    },
    github: "https://github.com/bhuvanmk",
    liveDemo: "ADD_LIVE_DEMO_URL",
    featured: true
  },
  {
    id: "academic-iq",
    title: "Academic IQ — AI Academic Management System",
    tagline: "Role-based educational portal with Scikit-learn predictive performance analytics",
    category: "Full-Stack + Machine Learning",
    whyItMatters: "Leverages machine learning to predict student performance, identify at-risk students, and automate academic workflows.",
    description: "An AI-powered academic management portal with role-based dashboards for Admin, Teacher, and Student. Integrates FastAPI backend with Scikit-learn models to predict academic trajectories, generate analytics dashboards, and export automated PDF reports.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "FastAPI", "Python", "MySQL", "Scikit-Learn"],
    highlights: [
      "Developed a full-stack AI-powered academic management system with role-based dashboards for Admin, Teacher, and Student.",
      "Built responsive frontend interfaces using React.js and Tailwind CSS, integrating with FastAPI backend for seamless real-time data synchronization.",
      "Implemented JWT-based authentication, role-based access control, secure password hashing, and MySQL database.",
      "Integrated Scikit-learn models to predict student performance, identify at-risk students, and generate AI-driven recommendations with interactive analytics dashboards and PDF report generation."
    ],
    architecture: {
      client: "React.js + Tailwind CSS role-aware dashboards (Admin / Teacher / Student)",
      backend: "FastAPI REST microservices with JWT authentication & password hashing",
      mlModels: "Scikit-Learn regression & classification models for student risk prediction",
      database: "MySQL schema storing courses, attendance, grades, and report metrics"
    },
    github: "https://github.com/bhuvanmk",
    liveDemo: "ADD_LIVE_DEMO_URL",
    featured: true
  },
  {
    id: "langchain-pdf-rag",
    title: "LangChain Multiple PDF Reader (RAG)",
    tagline: "Context-aware QA over multi-page PDF documents with zero hallucination",
    category: "AI / Retrieval-Augmented Generation",
    whyItMatters: "Eliminates manual search across 100+ page technical manuals by enabling instant semantic document search.",
    description: "A Retrieval-Augmented Generation (RAG) platform that enables natural language interrogation of multiple PDF files, delivering accurate, context-bound answers backed by explicit source page citations.",
    stack: ["Python", "LangChain", "FAISS", "Hugging Face", "Vector DB"],
    highlights: [
      "Implemented recursive text chunking and overlap strategies for document preprocessing.",
      "Generated dense vector embeddings using Hugging Face transformers indexed in FAISS.",
      "Built context-aware prompt pipeline yielding concise answers with line & page references."
    ],
    architecture: {
      client: "Clean query input & interactive citation card drawer",
      ingestion: "PyPDF loader + RecursiveCharacterTextSplitter",
      vectorStore: "FAISS index for high-speed cosine similarity lookup",
      llmPipeline: "LangChain RetrievalQA chain bound strictly to context window"
    },
    github: "https://github.com/bhuvanmk/Multiple-PDF-reader",
    liveDemo: "ADD_LIVE_DEMO_URL",
    featured: true
  },
  {
    id: "upi-fraud-detection",
    title: "AI-Powered UPI Fraud Transaction Detection",
    tagline: "Real-time payment transaction risk scoring and anomaly detection",
    category: "Machine Learning + Backend",
    whyItMatters: "Protects digital transaction flows by flagging suspicious transaction behavior prior to settlement.",
    description: "A real-time financial surveillance dashboard that leverages machine learning models to detect fraudulent UPI transaction patterns based on transaction velocity, geographical mismatch, and behavioral anomalies.",
    stack: ["Python", "Scikit-Learn", "Machine Learning", "Flask", "MySQL", "React.js"],
    highlights: [
      "Trained classification models on synthetic payment dataset identifying fraud vectors.",
      "Developed Flask REST API service returning risk scores (Low, Medium, High) in <200ms.",
      "Constructed live React monitoring dashboard with instant transaction flag alerts."
    ],
    architecture: {
      client: "React live monitoring dashboard with real-time risk indicator badges",
      apiLayer: "Flask microservice handling transaction scoring payloads",
      mlModel: "RandomForest / XGBoost classifier trained on historical fraud vectors",
      storage: "MySQL schema recording transaction logs and flagged account IDs"
    },
    github: "https://github.com/bhuvanmk/Ai-powered-UPI-froud-transaction-detection-",
    liveDemo: "ADD_LIVE_DEMO_URL",
    featured: true
  },
  {
    id: "online-code-interface",
    title: "Online Code Interface (Open Code IDE)",
    tagline: "Web-based real-time code editor and multi-language execution workspace",
    category: "Full-Stack + Developer Tools",
    whyItMatters: "Empowers developers to write, compile, and test code snippets in real time directly within the browser.",
    description: "An interactive online code development environment featuring syntax highlighting, multi-language support (Java, Python, C++, JavaScript), code execution sandbox, and live console output streaming.",
    stack: ["React.js", "Node.js", "JavaScript", "REST API", "Docker / Sandbox"],
    highlights: [
      "Integrated code editor interface with line numbering and syntax formatting.",
      "Built backend code execution pipeline evaluating snippets securely against language runtimes.",
      "Constructed responsive IDE layout with customizable themes and output tab panel."
    ],
    architecture: {
      client: "React IDE workspace with code editor & output console",
      backend: "Node.js / Express API dispatching execution requests",
      executionSandbox: "Isolated container runner evaluating Java/Python/CPP snippets",
      storage: "Session storage for code snippets & draft saves"
    },
    github: "https://github.com/bhuvanmk/Online-Code-Interface",
    liveDemo: "ADD_LIVE_DEMO_URL",
    featured: true
  }
];

export const defaultExperienceData = [
  {
    id: "exp-vrishanksoft",
    isPlaceholder: false,
    title: "Software Engineering Intern",
    company: "Vrishanksoft OPC Pvt. Ltd.",
    location: "Chikodi, Karnataka, India",
    period: "Feb 02, 2026 – May 10, 2026",
    mentor: "Mr. Santosh Khot (Senior Tech Lead)",
    score: "98 / 100 Marks (Good Performance)",
    bullets: [
      "Carried out 14-week intensive software engineering internship at Vrishanksoft OPC Pvt. Ltd. under USN 4DM22CS027.",
      "Demonstrated outstanding technical proficiency, teamwork, and problem-solving, earning a 98/100 performance score.",
      "Contributed to full-stack application development, REST API implementations, and software testing objectives."
    ]
  }
];

export const defaultEducationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    field: "Computer Science and Engineering",
    institution: "Yenepoya Institute of Technology",
    location: "Moodbidri, India",
    period: "2022 – 2026",
    cgpa: "8.5 / 10.0 CGPA",
    keyCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (SQL)",
      "Web Technologies & React.js",
      "Operating Systems & Computer Networks",
      "Software Engineering & System Design",
      "Artificial Intelligence & Machine Learning"
    ]
  },
  {
    id: "edu-2",
    degree: "12th Grade – PCM",
    field: "Physics, Chemistry, Mathematics",
    institution: "BGS PU College",
    location: "Shivamogga, Karnataka",
    period: "2020 – 2022",
    cgpa: "78% Percentage",
    keyCoursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    id: "edu-3",
    degree: "10th Grade – State Board",
    field: "General Secondary Education",
    institution: "St. Mary's English High School",
    location: "Shivamogga, Karnataka",
    period: "2019 – 2020",
    cgpa: "83% Percentage",
    keyCoursework: ["Mathematics", "Science", "Social Science", "Languages"]
  }
];

export const defaultCertificationsData = [
  {
    id: "cert-ml-python",
    title: "Machine Learning in Python",
    issuer: "Certified Professional Credential",
    year: "2025",
    verificationUrl: "https://drive.google.com/file/d/1UUqw3iHVP7WYPVLtQQK6zL1vzmu2SA_v/view?usp=drivesdk",
    description: "Specialized certification covering supervised and unsupervised machine learning algorithms, model evaluation, and scikit-learn implementations in Python.",
    isPlaceholder: false
  },
  {
    id: "cert-prompt-engineering",
    title: "Prompt Engineering",
    issuer: "AI & LLM Professional Certification",
    year: "2025",
    verificationUrl: "https://drive.google.com/file/d/1KmgT98ON5i-Lxf8dInO_BQiB4KXCKVwS/view?usp=drivesdk",
    description: "Advanced certification in LLM prompt design, context optimization, zero/few-shot prompting techniques, and AI model orchestration.",
    isPlaceholder: false
  },
  {
    id: "cert-python-datascience",
    title: "Python for Data Science",
    issuer: "Data Science & Analytics Credential",
    year: "2025",
    verificationUrl: "https://drive.google.com/file/d/1Jk8-zHCcelroWjB_e4Es_QLU0WbonFQA/view?usp=drivesdk",
    description: "Professional certification in data analysis, data manipulation, visualization libraries, and statistical modeling with Python.",
    isPlaceholder: false
  },
  {
    id: "cert-python-all-in-one",
    title: "Python All-in-One Libraries",
    issuer: "Python Ecosystem Certification",
    year: "2025",
    verificationUrl: "https://drive.google.com/file/d/12i9mNKa2JXP8salHfKJvZSpTbXKmNneD/view?usp=drivesdk",
    description: "Comprehensive certification covering Python core libraries, NumPy, Pandas, Scikit-Learn, Matplotlib, and web scraping utilities.",
    isPlaceholder: false
  }
];

export const defaultAchievementsData = [
  {
    id: "ach-1",
    title: "National AI/ML Hackathon 2025 Participant",
    issuer: "National AI/ML Hackathon",
    year: "2025",
    description: "Competed in a national AI/ML hackathon, conceptualizing and deploying machine learning solutions to address real-world challenges under strict time constraints.",
    isPlaceholder: false
  },
  {
    id: "ach-2",
    title: "Vrishanksoft Internship Excellence Award",
    issuer: "Vrishanksoft OPC Pvt. Ltd.",
    year: "2026",
    description: "Awarded 98/100 score for technical regularity, problem solving, and full-stack software development contributions.",
    isPlaceholder: false
  }
];

export const defaultCodingProfilesData = [
  {
    platform: "GitHub",
    handle: "bhuvanmk",
    url: "https://github.com/bhuvanmk",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    handle: "bhuvan-mb",
    url: "https://www.linkedin.com/in/bhuvan-mb/",
    icon: "linkedin"
  },
  {
    platform: "LeetCode",
    handle: "Bhuvan MB",
    url: "https://github.com/bhuvanmk",
    icon: "leetcode"
  },
  {
    platform: "HackerRank",
    handle: "Bhuvan MB",
    url: "https://github.com/bhuvanmk",
    icon: "hackerrank"
  },
  {
    platform: "GeeksforGeeks",
    handle: "Bhuvan MB",
    url: "https://github.com/bhuvanmk",
    icon: "gfg"
  }
];

// Helper functions for localStorage persistence
export const getStoredData = (key, fallback) => {
  try {
    const stored = localStorage.getItem(`portfolio_${key}`);
    return stored ? JSON.parse(stored) : fallback;
  } catch (e) {
    return fallback;
  }
};

export const saveStoredData = (key, data) => {
  try {
    localStorage.setItem(`portfolio_${key}`, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
};

// Always use exact updated values
export const personalInfo = defaultPersonalInfo;
export const skillsData = defaultSkillsData;
export const projectsData = defaultProjectsData;
export const experienceData = defaultExperienceData;
export const educationData = defaultEducationData;
export const certificationsData = defaultCertificationsData;
export const achievementsData = defaultAchievementsData;
export const codingProfilesData = defaultCodingProfilesData;
