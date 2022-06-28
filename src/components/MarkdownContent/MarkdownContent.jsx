import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { MarkdownWrapper } from './MarkdownContent.styled';

const CodeHighlight = ({ inline, className, children }) => {
	return !inline ? (
		<SyntaxHighlighter style={githubGist} language={className} PreTag='div'>
			{children[0]}
		</SyntaxHighlighter>
	) : (
		<code className={className}>{children[0]}</code>
	);
};

export default function MarkdownContent({ contentToParse }) {
	return (
		<MarkdownWrapper>
			<ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]} components={{ code: CodeHighlight }}>
				{contentToParse}
			</ReactMarkdown>
		</MarkdownWrapper>
	);
}
