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

			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`};

	${({ blogListContainer }) =>
		blogListContainer &&
		css`
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: clamp(1.1rem, 3vw, 2.8rem);
			margin: 1rem 0 0 0;

			article {
				height: 100%;
			}

			.linkToAllBlogsPage {
				height: 100%;
				display: grid;
				place-items: center;

				button {
					cursor: pointer;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 12px;
					border: 4.5px solid black;
					border-radius: 25px;
					padding: 0.5rem 1rem;
					font-size: 1.1rem;
					font-weight: 500;
					white-space: nowrap;
					background-color: transparent;
					transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

					.chevronRight {
						display: grid;
						place-items: center;

						svg {
							min-width: 15px;
							min-height: 15px;

							path {
								transition: stroke 0.3s ease-in-out;
							}
						}
					}

					@keyframes arrowMovement {
						from {
							transform: translateX(4px);
						}
						to {
							transform: translateX(-4px);
						}
					}

					@media ${({ theme }) => theme.breakpoints.hover} {
						&:hover {
							background-color: black;
							color: white;

							svg {
								animation: arrowMovement 0.7s linear infinite alternate;

								path {
									stroke: white;
								}
							}
						}
					}
				}
			}
		`}

	${({ aboutPageContainer }) =>
		aboutPageContainer &&
		css`
			text-align: center;

			h1 {
				font-size: calc(1.525rem + 3.3vw);
				font-weight: 700;
			}

			p {
				font-size: 1.15rem;
				margin-bottom: 1em;
			}

			a {
				display: inline-block;
				background-color: #8b00ff40;
				padding: 0.1em 0.3em;
				margin-right: 0.1em;
				border-radius: 5px;
			}

			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`};
`;

export const AllBlogsListContainer = styled.section`
	height: 100%;
	width: 79%;
	margin-inline: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: clamp(2.3rem, 3.5vw, 3rem);
	margin-top: 1.8rem;
	margin-bottom: 1.8rem;

	article {
		height: 100%;
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		width: 90%;
	}
`;
