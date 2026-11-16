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
  "HTML | CSS | JavaScript | React",
  "Open for Internship",
];

export const miniCards = [
  { icon: "@", title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "☎", title: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "{ }", title: "GitHub", value: profile.github, href: profile.githubUrl },
  { icon: "◎", title: "Goal", value: "Frontend Developer Internship" },
];

export const stats = [
  { value: 15, suffix: "+", text: "Frontend projects built with real UI interaction and JavaScript functionality." },
  { label: "ES6+", text: "Comfortable with DOM manipulation, async concepts, UI behavior and reusable logic." },
  { label: "UI/UX", text: "Focused on clean design, responsiveness, transitions and smooth user experience." },
  { label: "Fast", text: "Fast learner with structured coding practice and a strong interest in modern web design." },
];

export const skills = [
  {
    icon: "🌐",
    title: "Frontend Development",
    text: "Strong foundation in semantic HTML5, forms, media handling, layout structuring and accessible UI building.",
    chips: ["HTML5", "Semantic Tags", "Forms", "Media"],
  },
  {
    icon: "🎨",
    title: "Styling & Responsive Design",
    text: "Comfortable with Flexbox, Grid, animations, transitions and responsive layouts for mobile and desktop.",
    chips: ["CSS3", "Flexbox", "Grid", "Animations"],
  },
  {
    icon: "⚙️",
    title: "JavaScript Development",
    text: "Experience with DOM manipulation, event handling, interactive UI features and async JavaScript concepts.",
    chips: ["JavaScript", "DOM", "ES6+", "Async/Await"],
  },
  {
    icon: "⚛️",
    title: "React Ecosystem",
    text: "Building component-based interfaces with hooks, routing and API integration using modern React workflow.",
    chips: ["React.js", "Hooks", "Routing", "API Integration"],
  },
  {
    icon: "🧰",
    title: "Tools & Workflow",
    text: "Using tools that improve development speed, project management and clean code collaboration.",
    chips: ["VS Code", "Git", "GitHub", "Image Editor"],
  },
  {
    icon: "🧠",
    title: "Core Fundamentals",
    text: "Basic programming and problem-solving foundation with C, C++, OOP concepts and networking basics.",
    chips: ["C", "C++", "OOP", "TCP/IP"],
  },
  {
    icon: "🖥️",
    title: "Backend Development — Currently Learning",
    text: "Building foundational knowledge of server-side JavaScript, REST API concepts, request and response handling, and database basics. I am still learning and have not yet completed a backend project.",
    chips: ["Node.js", "Express.js", "MongoDB", "REST APIs — Learning"],
  },
];

