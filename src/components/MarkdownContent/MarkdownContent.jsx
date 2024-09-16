import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeTheme from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import { StyledMarkdownContent } from './MarkdownContent.styled';

/*
Refer to React-Syntax-Highlighter light build guide on :
https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
for independent language support
*/
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/hljs/yaml';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('css', css);

const codeHighlight = ({ inline: codeBlockIsInline, className, children }) => {
	return codeBlockIsInline ? (
		/* generic parsing for single line code */
		<code className={className}>{children[0]}</code>
	) : (
		/* parsing code into Syntax Highlighter only if inline: false i.e. for multiline code */
		<SyntaxHighlighter
			style={codeTheme}
			language={className}
			wrapLines={true}
			PreTag='div'
		>
			{children[0]}
		</SyntaxHighlighter>
	);
};

export default function MarkdownContent({ contentToParse }) {
	return (
		<StyledMarkdownContent id='main-content-body'>
			<ReactMarkdown
				remarkPlugins={[remarkGfm, remarkHeadingId, { singleTilde: false }]}
				components={{ code: codeHighlight }}
			>
				{contentToParse}
			</ReactMarkdown>
		</StyledMarkdownContent>
	);
}
