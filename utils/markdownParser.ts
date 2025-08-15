
import React from 'react';
import { Language } from '../types'; // Assuming types.ts is in the parent directory or accessible

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
  t: (key: string) => string, // Pass the translation function
  lang: Language
): React.ReactNode => {
  const lines = markdownTable.trim().split('\n');
  if (lines.length < 2) return React.createElement('p', null, markdownTable); // Not a valid table or too short

  const sanitizeCell = (cellText: string) => cellText.trim();

  // Attempt to use translated headers if available, otherwise parse from Markdown
  let headers: string[];
  const headerKeys = ['table_header_restaurant', 'table_header_cafe', 'table_header_type', 'table_header_gluten_free', 'table_header_sugar_free'];
  const translatedHeaders = headerKeys.map(key => t(key)).filter(translated => !headerKeys.includes(translated)); // Filter out keys if not translated


  if (translatedHeaders.length >= 2) { // Heuristic: if at least two headers are translated, use them.
      // This is a simplification. A more robust solution would map specific keys to specific columns.
      // For now, we check if the markdown header line contains parts of these translated headers.
      const markdownHeaderLine = lines[0].toLowerCase();
      headers = translatedHeaders.filter(th => markdownHeaderLine.includes(th.split(' ')[0].toLowerCase()));
      if(headers.length < 2) { // Fallback if translated headers don't seem to match
        headers = lines[0].split('|').map(sanitizeCell).filter(Boolean);
      }
  } else {
      headers = lines[0].split('|').map(sanitizeCell).filter(Boolean);
  }


  let headerSeparatorIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].includes('---')) {
      headerSeparatorIndex = i;
      break;
    }
  }

  if (headerSeparatorIndex === -1) return React.createElement('p', null, markdownTable); // No header separator found

  const bodyRows = lines.slice(headerSeparatorIndex + 1)
    .map(line => line.split('|').map(sanitizeCell).filter(Boolean))
    .filter(row => row.length > 0);

  const headerActualKeys = lines[0].split('|').map(h => h.trim().toLowerCase()).filter(Boolean);
  
  const columnAlignments: string[] = headerActualKeys.map(hKey => {
      if (hKey === t('table_header_gluten_free').toLowerCase() || hKey === t('table_header_sugar_free').toLowerCase() || hKey === 'sin gluten' || hKey === 'sin azúcar' || hKey === 'ללא גלוטן' || hKey === 'ללא סוכר') {
          return lang === Language.HE ? 'text-right' : 'text-center'; 
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
                // Attempt to parse links within cells
                const cellContent = parseMarkdownLinks(cell);
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
