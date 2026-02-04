export const projectsData = [
  {
    id: 1,
    name: "Autonomous AI Trading Agent",
    description:
      "Engineered an autonomous algorithmic trading system that analyzes financial time-series data using LSTM neural networks to generate predictive buy and sell signals. Developed a FastAPI backend providing REST APIs with JWT authentication, real-time market data ingestion, and automated trade execution workflows. Applied risk management strategies including position sizing, stop-loss logic, and paper trading for controlled performance evaluation.",
    tools: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "LSTM",
      "MongoDB",
      "Docker"
    ],
    role: "Backend & Machine Learning Developer",
    code: "https://github.com/sauravpatel2609/Autonomous-Trading-Agent",
    demo: ""
  },
  {
    id: 2,
    name: "StudyMate – AI Powered Study Management Platform",
    description:
      "Created an AI-powered question-answering system using Retrieval Augmented Generation (RAG) to deliver accurate responses from academic documents. Built a complete RAG pipeline with text chunking, embedding generation, vector storage, and contextual retrieval using ChromaDB and LangChain. Integrated JWT authentication, persistent chat history, and scalable backend APIs to support concurrent multi-user access.",
    tools: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "RAG",
      "JWT"
    ],
    role: "Backend & AI Developer",
    code: "https://github.com/sauravpatel2609/STUDYMATE",
    demo: ""
  },
  {
    id: 3,
    name: "EdTech Learning Platform",
    description:
      "Built backend REST APIs supporting course discovery, enrollment management, and user operations for an online learning platform. Implemented secure JWT-based authentication with role-based access control for student and instructor workflows. Designed scalable MongoDB schemas for courses, enrollments, and progress tracking.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs"
    ],
    role: "Backend Developer",
    code: "https://github.com/sauravpatel2609/EdTech",
    demo: ""
  },
  {
  id: 4,
  name: "VideoTube Backend Platform",
  description:
    "Developed a comprehensive backend REST API for a video-sharing platform with user authentication and content management. Implemented secure JWT-based authentication with access and refresh token mechanisms for user sessions. Designed scalable MongoDB schemas for users, videos, subscriptions, and watch history tracking with aggregation pipelines for efficient data retrieval. Integrated Cloudinary for media storage and implemented middleware for authentication and file uploads.",
  tools: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
    "Cloudinary",
    "Bcrypt",
    "Multer"
  ],
  role: "Backend Developer",
  code: "https://github.com/sauravpatel2609/videotube_backend",
  demo: ""
},
{
  id: 5,
  name: "House Price Prediction ML Application",
  description:
    "Developed a machine learning web application to predict house prices using Linear Regression on the Ames Housing dataset. Implemented data preprocessing pipelines handling missing values and feature engineering for 6 key features (living area, quality, garage, basement, bathrooms, year built). Built an interactive Streamlit UI for real-time price predictions with model trained on 1,460+ housing records achieving strong R² accuracy.",
  tools: [
    "Python",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Linear Regression"
  ],
  role: "ML Developer",
  code: "https://github.com/sauravpatel2609/house_price_predictor",
  demo: ""
}
];
