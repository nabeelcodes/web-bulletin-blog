import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledBlogCard = styled.article`
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
	border-radius: 8px;
	cursor: pointer;

	h3 {
		font-size: 1.35rem;
	}

	p {
		opacity: 70%;
		line-height: 1.35rem;
		margin-top: 1rem;
	}

	${({ allBlogsList }) =>
		allBlogsList &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: unset;
			border: 4px solid ${({ theme }) => theme.colors.secondaryAccent};
			/* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */

			div {
				h3 {
					font-size: 1.7rem;
				}

				p {
					font-size: 1.05rem;
				}
			}

			time {
				display: inline-block;
				max-width: max-content;
				margin-top: 2rem;
				padding: 0.5rem 1rem;
				opacity: 70%;
				font-weight: 500;
				font-size: 0.89rem;
				border: 1px solid #00000070;
				border-radius: 50px;
			}
		`};
`;
