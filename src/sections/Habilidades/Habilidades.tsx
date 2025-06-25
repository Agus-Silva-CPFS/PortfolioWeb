import React from "react";
import "../Habilidades/Habilidades.css";

const Habilidades = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Nest",
    "MySQL",
    "Github",
    "Scrum",
    "Bootstrap",
  ];

  return (
    <section className="ctn-habilidades d-flex flex-column align-items-center">
      <h1 className="mt-5">Habilidades</h1>
      <ul className="lista-habilidades">
        {skills.map((skill) => (
          <li key={skill} className="item-habilidades">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Habilidades;