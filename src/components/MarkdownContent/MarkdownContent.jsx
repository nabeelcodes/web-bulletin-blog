import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import githubGist from 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist';
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import { StyledMarkdownContent } from './MarkdownContent.styled';

SyntaxHighlighter.registerLanguage('javascript', js);

const CodeHighlight = ({ inline, className, children }) => {
	return !inline ? (
		/* parsing code into Syntax Highlighter only if inline: false i.e. for multiline code */
		<SyntaxHighlighter
			style={githubGist}
			language={className}
			wrapLines={true}
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
