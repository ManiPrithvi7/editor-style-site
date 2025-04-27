
import React from 'react';
import TypeWriter from '../components/TypeWriter';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration using Stripe.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time chat application with private messaging, group chats, and notifications using Socket.io for real-time communication.",
      techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management System",
      description: "A Kanban-style task management system with drag-and-drop functionality, task assignments, due dates, and project management features.",
      techStack: ["React", "TypeScript", "Redux", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Blog Platform",
      description: "A content management system with rich text editing, image uploads, user comments, and social sharing functionality.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with current conditions, forecasts, location search, and interactive maps using weather APIs.",
      techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A VS Code-themed developer portfolio showcasing projects and skills with responsive design and interactive elements.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8">
        <TypeWriter text="My Projects" />
      </h1>
      
      <p className="text-vscode-text/80 mb-8 max-w-2xl">
        Here are some of the projects I've worked on. Each project represents different 
        challenges and solutions in web development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-vscode-sidebar border border-vscode-sidebar-active rounded-md">
        <h2 className="text-xl font-semibold mb-4">Want to see more?</h2>
        <p className="mb-4">
          These are just a few examples of my work. Visit my GitHub profile for more projects and contributions.
        </p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-vscode-accent text-white rounded hover:bg-vscode-accent/80 transition-colors"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Projects;
