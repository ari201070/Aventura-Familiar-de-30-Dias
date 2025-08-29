import React from 'react';
import { Language } from '../types.ts';

// Parses simple Markdown links like [text](url)
export const parseMarkdownLinks = (text: string): React.ReactNode[] => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      React.createElement('a', {
        key: match.index,
        href: match[2],
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-indigo-600 hover:text-indigo-800 underline transition-colors duration-150'
      }, match[1])
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
};

// Parses simple Markdown pipe tables
export const parseMarkdownTable = (
  markdownTable: string,
  t: (key: string) => string, 
  lang: Language
): React.ReactNode => {
  const lines = markdownTable.trim().split('\n');
  if (lines.length < 2) return React.createElement('p', null, markdownTable); // Not a valid table

  const sanitizeCell = (cellText: string) => cellText.trim();

  const headers = lines[0].split('|').map(sanitizeCell).filter(Boolean);
  let headerSeparatorIndex = lines.findIndex(line => line.includes('---'));
  if (headerSeparatorIndex === -1) return React.createElement('p', null, markdownTable); // No header separator

  const bodyRows = lines.slice(headerSeparatorIndex + 1)
    .map(line => line.split('|').map(sanitizeCell).filter(Boolean))
    .filter(row => row.length > 0);
  
  const columnAlignments: string[] = headers.map(hKey => {
      const lowerKey = hKey.toLowerCase();
      if (['sin gluten', 'ללא גלוטן', 'sin azúcar', 'ללא סוכר', 'check', 'cross'].some(term => lowerKey.includes(term))) {
          return 'text-center'; 
      }
      return lang === Language.HE ? 'text-right' : 'text-left';
  });

  return (
    React.createElement('div', { className: "overflow-x-auto my-4" },
      React.createElement('table', { className: "min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg shadow-sm" },
        React.createElement('thead', { className: "bg-indigo-50" },
          React.createElement('tr', null,
            headers.map((header, index) => (
              React.createElement('th', {
                key: index,
                scope: "col",
                className: `px-4 py-3 ${(columnAlignments[index] || (lang === Language.HE ? 'text-right' : 'text-left'))} text-sm font-semibold text-indigo-700`
              }, header)
            ))
          )
        ),
        React.createElement('tbody', { className: "divide-y divide-gray-200 bg-white" },
          bodyRows.map((row, rowIndex) => (
            React.createElement('tr', { key: rowIndex, className: (rowIndex % 2 === 0 ? undefined : 'bg-gray-50') },
              row.map((cell, cellIndex) => {
                let cellContent;
                const cellLower = cell.toLowerCase();
                if (cellLower.includes('check')) { // Using includes for flexibility
                    cellContent = React.createElement('i', { className: 'fas fa-check-circle text-green-500 text-lg', 'aria-label': 'Yes' });
                } else if (cellLower.includes('cross')) { // Using includes for flexibility
                    cellContent = React.createElement('i', { className: 'fas fa-times-circle text-red-500 text-lg', 'aria-label': 'No' });
                } else {
                    cellContent = parseMarkdownLinks(cell);
                }

                return (
                  React.createElement('td', {
                    key: cellIndex,
                    className: `px-4 py-3 whitespace-nowrap text-sm text-gray-600 ${(columnAlignments[cellIndex] || (lang === Language.HE ? 'text-right' : 'text-left'))}`
                  }, cellContent)
                );
              })
            )
          ))
        )
      )
    )
  );
};