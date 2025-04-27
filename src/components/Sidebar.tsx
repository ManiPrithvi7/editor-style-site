
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, FolderOpen, Mail } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const Sidebar = ({ isOpen, onNavigate }: SidebarProps) => {
  const [isExtended, setIsExtended] = useState(true);
  const navItems = [
    { path: "/", icon: <Home size={20} />, label: "Home", fileName: "home.jsx" },
    { path: "/about", icon: <User size={20} />, label: "About", fileName: "about.jsx" },
    { path: "/skills", icon: <Code size={20} />, label: "Skills", fileName: "skills.jsx" },
    { path: "/projects", icon: <FolderOpen size={20} />, label: "Projects", fileName: "projects.jsx" },
    { path: "/contact", icon: <Mail size={20} />, label: "Contact", fileName: "contact.jsx" },
  ];

  const handleClick = () => {
    onNavigate();
  };

  return (
    <aside 
      className={`bg-vscode-sidebar fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 md:relative ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16 lg:w-64"
      }`}
      onMouseEnter={() => setIsExtended(true)}
      onMouseLeave={() => !isOpen && setIsExtended(false)}
    >
      <div className="h-full flex flex-col">
        {/* Explorer header */}
        <div className="px-4 h-12 flex items-center border-b border-vscode-sidebar-active">
          <span className={`text-sm uppercase font-medium ${!isExtended && "md:hidden lg:block"}`}>Explorer</span>
        </div>
        
        {/* Project name */}
        <div className="px-4 py-2 text-vscode-text/80 text-sm">
          <div className={`${!isExtended && "md:hidden lg:block"}`}>PORTFOLIO</div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-vscode-sidebar-active text-vscode-accent"
                    : "hover:bg-vscode-sidebar-active"
                }`
              }
            >
              {item.icon}
              <span className={`${!isExtended && "md:hidden lg:block"}`}>{item.fileName}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
