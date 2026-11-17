// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Sanjeet Saini",
  initials: "SS",
  role: "Frontend Developer",
  email: "sanjeetsaini91@gmail.com",
  phone: "+91-9306949154",
  phoneHref: "tel:+919306949154",
  github: "github.com/sanjeet-saini",
  githubUrl: "https://github.com/sanjeet-saini",
  linkedin: "linkedin.com/in/sanjeet-saini-880b1827a",
  linkedinUrl: "https://www.linkedin.com/in/sanjeet-saini-880b1827a",
  location: "Bahadurgarh, Haryana",
  photo: "profilepic.jpeg",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroChips = [
  `Location: ${profile.location}`,
  "HTML | CSS | JavaScript | React | Tailwind",
  "Open for Internship",
];

export const miniCards = [
  { icon: "@", title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "☎", title: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "{ }", title: "GitHub", value: profile.github, href: profile.githubUrl },
  { icon: "◎", title: "Goal", value: "Frontend Developer Internship" },
];

export const stats = [
  { label: "Live", text: "Every project is deployed and working in the browser, not just code in a repository." },
  { label: "JavaScript", text: "Core app logic written in plain JavaScript, from canvas editing to live code preview." },
  { label: "React", text: "Component-based UI with hooks and a modern Vite workflow, like this portfolio." },
  { label: "Responsive", text: "Layouts designed to work across mobile, tablet and desktop screens." },
];

