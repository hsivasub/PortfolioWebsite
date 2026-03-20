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
    title: "Project One",
    description: "A short description of what this project does and the problem it solves. Keep it to one or two sentences.",
    image: "assets/images/project1.png",
    github: "https://github.com/yourusername/project-one",
    tags: ["Python", "Machine Learning"],
    featured: true
  },
  {
    title: "Project Two",
    description: "Another short description. Highlight what makes this project interesting or what you learned building it.",
    image: "assets/images/project2.png",
    github: "https://github.com/yourusername/project-two",
    tags: ["JavaScript", "Web"]
  },
  {
    title: "Project Three",
    description: "Description of the third project. What technology stack did you use? What was the outcome?",
    image: "",
    github: "https://github.com/yourusername/project-three",
    tags: ["Python", "Data Science"]
  }
];
