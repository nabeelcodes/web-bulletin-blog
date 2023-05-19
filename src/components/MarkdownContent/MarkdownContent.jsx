import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeTheme from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
import remarkGfm from 'remark-gfm';
import remarkHeadingId from 'remark-heading-id';
import { StyledMarkdownContent } from './MarkdownContent.styled';

import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/hljs/yaml';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('yaml', yaml);

/*
Refer to React-Syntax-Highlighter light build guide on :
https://github.com/react-syntax-highlighter/react-syntax-highlighter#light-build
for independent language support

example:

Currently, not using this as issue seems to be fixed only
by using `atom-one-light` theme
*/

const CodeHighlight = ({ inline, className, children }) => {
	return !inline ? (
		/* parsing code into Syntax Highlighter only if inline: false i.e. for multiline code */
		<SyntaxHighlighter
			style={codeTheme}
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
