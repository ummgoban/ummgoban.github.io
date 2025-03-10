import ReactMarkdown from 'react-markdown';

const Markdown = ({ children }: { children: string }) => {
  return (
    <article className="">
      <ReactMarkdown>{children}</ReactMarkdown>
    </article>
  );
};

export default Markdown;
