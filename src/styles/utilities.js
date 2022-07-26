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

	${({ blogListContainer }) =>
		blogListContainer &&
		css`
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1.8rem;

			article {
				margin: unset;
				border: unset;
				background-color: #8b00ff20;
				height: 100%;
			}

			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`}
`;
