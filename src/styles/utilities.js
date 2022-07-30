import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
	height: ${({ height }) => height ?? '100%'};
	width: ${({ width }) => width ?? '100%'};
	margin-inline: auto;

	${({ flex }) =>
		flex &&
		css`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`}

	${({ homePageMainContainer }) =>
		homePageMainContainer &&
		css`
			margin-top: 1.8rem;
			margin-bottom: 1.8rem;

			& > h2 {
				opacity: 0.8;
				font-size: 1.4rem;
			}
		`};

	${({ blogListContainer }) =>
		blogListContainer &&
		css`
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 2.8rem;
			margin-top: 1rem;

			article {
				height: 100%;
			}

			.linkToAllBlogsPage {
				height: 100%;
				display: grid;
				place-items: center;
				position: relative;

				button {
					cursor: pointer;
					display: flex;
					justify-content: center;
					place-items: center;
					height: 3.5rem;
					width: 3.5rem;
					border: 4.5px solid black;
					border-radius: 50%;
					transition: width 0.3s linear, border-radius 0.3s linear;
					background-color: transparent;

					&:hover {
						border-radius: 50px;
						width: 11.8rem;
					}
				}

				span {
					position: absolute;
					top: 150px;
					left: 97px;
					z-index: -10;
					opacity: 0;
					font-size: 1.1rem;
					font-weight: 500;
					transition: top 0.5s linear;
				}

				button:hover {
					svg {
						display: none;
					}

					+ span {
						opacity: 1;
						top: 101.5px;
						transition: opacity 1s linear;
					}
				}
			}

			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`}

	${({ allBlogsListContainer }) =>
		allBlogsListContainer &&
		css`
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 4rem;
			margin-top: 1.8rem;
			margin-bottom: 1.8rem;

			article {
				height: 100%;
			}

			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`}
`;