// category is used by the project filter buttons.
export const projects = [
  {
    title: "DevTracker",
    category: "JavaScript",
    image: "projectimg/tracker.png",
    text: "A smart developer productivity platform that helps track coding goals, manage projects, monitor progress, and organize daily development tasks.",
    points: [
      "Smart productivity insights and task suggestions",
      "Project tracking dashboard with analytics",
      "Modern responsive UI with smooth animations",
    ],
    link: "https://sanjeet-saini.github.io/tracker/",
  },
  {
    title: "Smart Portfolio Builder",
    category: "JavaScript",
    image: "projectimg/smart-portfoliob.png",
    text: "Interactive portfolio generator that allows users to create modern portfolio websites with live preview and customizable sections.",
    points: [
      "Drag and drop portfolio customization",
      "Live real-time portfolio preview",
      "Multiple modern themes and layouts",
    ],
    link: "https://sanjeet-saini.github.io/portfolio_builder-/",
  },
  {
    title: "Moodify - Music Player",
    category: "JavaScript",
    image: "projectimg/mood.png",
    text: "Modern music player application with interactive controls, smooth UI animations, and responsive design for all devices.",
    points: [
      "Play, pause, next and previous controls",
      "Animated progress bar and dynamic UI",
      "Responsive design for mobile and desktop",
    ],
    link: "https://sanjeet-saini.github.io/moodify/",
  },
  {
    title: "Wall Color Visualizer",
    category: "JavaScript",
    image: "projectimg/wall color project.png",
    text: "Interactive wall color preview tool with real-time color customization and smooth visual transitions.",
    points: [
      "Dynamic wall color selection system",
      "Instant real-time visual updates",
      "Clean responsive user interface",
    ],
    link: "https://sanjeet-saini.github.io/wall-color-visualization/",
  },
  {
    title: "Image Editor",
    category: "JavaScript",
    image: "projectimg/photo editor app.png",
    text: "Feature-rich image editing application with filters, adjustments, cropping tools, and real-time preview functionality.",
    points: [
      "Brightness, contrast and filter controls",
      "Crop, rotate and resize functionality",
      "Instant image preview and download support",
    ],
    link: "https://sanjeet-saini.github.io/image-editor-app/",
  },
  {
    title: "Drawing App",
    category: "JavaScript",
    image: "projectimg/drawingapp.png",
    text: "Creative browser-based drawing application with multiple brush tools, color selection, and smooth canvas interactions.",
    points: [
      "Canvas drawing with custom brush sizes",
      "Color picker and erase functionality",
      "Save and clear drawing features",
    ],
    link: "https://sanjeet-saini.github.io/drawing_app/",
  },
  {
    title: "Snake Game",
    category: "JavaScript",
    image: "projectimg/snake game.png",
    text: "Modern snake game with smooth movement mechanics, score tracking, responsive gameplay, and realistic visual styling.",
    points: [
      "Real-time keyboard controls and scoring",
      "Smooth game animations and effects",
      "Responsive gameplay for different screen sizes",
    ],
    link: "https://sanjeet-saini.github.io/snake-game/",
  },
  {
    title: "Code Editor",
    category: "JavaScript",
    image: "projectimg/code editor.png",
    text: "Browser-based live code editor for writing and previewing HTML, CSS, and JavaScript in real time.",
    points: [
      "Live preview while coding",
      "Separate HTML, CSS and JavaScript panels",
      "Clean editor interface with instant output",
    ],
    link: "https://sanjeet-saini.github.io/code-editor-js/",
  },
  {
    title: "Drink Showcase Animation",
    category: "CSS",
    image: "projectimg/coca cola.png",
    text: "Creative CSS animation project featuring a smooth rotating drink showcase with cinematic visual effects.",
    points: [
      "Pure CSS keyframe animation effects",
      "Modern 3D rotation and transitions",
      "Interactive and visually engaging design",
    ],
    link: "https://sanjeet-saini.github.io/rotating-drink/",
  },
  {
    title: "CSS Hover Effects",
    category: "CSS",
    image: "projectimg/css hover.png",
    text: "Collection of modern hover interaction effects built using advanced CSS transitions and creative animation techniques.",
    points: [
      "Interactive hover-based UI animations",
      "Smooth transitions and transform effects",
      "Modern responsive visual design",
    ],
    link: "https://sanjeet-saini.github.io/css-hover/",
  },
  {
    title: "CSS Scroll Animation",
    category: "CSS",
    image: "projectimg/css scroll.png",
    text: "Smooth scroll-triggered animation project that creates engaging user experiences with modern visual motion effects.",
    points: [
      "Scroll-based reveal animations",
      "Modern UI motion and transitions",
      "Responsive and performance optimized",
    ],
    link: "https://sanjeet-saini.github.io/scroll-animation/",
  },
  {
    title: "CSS 3D Rotation Animation",
    category: "CSS",
    image: "projectimg/css 3d animation.png",
    text: "Cinematic auto-running animation built using advanced CSS keyframes, smooth motion timing, and modern visual effects.",
    points: [
      "Pure CSS automated animation system",
      "Advanced keyframe timing techniques",
      "Modern cinematic visual presentation",
    ],
    link: "https://sanjeet-saini.github.io/css-only/",
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
    meta: "Education",
    title: "Secondary (10th)",
    text: "Nav Jyoti High School, CBSE — 2020",
    points: ["Early academic base before moving toward technology and development"],
  },
  {
    meta: "Languages",
    title: "Communication",
    text: "Hindi and English",
    points: [
      "Comfortable communicating in Hindi",
      "Continuously improving English for professional growth",
    ],
  },
];

export const strengths = [
  { icon: "🧩", title: "Logical Thinking", text: "Strong ability to understand structure, flow and problem-solving patterns." },
  { icon: "⚡", title: "Fast Learner", text: "Quick to grasp concepts and improve through consistent hands-on practice." },
  { icon: "📐", title: "Structured Coding", text: "Prefer writing neat, readable and organized code for better development workflow." },
  { icon: "✨", title: "Modern UI Passion", text: "Enjoy creating polished, animated and professional-looking interfaces." },
];

export const whyChips = [
  "Responsive UI",
  "Interactive JavaScript",
  "React Projects",
  "Clean Code",
  "Internship Ready",
];
