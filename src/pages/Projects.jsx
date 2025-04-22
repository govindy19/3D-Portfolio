import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        MY{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-4 flex flex-col gap-3 text-slate-500">
        <p>
          I developed a 3D Portfolio project showcasing my skills, experience,
          and projects using modern web technologies. It features interactive UI
          components, smooth animations, and a vertical timeline for work
          experience. Built with ReactJS, Tailwind CSS, and
          react-vertical-timeline-component, it's designed to offer an engaging
          user experience.
        </p>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {projects.map((project) => ( 
          
          <div key={project.name} className="flex flex-col gap-4 items-center justify-center">
            <img
              src={project.iconUrl}
              alt={project.name}
              className="w-20 h-20 object-contain"
            />
            <h4 className="text-slate-500">{project.name}</h4>
            <p className="text-slate-400">{project.description}</p>
            <Link
            to = {project.link}
            target= "_blank"
            rel = "noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            >View Project</Link>
            
            
            
            
            
          </div>
          
          
          
        ))}


      </div>

    </section>
  );
};

export default Projects;
