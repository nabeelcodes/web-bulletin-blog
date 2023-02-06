import styled from 'styled-components';

export const StyledBlogDetailsPage = styled.section`
	width: 100%;

	h2 {
		scroll-margin-top: 2rem;
	}

	.blogDetailsOuterWrapper {
		background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
		padding: 4rem 0;
		margin-bottom: 4rem;
	}

	.bannerImageWrapper {
		max-width: 60%;
		max-height: 500px;
		overflow: hidden;
		border-radius: 5px;

		img {
			border-radius: 5px;
		}
	}

	.blogDetailsInnerWrapper {
		max-width: 40%;
	}

	.blogTitle {
		font-size: clamp(1.75rem, 1.39rem + 1.79vw, 3rem);
		font-weight: 480;
	}

	.blogDescription {
		color: #000000b5;
		font-size: 1.12rem;
		line-height: 1.7rem;
	}

	.publishingDate {
		display: inline-block;
		font-weight: 600;
		font-size: 1.12rem;
		background-color: ${({ theme }) => theme.colors.secondaryAccent};
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 5px;
	}

	.mainContent {
		gap: 3rem;
	}

	.navigationPane {
		align-self: flex-start;
		position: sticky;
		top: 36px;

		h3 {
			font-size: 1.5rem;
			font-weight: 500;
			letter-spacing: 1.5px;
			margin-top: 1.12rem;
			margin-bottom: 1rem;
			opacity: 0.75;
		}

		div {
			border-left: 3px solid ${({ theme }) => theme.colors.secondaryAccentLight};
		}

		a {
			display: block;
			padding: 1rem;
			opacity: 0.7;

			&:focus {
				background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
			}

			&:hover {
				opacity: 1;
				background-color: ${({ theme }) => theme.colors.secondaryAccentLight};
			}
		}
	}

	@media ${({ theme }) => theme.breakpoints.ipad} {
		.blogDetailsOuterWrapper > div {
			flex-direction: column-reverse;
			gap: 3rem;
			margin: 0;
			width: 75%;
			margin-inline: auto;
			align-items: stretch;
		}

		.bannerImageWrapper,
		.blogDetailsInnerWrapper {
			max-width: 100%;
			max-height: unset;
		}

		.navigationPane {
			display: none;
		}
	}

	@media ${({ theme }) => theme.breakpoints.md} {
		.blogDetailsOuterWrapper {
			padding-top: 0;
			margin-bottom: 3rem;
		}

		.blogDetailsOuterWrapper > div {
			width: 100%;
		}

		.bannerImageWrapper {
			border-radius: 0px;

			img {
				border-radius: 0px;
			}
		}

		.blogDetailsInnerWrapper {
			margin: 0px 4.8rem;
		}
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		.blogDetailsOuterWrapper {
			margin-bottom: 2rem;
			padding-bottom: 3rem;
		}

		.blogDetailsInnerWrapper {
			margin: 0px 1.22rem;

			.publishingDate {
				font-size: 1rem;
			}
		}

		.mainContent {
			width: 90%;
		}
	}
`;
