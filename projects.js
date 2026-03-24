/**
 * ============================================================
 *  PROJECTS CONFIGURATION — edit this file to manage projects
 * ============================================================
 *
 * HOW TO ADD A PROJECT:
 *  1. Copy a project image into  assets/images/
 *  2. Copy one of the blocks below, fill in the details, done!
 *
 * HOW TO REMOVE A PROJECT:
 *  Simply delete (or comment out) the corresponding block.
 *
 * FIELDS:
 *  title       – Project name (shown as card heading)
 *  description – 1–2 sentence summary shown on the card
 *  image       – Path relative to this file, e.g. "assets/images/myproject.png"
 *                Use "" or omit to show a gradient placeholder instead
 *  github      – Full GitHub repo URL, e.g. "https://github.com/username/repo"
 *  tags        – Array of tech/skill strings used for the filter bar
 *  featured    – Set to true to pin the card to the top of the grid
 * ============================================================
 */

window.projects = [
  {
    title: "NYC Investment Analysis",
    description: "Analyzed NYC property sales data from 2015-2023 to identify investment opportunities and market trends.",
    image: "assets/images/nyc.jpg",
    github: "https://github.com/hsivasub/NYC-Investment-Analysis",
    tags: ["Python", "Data Analysis"]

  },
  {
    title: "Uber Rider Churn Classification",
    description: "Predicting rider churn using machine learning techniques.",
    image: "assets/images/uber.jpg",
    github: "https://github.com/hsivasub/Uber-Rider-Churn-Prediction",
    tags: ["Python", "Machine Learning"]
  },
  {
    title: "Enterprise GenAI Platform",
    description: "Built a production-grade GenAI platform with RAG, multi-step agents, and responsible AI guardrails to power an enterprise AI Financial Assistant.",
    image: "assets/images/enterprise-genai.jpg",
    github: "https://github.com/hsivasub/Enterprise-GenAI-Platform",
    tags: ["Python", "GenAI", "RAG", "Multi-step Agents", "Responsible AI", "Containerized", "Production-grade"],
    featured: true
  },
  {
    title: "Smart-Retail-Shelf-Intelligence-System",
    description: "End-to-end computer vision system for retail shelf monitoring, combining object detection, anomaly detection, and MLOps pipelines for real-time insights.",
    image: "assets/images/smart-retail.jpg",
    github: "https://github.com/hsivasub/Smart-Retail-Shelf-Intelligence-System",
    tags: ["Python", "Computer Vision", "Object Detection", "Anomaly Detection", "MLOps"],
    featured: true
  }
];
