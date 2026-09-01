import React from "react";
// @ts-ignore
import "./App.css";

function App() {
  return (
<div className="App">
      
  {/* Hero Header */}
  <header className="hero-header">
    <h1 className="hero-name">Kirra Orndorff</h1>
    <p className="hero-tagline">
      Computer Science Senior at Florida State University focused on software engineering, cloud builds, and data systems.</p>

  <div className="hero-wave-divider">
    <svg
      viewBox="0 0 1440 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(10, 23, 18, 0)" />
          <stop offset="60%" stopColor="rgba(10, 23, 18, 0.65)" />
          <stop offset="100%" stopColor="rgba(10, 23, 18, 0.95)" />
        </linearGradient>
      </defs>

      
      <path
        d="M0,20 Q360,5 720,25 T1440,15 L1440,60 L0,60 Z"
        fill="rgba(156, 197, 165, 0.12)" />
      
      <path
        d="M0,28 Q360,45 720,18 T1440,30 L1440,60 L0,60 Z"
        fill="url(#waveFade)" />
        </svg>
      </div>
    </header>

      <main className="main-content">
       
        {/* About Me */}
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/headshot.jpeg`}alt="Kirra Orndorff" className="headshot-img" />
            <div className="about-text">
              <p>
                Hi! I'm a senior studying Computer Science at Florida State University (GPA 4.0). I specialize in architecting full-stack applications, enterprise data pipelines, and AI integrations.
              </p>
              <p>
                Outside of engineering and building software solutions, I am deeply passionate about hiking, travel, and cooking.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            
            {/* FSU ITS */}
            <div className="experience-card">
              <div>
                <div className="experience-header">
                  <h3 className="role-title">AI Emerging Technology Intern</h3>
                  <span className="experience-date">August 2026 – Present</span>
                </div>
                <p className="company-name">Florida State University ITS</p>
                <ul className="bullets">
                  <li>Supported university-wide AI product roadmaps by tracking milestones, gathering user requirements, and analyzing platform usage metrics to guide feature updates.</li>
                  <li>Drove AI tool adoption across campus by translating complex technical concepts into clear educational resources and synthesizing user feedback for leadership.</li>
                </ul>
              </div>
              <div className="media-frame">
                <img src={`${process.env.PUBLIC_URL}/images/fsuits2.jpeg`} alt="FSU ITS Workspace" />
              </div>
            </div>

            {/* FSU Innovation Hub */}
            <div className="experience-card">
              <div>
                <div className="experience-header">
                  <h3 className="role-title">Project Facilitator Intern</h3>
                  <span className="experience-date">August 2026 – Present</span>
                </div>
                <p className="company-name">FSU Innovation Hub</p>
                <ul className="bullets">
                  <li>Directed full-stack development of an AI academic hub, designing the Next.js, FastAPI, and Supabase/PostgreSQL architecture with OpenAI syllabus parsing pipelines.</li>
                  <li>Led a multidisciplinary student developer team from concept to delivery, managing Agile sprint backlogs in Jira, code reviews on GitHub, technical workshops, and product roadmaps.</li>
                </ul>
              </div>
              <div className="media-frame">
                <img src={`${process.env.PUBLIC_URL}/images/inn2.jpeg`} alt="Innovation Hub Collaboration" />
              </div>
            </div>

            {/* U.S. Hunger */}
            <div className="experience-card">
              <div>
                <div className="experience-header">
                  <h3 className="role-title">Data Analytics Intern</h3>
                  <span className="experience-date">May 2026 – August 2026</span>
                </div>
                <p className="company-name">U.S. Hunger</p>
                <ul className="bullets">
                  <li>Formulated and deployed enterprise data dashboards using Amazon QuickSight, optimizing data-cleaning pipelines to seamlessly aggregate and visualize datasets exceeding 300,000 rows.</li>
                  <li>Built and integrated an internal AWS-backed AI agent capable of parsing raw data to generate end-to-end, multi-page visual reports, streamlining executive decision-making.</li>
                </ul>
              </div>
              <div className="media-frame">
                <img src={`${process.env.PUBLIC_URL}/images/ushunger.jpeg`} alt="Data Analytics Project" />
              </div>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            
            {/* MediScribe */}
            <div className="project-card">
              <div className="project-image-box">
                <img src={`${process.env.PUBLIC_URL}/images/maker.jpeg`} alt="MediScribe AWS Project" />
              </div>
              <h3>MediScribe</h3>
              <p className="project-subtitle">AWS AI Maker Challenge · February 2026</p>
              <ul className="bullets">
                <li>Created a medical assistant using Next.js within a collaborative team, integrating Claude 4.6 Sonnet to provide real-time clinical analysis and &quot;mid-exam&quot; decision support via live transcriptions.</li>
                <li>Optimized a low-latency data pipeline utilizing Nova 2 Sonic and Amazon Transcribe for instantaneous speech-to-text, backed by Amazon S3 and SQL for secure, structured patient record management.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">Next.js</span>
                <span className="tag">Claude 4.6 Sonnet</span>
                <span className="tag">Amazon Transcribe</span>
                <span className="tag">Amazon S3</span>
                <span className="tag">SQL</span>
              </div>
            </div>

            {/* Hot Take */}
            <div className="project-card">
              <div className="project-image-box">
                <img src={`${process.env.PUBLIC_URL}/images/innovators.jpeg`} alt="Hot Take Social App" />
              </div>
              <h3>Hot Take Social Media App</h3>
              <p className="project-subtitle">FSU Innovators · August 2025 – May 2026</p>
              <ul className="bullets">
                <li>Architected a full-stack social media application utilizing React Native for a responsive mobile frontend and a Python/SQL backend to manage high-concurrency user data.</li>
                <li>Developed a robust API layer to bridge the mobile interface with a relational SQL database, optimizing data retrieval for 5+ real-time features including live voting and dynamic user feeds.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">React Native</span>
                <span className="tag">Python</span>
                <span className="tag">SQL</span>
                <span className="tag">REST APIs</span>
              </div>
            </div>

            {/* Clinic Management System */}
            <div className="project-card">
              <h3>Clinic Management System</h3>
              <p className="project-subtitle">Full-Stack Programming with C# · August 2025 – December 2025</p>
              <ul className="bullets">
                <li>Built a healthcare application using C# and .NET MAUI to manage patient health data, focusing on data integrity and structured storage to enable cross-platform mobile functionality.</li>
                <li>Engineered an intuitive mobile healthcare interface prioritizing UI/UX design and structured patient record tracking.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">C#</span>
                <span className="tag">.NET MAUI</span>
                <span className="tag">Mobile Dev</span>
                <span className="tag">UI/UX</span>
              </div>
            </div>

            {/* Concert & Venue Database */}
            <div className="project-card">
              <h3>Concert &amp; Venue Database</h3>
              <p className="project-subtitle">Theory of Databases · January 2026 – May 2026</p>
              <ul className="bullets">
                <li>Led a 4-person team to create a concert archiving platform with a MySQL backend and Flask API, featuring a responsive HTML/CSS/JavaScript frontend to visualize artist tour histories and venue data.</li>
                <li>Designed advanced query logic in Python and SQL to identify &quot;rare&quot; songs (played in &lt;10% of setlists) and unannounced surprise guests, delivering statistical performance insights.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">MySQL</span>
                <span className="tag">Python</span>
                <span className="tag">Flask</span>
                <span className="tag">JavaScript</span>
                <span className="tag">SQL Analytics</span>
              </div>
            </div>

          </div>
        </section>

       {/* Campus Involvement */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Campus Involvement</h2>
          </div>
          <div className="involvement-grid">
            
            {/* ColorStack FSU */}
            <div className="involvement-card">
              <div className="media-frame involvement-media">
                <img
                  src={`${process.env.PUBLIC_URL}/images/colorstack.png`}
                  alt="ColorStack FSU Leadership"
                />
              </div>
              <div className="involvement-content">
                <h4>Vice President of Programming</h4>
                <p className="involvement-org">ColorStack FSU · January 2026 – Present</p>
                <ul className="bullets">
                  <li>Orchestrated programming for 8+ professional and technical events, designing workshops in GitHub, AWS deployment, and technical interview preparation.</li>
                  <li>Spearheaded career readiness panels, resume teardowns, and campus engagement activities to equip computing students with actionable career strategies.</li>
                </ul>
              </div>
            </div>

            {/* STARS Alliance at FSU */}
            <div className="involvement-card">
              <div className="media-frame involvement-media">
                <img
                  src={`${process.env.PUBLIC_URL}/images/stars.jpeg`}
                  alt="STARS Alliance FSU Mentoring"
                />
              </div>
              <div className="involvement-content">
                <h4>Member</h4>
                <p className="involvement-org">STARS Alliance at FSU · January 2026 – Present</p>
                <ul className="bullets">
                  <li>Facilitated technical workshops and peer-mentoring sessions to broaden participation and diversity in computing for K-12 and undergraduate students.</li>
                  <li>Collaborated with a student leadership team to coordinate campus recruitment and professional development events.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section className="section">
          <div className="contact-box">
            <h2 className="section-title" style={{ textAlign: "center" }}>Let's Connect</h2>
            <p>
              I am seeking full-time software engineering and data development opportunities post-graduation. Feel free to reach out directly or check out my work!
            </p>
            <div className="btn-group">
              <a href="mailto:kirraorndorff@icloud.com" className="btn btn-white">
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/kirra-orndorff/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/kirraorn"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Kirra Orndorff · Florida State University</p>
      </footer>
    </div>
  );
}

export default App;