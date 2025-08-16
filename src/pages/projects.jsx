/* eslint-disable react/no-unescaped-entities */
import "./projects.css";

const projectList = [
  { icon: "./React-Logo.png", title: "This Website!", subtitle: "My personal portfolio.", link: "/" },
  { icon: "./AE-Logo.png", title: "Video Editing", subtitle: "Editing videos in Adobe After Effects and Premiere Pro.", link: "/" },
  { icon: "./unity-logo.png", title: "Game Dev", subtitle: "Unity projects", link: "/" },
  { icon: "./PS-Logo.png", title: "Designs", subtitle: "UI/UX posters in Adobe Photoshop", link: "/" },
  { icon: "🛸", title: "Drone Sim", subtitle: "A drone strategy game", link: "/" },
  { icon: "⚡", title: "Echo Runner", subtitle: "Fast-paced puzzle FPS", link: "/" },
  { icon: "🏙️", title: "Skyscraper", subtitle: "Construction sim game", link: "/" },
  { icon: "🌆", title: "Urban Survivalist", subtitle: "City-based survival RPG", link: "/" },
  { icon: "🌀", title: "Gravity Shift", subtitle: "Arena shooter idea", link: "/" },
  { icon: "🎒", title: "Inventory UI", subtitle: "Classic RPG-style UI", link: "/" },
  { icon: "🔫", title: "Reload Animation", subtitle: "Custom weapon reload", link: "/" },
  { icon: "🌍", title: "3D Earth", subtitle: "Spinning globe in React", link: "/" },
];


const Projects = () => {
  return (
    <div>
      <h1 className="titles">My Projects</h1>
      <h1 className="subtitle">Below are some of my favorite projects that <br/> I've been working on!</h1>
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
