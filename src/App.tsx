import React from "react";
// @ts-ignore App.css is loaded by the bundler and has no TypeScript declarations.
import "./App.css";


function App() {

  return (
    <div className="App">
      <header style={{ padding: "48px 24px" }}>
        <h1>Kirra Orndorff</h1>
        <p>CIS 4930 · Introduction to Data Visualization · Fall 2026</p>
      </header>

      <main style={{ padding: "0 24px" }}>

      <div className="about-me">
        <h2>About Me</h2>
          <img src={`${process.env.PUBLIC_URL}/headshot.jpeg`} alt="Kirra Orndorff" style={{ width: "200px", borderRadius: "50%" }}/>
          <p>Hi! I'm an incoming senior studying Computer Science at Florida State University. I focus on developing clean software applications, data dashboards, and automated tools. 
            Outside of technical problem solving, I am deeply passionate about outdoor exploration, hiking, and international travel.</p>
      </div>

      <div className="experience">
        <h2 className="title">Experience</h2>
          <h4 className="subtitle">Data Analytics Intern at U.S Hunger</h4>
          <p> details</p>
          <h4 className="subtitle">Project Facilitator Intern at FSU Innovation Hub</h4>
          <p> details</p>
          <h4 className="subtitle">Emerging AI Technology Intern at FSU ITS</h4>
          <p> details</p>
      </div>

      <div>
        <h2>Projects</h2>
          <p>Here are some of the projects I have worked on:</p>
      </div>

      <div>
        <h2>Campus Involvement</h2>
          <h4>FSU STARS Member</h4>
          <h4>FSU Innovators Member</h4>
          <h4>Vice President of Programming of ColorStack FSU</h4>
      </div>

      <div>
        <h2>Contact</h2>
          <p>You can reach me at <a href="mailto:kirra.orndorff@example.com">kirra.orndorff@example.com</a></p>
      </div>

      </main>
    </div>
  );
}

export default App;
