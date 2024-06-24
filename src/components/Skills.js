import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills 🎯</h2>
      <div className="skills-category">
        <h3>Languages</h3>
        <div className="skills-icons">
          <img alt="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <img alt="Kotlin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" />
          <img alt="JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <img alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <img alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <img alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
        </div>
      </div>
      <div className="skills-category">
        <h3>Frameworks and Libraries</h3>
        <div className="skills-icons">
          <img alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          <img alt="NodeJs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
          <img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          <img alt="Spring Boot" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
        </div>
      </div>
      <div className="skills-category">
        <h3>Databases</h3>
        <div className="skills-icons">
          <img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img alt="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
        </div>
      </div>

    </section>
  );
}

export default Skills;
