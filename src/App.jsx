import "./App.css";
import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "AI / Full-Stack",
    title: "Plant Disease Detection",
    description:
      "A machine-learning application for image-based tomato leaf disease classification. The project combines an ML classification workflow with a web interface, demonstrating the application of data science techniques within a practical end-to-end software solution.",

    highlights: [
      "Image preprocessing and prediction workflow",
      "Machine-learning classification pipeline",
      "API-based integration between model and application",
      "User-focused results interface",
      "Application of ML to a real-world agricultural problem",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "React",
      "API",
      "Git",
    ],

    screenshots: [
      "/screenshots/plant-disease.png",
      "/screenshots/plant-disease-result.png",
    ],

    screenshotCaption: {
      title: "Application workflow",
      text:
        "The screenshots show the main user journey: uploading a tomato leaf image and receiving a disease prediction. The interface was designed to keep the process simple for users with limited technical knowledge.",
    },

    github:
      "https://github.com/muwanguziemmanuel2404/tomatodisease",

    live: "#",
  },

  {
    number: "02",
    category: "Data / Analytics",
    title: "Product Sales Analysis",

    description:
      "An end-to-end data analysis project focused on transforming raw sales data into actionable business insights. The project explores product performance, sales trends and underlying patterns to demonstrate how data can support evidence-based decision making.",

    highlights: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Product and sales performance analysis",
      "Interactive data visualisation",
      "Business-focused interpretation of analytical findings",
    ],

    technologies: [
      "Python",
      "Pandas",
      "SQL",
      "Data Analysis",
      "Visualisation",
    ],

    screenshots: [
      "/screenshots/sales-dashboard.png",
      "/screenshots/sales-analysis.png",
    ],

    screenshotCaption: {
      title: "Sales dashboard & insights",
      text:
        "The dashboard provides a visual overview of product performance, sales trends and key business metrics. The analysis helps identify high-performing products and patterns that can support better business decisions.",
    },

    github:
      "https://github.com/muwanguziemmanuel2404/Product-Sales",

    live: "#",
  },

  {
    number: "03",
    category: "Frontend / Web Development",
    title: "Church Website",

    description:
      "A responsive web application developed for a real-world stakeholder, focusing on accessibility, clear information architecture and a consistent user experience across desktop and mobile devices.",

    highlights: [
      "Translated stakeholder requirements into a working web solution",
      "Responsive interface across desktop and mobile",
      "Structured content and intuitive navigation",
      "Real-world stakeholder-focused development",
    ],

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
    ],

    screenshots: [
      "/screenshots/church-home.png",
      "/screenshots/church-mobile.png",
    ],

    screenshotCaption: {
      title: "Responsive church website",
      text:
        "The screenshots demonstrate the website across different screen sizes, highlighting the responsive layout, navigation and presentation of key church information and services.",
    },

    github:
      "https://github.com/muwanguziemmanuel2404/church-website",

    live: "#",
  },
];

