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
			border-radius: 6px;
			position: relative;

			&:before {
				content: '';
				position: absolute;
				z-index: -1;
				left: -7.5px;
				top: -7px;
				width: 104.5%;
				height: 104.5%;
				background: radial-gradient(
					circle at 50% 50%,
					#8b00ff,
					#ff64bd,
					#ffd4d4
				);
				background-size: 200% 200%;
				background-position: 0% 100%;
				border-radius: 10px;

				@media ${({ theme }) => theme.breakpoints.xl} {
					left: -8.5px;
					top: -8px;
					width: 103.4%;
					height: 106%;
				}

				@media ${({ theme }) => theme.breakpoints.lg} {
					left: -6.8px;
					height: 105%;
				}

				@media ${({ theme }) => theme.breakpoints.ipad} {
					left: -7.8px;
					height: 106.5%;
					width: 102.4%;
				}

				@media ${({ theme }) => theme.breakpoints.sm} {
					left: -8px;
					top: -6.5px;
					height: 105.6%;
					width: 102.7%;
				}

				@media ${({ theme }) => theme.breakpoints.xs} {
					left: -5px;
					top: -5.5px;
					height: 104.5%;
				}

				@media ${({ theme }) => theme.breakpoints.xss} {
					left: -4.5px;
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
