/* This hook takes in markdown data and parses out all the H2
headings' Ids and returns them as an array */

import Parser from "markdown-parser";
import { useEffect, useState } from "react";

export default function useHeadingsParser(content) {
  const [parsedHeadingIds, setParsedHeadingIds] = useState([]);

  useEffect(() => {
    const markdownParser = new Parser();
    markdownParser.parse(content, (error, result) => {
      if (error) return;

      setParsedHeadingIds(
        result.headings.map((h) =>
          h.slice(1, h.length - 1).replaceAll(" ", "-"),
        ),
      );
    });
  }, [content]);

  return { parsedHeadingIds };
}
