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

	${({ gradientEffects }) =>
		gradientEffects &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: white;
			border-radius: 6px;
			position: relative;

			&:before {
				content: '';
				position: absolute;
				z-index: -1;
				inset: -0.5rem;
				border-radius: inherit;
				background: radial-gradient(
					circle at 50% 50%,
					${({ theme }) => theme.colors.secondaryAccent},
					${({ theme }) => theme.colors.borderAnimationPink},
					${({ theme }) => theme.colors.borderAnimationPeach}
				);
				background-size: 200% 200%;
				background-position: 0% 100%;

				@media ${({ theme }) => theme.breakpoints.ipad} {
					inset: -0.4rem;
				}
			}

			@keyframes borderAnimation {
				0% {
					background-position: 0% 100%;
				}
				25% {
					background-position: 100% 100%;
				}
				50% {
					background-position: 100% 0%;
				}
				75% {
					background-position: 0% 0%;
				}
				100% {
					background-position: 0% 100%;
				}
			}

			&:hover:before {
				animation: borderAnimation 1.5s linear infinite;
			}

			.summary {
				h3 {
					font-size: 1.7rem;
				}

				p {
					font-size: 1.05rem;
				}
			}

			.stats {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				margin-top: 2rem;
				opacity: 70%;

				div {
					display: flex;
					justify-content: space-between;
					align-items: center;
					align-self: normal;
					gap: 0.4rem;
				}

				time {
					display: inline-block;
					max-width: max-content;
					padding: 0.5rem 1rem;
					font-weight: 500;
					font-size: 0.89rem;
					border: 1px solid #00000070;
					border-radius: 50px;
				}

				span {
					font-weight: 500;
					font-size: 0.9rem;
				}
			}
		`};
`;

/*
AN ALTERNATIVE WAY OF DOING BORDER ANIMATION
	we can use @property approach but browser support is not that good as of April-2023

${({ onBlogsPage }) =>
		onBlogsPage &&
		css`
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-color: white;
			border-radius: 6px;
			position: relative;

			Kevin Powell strat : https://youtu.be/-VOUK-xFAyk
			@property --gradient-angle {
				syntax: '<angle>';
				initial-value: 0deg;
				inherits: false;
			}

			&:before {
				content: '';
				position: absolute;
				z-index: -1;
				inset: -0.5rem;
				border-radius: inherit;
				background: conic-gradient(
					from var(--gradient-angle),
					#ffd4d4,
					#ffd4d4,
					#ff64bd,
					#8b00ff,
					#ff64bd,
					#ffd4d4
				);

				@media ${({ theme }) => theme.breakpoints.ipad} {
					inset: -0.4rem;
				}
			}

			@keyframes rotation-animation {
				0% {
					--gradient-angle: 0deg;
				}
				100% {
					--gradient-angle: 360deg;
				}
			}

			&:hover:before {
				animation: rotation-animation 1.5s linear infinite;
			}
		`};
*/