export const skills = [
  {
    icon: "🌐",
    title: "Core Frontend",
    text: "Semantic HTML, modern CSS and JavaScript — DOM manipulation, events and ES6+ logic to build interactive apps from scratch.",
    chips: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM"],
  },
  {
    icon: "⚛️",
    title: "React",
    text: "Building component-based interfaces with state, props and hooks using a modern Vite workflow — this portfolio is built in React.",
    chips: ["React.js", "Hooks", "Components", "Vite"],
  },
  {
    icon: "🎨",
    title: "Styling & UI Frameworks",
    text: "Responsive layouts with Flexbox and Grid, utility-first styling with Tailwind CSS (used in DevTracker) and component-based styling with Bootstrap.",
    chips: ["Tailwind CSS", "Bootstrap", "Flexbox & Grid", "Responsive Design"],
  },
  {
    icon: "✨",
    title: "Animation",
    text: "Smooth UI motion with CSS transitions and keyframes, and GSAP animations for interactive interfaces (used in Moodify).",
    chips: ["GSAP", "CSS Animations", "Keyframes", "Transitions"],
  },
  {
    icon: "🧰",
    title: "Tools & Workflow",
    text: "Version control, package management and debugging tools I use in every project.",
    chips: ["Git", "GitHub", "VS Code", "npm", "Chrome DevTools"],
  },
  {
    icon: "🖥️",
    title: "Currently Learning: Backend",
    text: "Expanding into server-side JavaScript — building REST APIs with Node.js and Express.js and storing data with MongoDB as hands-on practice.",
    chips: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const projects = [
  {
    title: "DevTracker",
    image: "projectimg/tracker.png",
    stack: ["React", "Tailwind CSS", "Chart.js", "Vite"],
    text: "A developer productivity dashboard that tracks daily coding time, tasks and skill growth, with charts and smart tips based on your data.",
    points: [
      "Coding timer with weekly analytics chart and task completion doughnut chart",
      "Task planner, skill tracker and live GitHub repo activity via the GitHub API",
      "Rule-based smart insights, dark/light mode and data saved in localStorage",
    ],
    link: "https://sanjeet-saini.github.io/tracker/",
  },
  {
    title: "Smart Portfolio Builder",
    image: "projectimg/smart-portfoliob.png",
    stack: ["React", "Vite", "Drag & Drop API", "localStorage"],
    text: "A no-code portfolio generator: fill in a form, see the portfolio update live, rearrange it by dragging, then export it as a ready-to-host HTML file.",
    points: [
      "Drag and drop to reorder sections and projects",
      "3 themes, 4 templates, mobile preview and zoom",
      "Export to HTML, print as CV/PDF and auto-save in the browser",
    ],
    link: "https://sanjeet-saini.github.io/portfolio_builder-/",
  },
  {
    title: "Moodify – Music Player",
    image: "projectimg/mood.png",
    stack: ["JavaScript", "GSAP", "Canvas API", "localStorage"],
    text: "A mood-based music player: type how you feel and it builds a matching playlist, with GSAP animations and mood-coloured particle effects.",
    points: [
      "Mood engine that maps your input to happy, sad, chill, gym and more",
      "Search, favourites, listening stats and remembered volume",
      "Full player controls with GSAP-animated UI and canvas particles",
    ],
    link: "https://sanjeet-saini.github.io/moodify/",
  },
  {
    title: "Wall Color Visualizer",
    image: "projectimg/wall color project.png",
    stack: ["JavaScript", "Fetch API", "JSON", "CSS"],
    text: "Preview paint colours on real room photos — pick a room, choose a colour and click any wall to see it painted instantly.",
    points: [
      "4 room types: living room, bedroom, kitchen and kids room",
      "Colour palette loaded from JSON with auto-generated shades",
      "Paint individual walls, with undo and reset",
    ],
    link: "https://sanjeet-saini.github.io/wall-color-visualization/",
  },
  {
    title: "Image Editor",
    image: "projectimg/photo editor app.png",
    stack: ["JavaScript", "Canvas API", "CSS Filters"],
    text: "A browser-based photo editor: upload an image, adjust it with live filters, rotate or flip it, and download the edited result.",
    points: [
      "Brightness, contrast, saturation, invert and blur with a live slider",
      "Rotate left/right and flip horizontally or vertically",
      "Reset all edits and save the final image via canvas",
    ],
    link: "https://sanjeet-saini.github.io/image-editor-app/",
  },
  {
    title: "Drawing App",
    image: "projectimg/drawingapp.png",
    stack: ["JavaScript", "Canvas API", "Pointer Events"],
    text: "A canvas drawing app with freehand tools and shapes that works with mouse, touch and stylus.",
    points: [
      "Pencil, brush and eraser with adjustable size and colour picker",
      "Rectangle, circle, triangle, square and hexagon with optional fill",
      "Clear the canvas or save the drawing as an image",
    ],
    link: "https://sanjeet-saini.github.io/drawing_app/",
  },
  {
    title: "Code Editor",
    image: "projectimg/code editor.png",
    stack: ["JavaScript", "iframe", "localStorage"],
    text: "A browser-based playground for writing HTML, CSS and JavaScript and seeing the result live, like a mini CodePen.",
    points: [
      "Live preview in a sandboxed iframe as you type",
      "Separate HTML, CSS and JavaScript panels with copy buttons",
      "Code auto-saved in the browser so it survives a refresh",
    ],
    link: "https://sanjeet-saini.github.io/code-editor-js/",
  },
];

export const timeline = [
  {
    meta: "Education",
    title: "Bachelor of Computer Applications (BCA)",
    text: "Indira Gandhi National Open University (IGNOU) — Pursuing, Final Semester",
    points: [
      "Focused on frontend development and practical project building",
      "Developing strong web fundamentals and logic-building ability",
    ],
  },
  {
    meta: "Education",
    title: "Senior Secondary (12th)",
    text: "Deep Chand Public School, CBSE — 2022",
    points: ["Academic foundation supporting present technical learning journey"],
  },
  {
    meta: "Hands-on",
    title: "Project-Based Learning",
    text: "I learn new tools by shipping real projects with them",
    points: [
      "React + Tailwind CSS + Chart.js in DevTracker; React 19 in Portfolio Builder",
      "GSAP animations and the Canvas API in Moodify",
    ],
  },
  {
    meta: "Languages",
    title: "Communication",
    text: "Hindi (Native), English (Professional working proficiency)",
    points: ["Comfortable discussing technical work and collaborating in a team"],
  },
];

export const strengths = [
  { icon: "🚀", title: "Ships Working Projects", text: "I take ideas all the way to a deployed, usable app — not just a design or half-finished code." },
  { icon: "🧩", title: "Problem Solving", text: "Comfortable breaking a feature into steps and writing the JavaScript logic for it myself." },
  { icon: "🔁", title: "Learns by Building", text: "I pick up new tools like React, Tailwind and GSAP by using them in real practice projects." },
  { icon: "✨", title: "Eye for UI", text: "I care about spacing, motion and responsiveness so interfaces feel polished on every screen." },
];

export const whyChips = [
  "Responsive UI",
  "Interactive JavaScript",
  "React Projects",
  "Clean Code",
  "Internship Ready",
];
