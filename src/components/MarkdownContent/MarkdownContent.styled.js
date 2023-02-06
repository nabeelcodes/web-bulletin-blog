import styled from 'styled-components';

export const StyledMarkdownContent = styled.article`
	width: 60%;
	margin-bottom: 4em;

	*,
	*::before,
	*::after {
		margin: revert;
		padding: revert;
	}

	img {
		max-width: -webkit-fill-available;
	}

	pre div {
		background-color: rgba(0, 0, 0, 0.05) !important;
		font-size: 0.85em;
		border-radius: 3px;
	}

	pre code {
		display: block;
		padding: 1em;
		overflow-x: scroll;
		white-space: pre;
	}

	h1 code,
	h2 code,
	h3 code,
	h4 code,
	h5 code,
	h6 code,
	p code,
	li code {
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 3px;
		padding: 2px 4px;
		font-size: 0.85em;
	}

	code {
		font-family: ${({ theme }) => theme.fonts.mono};
		font-weight: 500;
		-webkit-text-size-adjust: none;
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
	}

	th,
	td {
		padding: 1rem 0;
	}

	p,
	li {
		font-size: 1.12rem;
		line-height: 1.7rem;
	}

	& > ul,
	ol {
		padding-left: 1.5em;
	}

	li {
		list-style: unset;
		margin: 0.4rem;
	}

	blockquote {
		font-style: italic;
		margin: 0;
		padding: 0 1em;
		color: #6a737d;
		border-left: 0.25em solid #dfe2e5;
	}

	a {
		color: ${({ theme }) => theme.colors.secondaryAccent};
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 550;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	.left {
		text-align: left;
	}

	@media ${({ theme }) => theme.breakpoints.ipad} {
		width: 75%;
		margin-inline: auto;
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		width: 80%;
		margin-inline: auto;
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 100%;
		margin-inline: auto;

		p,
		li {
			font-size: 1rem;
		}
	}
`;
