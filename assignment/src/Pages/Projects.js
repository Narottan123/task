import React, { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch("/api/projectdetail");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.log("error fetching data", err);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className="projects-container">
      <h1 className="projects-heading">
        <strong>Embark on a Journey of Innovation: Explore Our Projects</strong>
      </h1>

      <ul className="projects-list">
        {projects &&
          projects.length > 0 &&
          projects.map((val) => {
            return (
              <li key={val.id} className="project-item">
                <h2 className="project-name">{val.name}</h2>
                <p className="project-description">{val.description}</p>
                <p className="project-technologies">
                  Technologies:{val.technologies.join(",")}
                </p>
                <p className="project-year">Year:{val.year}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Projects;
