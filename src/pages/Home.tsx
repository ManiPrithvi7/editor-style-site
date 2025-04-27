
import React from 'react';
import TypeWriter from '../components/TypeWriter';
import CodeBlock from '../components/CodeBlock';

const Home = () => {
  const introCode = `// Welcome to my portfolio
const developer = {
  name: 'Manikandan',
  title: 'Full Stack MERN Developer',
  skills: ['React', 'Node.js', 'Express', 'MongoDB'],
  passion: 'Building elegant solutions to complex problems'
};

function introduce() {
  return \`Hi, I'm \${developer.name}!\`;
}

// Let's connect and build something amazing together!
introduce();`;

  return (
    <section className="space-y-12 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          <TypeWriter text="Hi, I'm Manikandan" />
        </h1>
        <h2 className="text-2xl text-vscode-accent">
          <TypeWriter 
            text="Full Stack MERN Developer" 
            delay={80} 
          />
        </h2>
        <p className="text-vscode-text/80 mt-6 max-w-xl leading-relaxed">
          I specialize in building modern web applications using the MERN stack.
          With a passion for clean code and user-centric design, I create efficient
          and scalable solutions that solve real-world problems.
        </p>
      </div>
      
      <CodeBlock
        code={introCode}
        fileName="introduction.js"
        className="max-w-2xl"
      />
      
      <div className="flex flex-wrap gap-4">
        <a
          href="/about"
          className="px-4 py-2 bg-vscode-accent text-white rounded hover:bg-vscode-accent/80 transition-colors"
        >
          Learn More About Me
        </a>
        <a
          href="/projects"
          className="px-4 py-2 border border-vscode-sidebar-active rounded hover:bg-vscode-sidebar-active transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
