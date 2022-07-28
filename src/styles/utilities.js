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
			gap: 1.8rem;
			margin-top: 1rem;

			article {
				height: 100%;
			}

			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`}
`;
