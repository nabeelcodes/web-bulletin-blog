import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { StyledMarkdownContent } from './MarkdownContent.styled';

const CodeHighlight = ({ inline, className, children }) => {
	return !inline ? (
		/* parsing code into Syntax Highlighter only if inline: false i.e. for multiline code */
		<SyntaxHighlighter
			style={githubGist}
			language={className}
			PreTag='div'
		>
			{children[0]}
		</SyntaxHighlighter>
	) : (
		/* generic parsing for single line code */
		<code className={className}>{children[0]}</code>
	);
};

export default function MarkdownContent({ contentToParse }) {
	return (
		<StyledMarkdownContent>
			<ReactMarkdown
				remarkPlugins={[remarkGfm, remarkHeadingId, { singleTilde: false }]}
				components={{ code: CodeHighlight }}
			>
				{contentToParse}
			</ReactMarkdown>
		</StyledMarkdownContent>
	);
}
