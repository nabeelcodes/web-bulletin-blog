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
					color: ${({ theme }) => theme.colors.secondaryAccent};
					border: 4.5px solid ${({ theme }) => theme.colors.secondaryAccent};
					border-radius: 25px;
					padding: 0.5rem 1rem;
					font-size: 1.1rem;
					font-weight: 500;
					white-space: nowrap;
					background-color: transparent;
					transition: padding 0.3s ease-in-out;

					.chevronRight {
						display: grid;
						place-items: center;

						svg {
							width: 20px;
							height: 20px;
							fill: ${({ theme }) => theme.colors.secondaryAccent};
							stroke: ${({ theme }) => theme.colors.secondaryAccent};
							stroke-width: 3px;

							path {
								transition: stroke 0.3s ease-in-out;
							}
						}
					}

					@keyframes arrowMovement {
						from {
							transform: translateX(7px);
						}
						to {
							transform: translateX(-4px);
						}
					}

					@media ${({ theme }) => theme.breakpoints.hover} {
						&:hover {
							padding: 0.5rem 1.35rem;

							svg {
								animation: arrowMovement 0.5s linear infinite alternate;
							}
						}
					}
				}
			}
		`}

	${({ aboutPageContainer }) =>
		aboutPageContainer &&
		css`
			[data-tooltip]:before {
				/* needed - do not touch */
				content: attr(data-tooltip);
				position: absolute;
				opacity: 0;
				pointer-events: none;

				/* customizable */
				color: ${({ theme }) => theme.colors.background};
				font-size: 1.05rem;
				font-weight: 500;
				border-radius: 5px;
				padding: 0.2rem 0.8rem;
				box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px,
					rgb(14 30 37 / 32%) 0px 2px 16px 0px;
				transition: all 0.15s ease;
				-webkit-transition: all 0.15s ease;
			}

			@media ${({ theme }) => theme.breakpoints.hover} {
				[data-tooltip]:hover:before {
					/* needed - do not touch */
					opacity: 1;
					z-index: 2;

					/* customizable */
					background: ${({ theme }) => theme.colors.fontColor};
					margin-top: -40px;
					margin-left: 50px;
				}
			}

			text-align: center;

			h1 {
				font-size: calc(1.525rem + 3.3vw);
				font-weight: 700;
			}

			p {
				font-size: 1.15rem;
				line-height: 1.5em;
				margin-bottom: 1em;
			}

			a {
				display: inline-block;
				background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
				padding: 0 0.3em;
				margin-inline: 0.1em;
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

