import ReactMarkdown from 'react-markdown';

const Markdown = ({ children }: { children: string }) => {
  return (
    <article className="">
      <ReactMarkdown
        children={children}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold my-2">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-bold my-2">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-bold my-2">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-bold my-2">{children}</h4>,
          h5: ({ children }) => <h5 className="text-base font-bold my-2">{children}</h5>,
          h6: ({ children }) => <h6 className="text-sm font-bold my-2">{children}</h6>,
          p: ({ children }) => <p className="text-base my-2">{children}</p>,
          code: ({ children }) => <code className="text-sm">{children}</code>,
          ul: ({ children }) => <ul className="list-disc list-inside ms-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside ms-2">{children}</ol>,
          li: ({ children }) => <li className="text-base list-inside ms-2">{children}</li>,
          table: ({ children }) => <table className="w-full">{children}</table>,
          th: ({ children }) => <th className="border px-4 py-2">{children}</th>,
          td: ({ children }) => <td className="border px-4 py-2">{children}</td>,
          hr: () => <hr className="my-4" />,
          img: ({ src, alt }) => <img src={src} alt={alt} />,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer hover:text-gray-600"
            >
              {children}
            </a>
          ),
        }}
      />
    </article>
  );
};

export default Markdown;
