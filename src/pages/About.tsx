
import React from 'react';
import TypeWriter from '../components/TypeWriter';
import CodeBlock from '../components/CodeBlock';

const About = () => {
  const aboutCode = `/**
 * About Manikandan
 * ---------------
 * A passionate Full Stack Developer with expertise in
 * building modern web applications using MERN stack
 */

class Developer {
  constructor() {
    this.name = 'Manikandan';
    this.role = 'Full Stack MERN Developer';
    this.location = 'India';
    this.languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'];
    this.interests = [
      'Web Development',
      'Open Source',
      'UI/UX Design',
      'Problem Solving'
    ];
  }

  getEducation() {
    return [
      {
        degree: 'B.Tech in Computer Science',
        institution: 'Example University',
        year: '2020'
      }
    ];
  }

  getExperience() {
    return [
      {
        role: 'Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2021 - Present',
        responsibilities: [
          'Developed and maintained web applications using MERN stack',
          'Collaborated with cross-functional teams',
          'Improved application performance by 40%'
        ]
      }
    ];
  }
}

// Feel free to connect!
const manikandan = new Developer();`;

  return (
    <section className="space-y-10 py-12">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          <TypeWriter text="About Me" />
        </h1>
        
        <div className="space-y-6 max-w-2xl text-vscode-text/90">
          <p>
            Hello! I'm Manikandan, a passionate Full Stack MERN Developer
            with a strong focus on creating responsive and user-friendly web applications.
            I enjoy tackling complex problems and turning them into simple and elegant solutions.
          </p>
          
          <p>
            My journey in web development started with a curiosity about how websites work.
            This curiosity evolved into a passion for building digital experiences that are
            not only functional but also intuitive and accessible.
          </p>
          
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or enhancing my skills through continuous learning.
          </p>
        </div>
      </div>
      
      <div className="mt-8">
        <CodeBlock
          code={aboutCode}
          fileName="about.js"
        />
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-vscode-accent">Education & Experience</h2>
        
        <div className="space-y-6">
          <div className="bg-vscode-sidebar p-6 rounded-md border border-vscode-sidebar-active">
            <h3 className="text-lg font-medium mb-2">Education</h3>
            <div className="pl-4 border-l-2 border-vscode-accent">
              <p className="text-vscode-function">B.Tech in Computer Science</p>
              <p className="text-vscode-text/70">Example University, 2020</p>
            </div>
          </div>
          
          <div className="bg-vscode-sidebar p-6 rounded-md border border-vscode-sidebar-active">
            <h3 className="text-lg font-medium mb-2">Work Experience</h3>
            <div className="pl-4 border-l-2 border-vscode-accent">
              <p className="text-vscode-function">Full Stack Developer</p>
              <p className="text-vscode-text/70">Tech Solutions Inc., 2021 - Present</p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1 text-vscode-text/80">
                <li>Developed and maintained web applications using MERN stack</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Improved application performance by 40%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