const skills = [
  "Python",
  "React.js",
  "Git & GitHub",
  "HTML & CSS",
  "Data Cleaning",
  "Exploratory Data Analysis",
  "REST APIs",
  "Pandas",
  "SQL",
  "Data Analysis",
  "Machine Learning",
  "Classification",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          Emmanuel Muwanguzi<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a
          className="nav-button"
          href="https://github.com/muwanguziemmanuel2404"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">

            <div className="availability">
              <span></span>
              MSc Data Science Graduate
            </div>

            <div className="availability">
              <span></span>
              Open to Graduate Software Engineering, Data & AI opportunities
            </div>

            <h1>
              Building data-driven
              <br />
              <span>software and intelligent solutions.</span>
            </h1>

            <p className="hero-description">
              MSc Data Science graduate with hands-on experience 
              across software development, data analysis, 
              machine learning and applied AI. I build practical 
              solutions that turn data and real-world requirements 
              into reliable, user-focused products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View my projects
                <span>↓</span>
              </a>

              <a href="#contact" className="secondary-button">
                Get in touch
              </a>
            </div>

            <div className="hero-tech">
              <span>Python</span>
              <span>SQL</span>
              <span>Machine Learning</span>
              <span>Data Analytics</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <pre>
{`const developer = {
  role: "Software Engineer",
  focus: [
    "Frontend",
    "Full-Stack",
    "AI & Data"
  ],
  mindset: "Build. Learn. Improve."
};`}
              </pre>
            </div>
          </div>
        </section>

        {/* QUICK PROFILE */}
        <section className="profile-strip">
          
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading">
            <span className="eyebrow">ABOUT ME</span>
            <h2>
              Combining software engineering, data and AI 
              <span> to solve real problems.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I’m an MSc Data Science graduate with a strong foundation in 
                software development, data analysis, machine learning and 
                applied AI.
              </p>

              <p>
                My projects demonstrate an ability to move from problem 
                definition and data exploration through to implementation and delivery 
                of working solutions. I enjoy working at the intersection of software 
                and data — building applications that are not only technically sound, 
                but useful to the people who rely on them.
              </p>

              <p>
                I’m particularly interested 
                in Graduate Software Engineering, Data, Data Engineering and AI-focused 
                opportunities where I can contribute to a technical team, solve meaningful 
                problems and continue developing my engineering and analytical skills.
              </p>
            </div>

            <div className="about-summary">
              <div>
                <span>01</span>
                <h3>Analyse</h3>
                <p>Use data, experimentation and evidence to understand complex problems.</p>
              </div>

              <div>
                <span>02</span>
                <h3>Build</h3>
                <p>Translate requirements into reliable, user-focused applications.</p>
              </div>

              <div>
                <span>03</span>
                <h3>Improve</h3>
                <p>Iterate through testing, feedback and continuous technical learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>
              Projects that demonstrate
              <span> practical experience.</span>
            </h2>
            <p>
              A quick overview of the applications and technical projects
              I've developed.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-header">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-body">

                  <div className="project-info">

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <h4>What I built</h4>

                    <ul>
                      {project.highlights.map((item) => (
                        <li key={item}>
                          <span>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="technologies">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>

                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>

                  </div>


                  <div className="screenshot-area">

                    <div className="screenshots">

                      {project.screenshots.map((image, index) => (
                        <div
                          className={`screenshot screenshot-${index + 1}`}
                          key={image}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            loading="lazy"
                          />
                        </div>
                      ))}

                    </div>

                    <div className="screenshot-caption">

                      <span>SCREENSHOT OVERVIEW</span>

                      <h4>
                        {project.screenshotCaption.title}
                      </h4>

                      <p>
                        {project.screenshotCaption.text}
                      </p>

                    </div>

                  </div>

                </div>
              </article>
            ))}
          </div>
        </section>
        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span className="eyebrow">TECHNICAL SKILLS</span>
            <h2>
              Technologies I use to
              <span> build and solve.</span>
            </h2>
          </div>

          <div className="skills-layout">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill" key={skill}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{skill}</strong>
                </div>
              ))}
            </div>

            <div className="skills-message">
              <span>MY APPROACH</span>
              <h3>
                Technology is a tool.
                <br />
                <em>The problem comes first.</em>
              </h3>
              <p>
                I focus on understanding the problem, working 
                with evidence and choosing appropriate technologies 
                to build solutions that are useful, maintainable and measurable.
              </p>
            </div>
          </div>
        </section>

        {/* RECRUITER CTA */}
        <section className="recruiter-section">
          <div>
            <span className="eyebrow">FOR RECRUITERS & HIRING TEAMS</span>

            <h2>
              Looking for someone 
              <br />
              who can work across <span> software, data and AI?</span>
            </h2>

            <p>
              I’m interested in early-career opportunities 
              across software engineering, data and applied AI. 
              I bring a combination of analytical thinking, 
              software development experience and a strong willingness 
              to learn and contribute within a technical team.
            </p>

            <div className="hero-actions">
              <a
                href="mailto:your.email@example.com"
                className="primary-button"
              >
                Contact me
              </a>

              <a
                href="/cv.pdf"
                className="secondary-button"
                target="_blank"
                rel="noreferrer"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="section-heading">
            <span className="eyebrow">CONTACT</span>
            <h2>
              Let's talk about what I can  
              <span> contribute.</span>
            </h2>

            <div>
              <span>Interested in discussing a graduate or 
                early-career opportunity in software engineering, 
                data or AI? I'd be happy to connect.
              </span>
            </div>
          </div>

          <div className="contact-grid">
            <a href="mailto:muwanguziemmanuel2404@gmail.com">
              <span>Email</span>
              muwanguziemmanuel2404@gmail.com
            </a>

            <a
              href="https://github.com/muwanguziemmanuel2404"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              github.com/muwanguziemmanuel2404
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuel-muwanguzi-511821216/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              linkedin.com/in/emmanuel-muwanguzi-511821216
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <span>
          © {new Date().getFullYear()} Emmanuel Muwanguzi
        </span>

        <span>
          Built with React
        </span>
      </footer>

    </div>
  );
}

export default App;
