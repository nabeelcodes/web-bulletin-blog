/* This hook takes in markdown data and parses out all the H2
headings and returns them as an array */

import Parser from 'markdown-parser';
import { useEffect, useState } from 'react';

export default function useHeadingsParser(content) {
	const [parsedHeadings, setParsedHeadings] = useState([]);

	useEffect(() => {
		const markdownParser = new Parser();
		markdownParser.parse(content, (error, result) => {
			if (error) return;
			setParsedHeadings(result.headings);
		});
	}, [content]);

	return { parsedHeadings };
}
