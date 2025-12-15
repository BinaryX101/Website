/* eslint-disable react/no-unescaped-entities */
import "./projects.css";

const projectList = [
  { icon: "./React-Logo.png", title: "This Website", subtitle: "My personal portfolio.", link: "/" },
  { icon: "./AE-Logo.png", title: "Video Editing", subtitle: "Editing videos in Adobe After Effects and Premiere Pro.", link: "/" },
  { icon: "./unity-logo.png", title: "Game Development", subtitle: "Unity projects", link: "/" },
  { icon: "./PS-Logo.png", title: "Designs", subtitle: "UI/UX posters in Adobe Photoshop", link: "/" },
  { icon: "./blender-logo.png", title: "3D Modeling", subtitle: "I like making 3D Models on blender sometimes", link: "/" },
  { icon: "", title: "empty", subtitle: "", link: "/" },
  { icon: "", title: "empty", subtitle: "empty", link: "/" },
  { icon: "", title: "empty", subtitle: "empty", link: "/" },
  { icon: "", title: "empty", subtitle: "empty", link: "/" },
];


const Projects = () => {
  return (
    <div>
      <h1 className="titles">Hobbys/projects</h1>
      <h1 className="subtitle">Below are some of the projects/hobbys that <br/> I enjoy working on</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <a href={project.link} className="card-button" key={index}>
            <div className="card-content">
              <img src={project.icon} alt={project.title + " icon"} className="card-icon-image" />
              <h2 className="card-title">{project.title}</h2>
              <p className="card-subtitle">{project.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
