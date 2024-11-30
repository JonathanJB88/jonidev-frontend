import ReactMarkdown, { type Components } from 'react-markdown';
import sanitizeHtml from 'sanitize-html';

interface Props {
  response: string;
}

export const AssistantResponse = ({ response }: Props) => {
  const sanitizedContent = sanitizeHtml(response, {
    allowedTags: ['b', 'i', 'em', 'strong', 'p', 'ul', 'li', 'ol', 'a'],
    allowedAttributes: {
      a: ['href'],
    },
  });

  const components: Components = {
    p: ({ children }) => <p className='text-xs md:text-base'>{children}</p>,
    a: ({ href, children }) => (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='text-crimson text-xs md:text-base hover:text-dark-crimson underline'
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className='list-disc list-inside text-xs md:text-base'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='list-decimal list-inside'>{children}</ol>
    ),
    li: ({ children }) => (
      <li className='ml-4 text-xs md:text-base'>{children}</li>
    ),
  };

  return (
    <ReactMarkdown components={components}>{sanitizedContent}</ReactMarkdown>
  );
};
