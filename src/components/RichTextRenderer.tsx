'use client';

import React from 'react';

interface RichTextRendererProps {
  content: unknown;
  className?: string;
}

// Enhanced Lexical content renderer for Payload CMS
const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content, className = '' }) => {
  if (!content) {
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        <p className="text-gray-600 italic">No content available for this post.</p>
      </div>
    );
  }

  // Enhanced content rendering for Lexical editor JSON
  const renderContent = (content: unknown): React.ReactNode => {
    if (typeof content === 'string') {
      return <p className="mb-4">{content}</p>;
    }

    if (Array.isArray(content)) {
      const renderedItems = content.map((item) => renderContent(item)).filter(Boolean);
      if (renderedItems.length === 0) {
        return null;
      }
      return (
        <>
          {renderedItems.map((item, index) => (
            <div key={index} className="mb-4">
              {item}
            </div>
          ))}
        </>
      );
    }

    if (typeof content === 'object' && content !== null) {
      const obj = content as Record<string, unknown>;
      
      // Handle Lexical root node (direct type)
      if (obj.type === 'root' && obj.children) {
        const renderedChildren = renderContent(obj.children);
        if (!renderedChildren) {
          return null;
        }
        return (
          <div className="space-y-4">
            {renderedChildren}
          </div>
        );
      }
      
      // Handle Lexical root node (nested in root property)
      if (obj.root && typeof obj.root === 'object' && (obj.root as Record<string, unknown>).children) {
        const renderedChildren = renderContent((obj.root as Record<string, unknown>).children);
        if (!renderedChildren) {
          return null;
        }
        return (
          <div className="space-y-4">
            {renderedChildren}
          </div>
        );
      }

      // Handle paragraph nodes
      if (obj.type === 'paragraph') {
        const children = obj.children as Array<Record<string, unknown>>;
        if (!children || children.length === 0) {
          return null; // Don't render empty paragraphs
        }
        
        // Check if paragraph has any meaningful content
        const hasContent = children.some(child => 
          child.type === 'text' && child.text && typeof child.text === 'string' && child.text.trim() !== ''
        );
        
        if (!hasContent) {
          return null; // Don't render empty paragraphs
        }
        
        const renderedChildren = children.map((child) => renderContent(child)).filter(Boolean);
        
        return (
          <p className="mb-4 leading-relaxed">
            {renderedChildren}
          </p>
        );
      }

      // Handle heading nodes
      if (obj.type === 'heading') {
        const level = (obj as Record<string, unknown>).tag as string || 'h2';
        const HeadingTag = level as keyof React.JSX.IntrinsicElements;
        const children = obj.children as Array<Record<string, unknown>>;
        
        return (
          <HeadingTag className="text-2xl font-bold mb-4 mt-8">
            {children && children.map((child) => renderContent(child))}
          </HeadingTag>
        );
      }

      // Handle list nodes
      if (obj.type === 'list') {
        const ListTag = (obj as Record<string, unknown>).listType === 'bullet' ? 'ul' : 'ol';
        const children = obj.children as Array<Record<string, unknown>>;
        
        return (
          <ListTag className="mb-4 ml-6 space-y-2">
            {children && children.map((child) => renderContent(child))}
          </ListTag>
        );
      }

      // Handle list item nodes
      if (obj.type === 'listitem') {
        const children = obj.children as Array<Record<string, unknown>>;
        
        return (
          <li className="mb-2">
            {children && children.map((child) => renderContent(child))}
          </li>
        );
      }

      // Handle text nodes with formatting
      if (obj.type === 'text') {
        const text = (obj as Record<string, unknown>).text as string || '';
        const format = (obj as Record<string, unknown>).format as number || 0;
        
        // Don't render empty text nodes
        if (!text || text.trim() === '') {
          return null;
        }
        
        let element = <span>{text}</span>;
        
        if (format & 1) { // Bold
          element = <strong>{element}</strong>;
        }
        if (format & 2) { // Italic
          element = <em>{element}</em>;
        }
        if (format & 8) { // Underline
          element = <u>{element}</u>;
        }
        if (format & 16) { // Strikethrough
          element = <del>{element}</del>;
        }
        
        return element;
      }

      // Handle link nodes
      if (obj.type === 'link') {
        const url = (obj as Record<string, unknown>).url as string || '#';
        const children = obj.children as Array<Record<string, unknown>>;
        
        return (
          <a 
            href={url} 
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children && children.map((child) => renderContent(child))}
          </a>
        );
      }

      // Handle quote/blockquote nodes
      if (obj.type === 'quote') {
        const children = obj.children as Array<Record<string, unknown>>;
        
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-4">
            {children && children.map((child) => renderContent(child))}
          </blockquote>
        );
      }

      // Fallback for unknown types - don't show raw JSON
      return null;
    }

    return null;
  };

  // Try to render the content
  const renderedContent = renderContent(content);
  
  // If no content was rendered, try to extract text from the structure
  if (!renderedContent || (Array.isArray(renderedContent) && renderedContent.length === 0)) {
    
    // Enhanced text extraction that handles the specific structure
    const extractText = (obj: unknown): string => {
      if (typeof obj === 'string') return obj;
      if (obj && typeof obj === 'object' && 'text' in obj && typeof obj.text === 'string') return obj.text;
      if (obj && typeof obj === 'object' && 'children' in obj && Array.isArray(obj.children)) {
        return obj.children.map(extractText).filter(Boolean).join(' ');
      }
      return '';
    };
    
    // Special handling for the root structure
    if (content && typeof content === 'object' && 'root' in content && content.root && typeof content.root === 'object' && 'children' in content.root) {
      const rootText = extractText(content.root);
      if (rootText.trim()) {
        return (
          <div className={`prose prose-lg max-w-none text-gray-800 leading-relaxed ${className}`}>
            <div className="space-y-6">
              <p className="mb-4 leading-relaxed">{rootText}</p>
            </div>
          </div>
        );
      }
    }
    
    const extractedText = extractText(content);
    
    if (extractedText.trim()) {
      return (
        <div className={`prose prose-lg max-w-none text-gray-800 leading-relaxed ${className}`}>
          <div className="space-y-6">
            <p className="mb-4 leading-relaxed">{extractedText}</p>
          </div>
        </div>
      );
    }
    
    // If still no content, show a message
    return (
      <div className={`prose prose-lg max-w-none text-gray-800 leading-relaxed ${className}`}>
        <div className="space-y-6">
          <p className="text-gray-600 italic">No content available for this post.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`prose prose-lg max-w-none text-gray-800 leading-relaxed ${className}`}>
      <div className="space-y-6">
        {renderedContent}
      </div>
    </div>
  );
};

export default RichTextRenderer;
