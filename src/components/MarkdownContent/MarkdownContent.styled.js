import styled from 'styled-components';

export const StyledMarkdownContent = styled.article`
	border: 2.5px solid black;
	border-radius: 5px;
	padding: 0 0.5em;
	margin: 1em 0;

	*,
	*::before,
	*::after {
		margin: revert;
		padding: revert;
	}

	pre div {
		background-color: rgba(0, 0, 0, 0.05) !important;
		font-size: 0.85em;
		border-radius: 3px;
	}

	pre code {
		display: block;
		padding: 1em;
		-webkit-text-size-adjust: none;
		overflow-x: auto;
		white-space: pre;
	}

	code span {
		${({ theme }) => theme.fonts.mono};
	}

	p code {
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 3px;
		padding: 2px 4px;
		font-size: 0.85em;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	tr,
	td,
	th {
		border: 1px solid #555;
		text-align: center;
		padding: 1rem;
	}

	li {
		list-style: disc;
		margin: 0.4rem;
	}

	blockquote {
		padding: 0 1em;
		color: #6a737d;
		border-left: 0.25em solid #dfe2e5;
	}

	.left {
		text-align: left;
	}
`;
