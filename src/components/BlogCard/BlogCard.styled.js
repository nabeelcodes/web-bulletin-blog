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
			background-color: white;
			border-radius: 5px;
			position: relative;

			&:before {
				content: '';
				position: absolute;
				z-index: -1;
				left: -7px;
				top: -7px;
				width: calc(100% + 10px);
				height: calc(100% + 10px);
				width: 104.4%;
				height: 104%;
				background: radial-gradient(circle at 50% 50%, #8b00ff, #ff64bd, #ffd4d4);
				/* background: radial-gradient(circle at 50% 50%, #8b00ff, yellow); */
				background-size: 200% 200%;
				background-position: 0% 100%;
				border-radius: 10px;
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
				animation-name: borderAnimation;
				animation-duration: 1s;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
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
