
import React from 'react';
import TypeWriter from '../components/TypeWriter';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 80 },
        { name: "Redux", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Firebase", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Jest", level: 75 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "UI/UX Design", level: 80 },
      ]
    }
  ];

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8">
        <TypeWriter text="My Skills" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md overflow-hidden animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="border-b border-vscode-sidebar-active px-4 py-2">
              <h3 className="font-medium text-vscode-accent">{category.title}</h3>
            </div>
            <div className="p-4 space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-vscode-text/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-vscode-sidebar-active rounded-full">
                    <div 
                      className="h-full bg-vscode-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6 text-vscode-accent">Development Process</h2>
        
        <div className="bg-vscode-sidebar border border-vscode-sidebar-active rounded-md p-6">
          <div className="terminal-text">
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Planning & Research" delay={50} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Understanding requirements and planning architecture</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Design & Prototyping" delay={50} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Creating wireframes and design mockups</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Development" delay={50} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Writing clean, efficient, and maintainable code</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Testing & Quality Assurance" delay={50} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Ensuring functionality and performance</p>
            
            <p className="flex">
              <span className="text-vscode-keyword mr-2">$</span>
              <TypeWriter text="Deployment & Maintenance" delay={50} />
            </p>
            <p className="text-vscode-comment pl-6 mb-4">// Deploying and providing ongoing support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
