
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
  fileName,
  className = ""
}) => {
  // Simple syntax highlighting for common tokens
  const highlightSyntax = (code: string) => {
    return code
      .split('\n')
      .map((line, lineIndex) => {
        // Process individual tokens on each line
        let highlightedLine = line
          // Keywords
          .replace(
            /(const|let|var|function|return|if|else|for|while|class|import|from|export|default)/g,
            '<span class="text-vscode-keyword">$1</span>'
          )
          // Strings
          .replace(
            /(['"`])(.*?)\1/g,
            '<span class="text-vscode-string">$1$2$1</span>'
          )
          // Functions
          .replace(
            /(\w+)(\s*\()/g,
            '<span class="text-vscode-function">$1</span>$2'
          )
          // Comments
          .replace(
            /(\/\/.*|\/\*[\s\S]*?\*\/)/g,
            '<span class="text-vscode-comment">$1</span>'
          );

        return (
          <div
            key={lineIndex}
            className="code-line"
            dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }}
          />
        );
      });
  };

  return (
    <div className={`rounded-md overflow-hidden ${className}`}>
      {fileName && (
        <div className="bg-vscode-sidebar-active px-4 py-2 text-xs font-mono">
          {fileName}
        </div>
      )}
      <div className="bg-vscode-bg p-4 font-mono text-sm overflow-x-auto">
        {highlightSyntax(code)}
      </div>
    </div>
  );
};

export default CodeBlock;
