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

	${({ blogDetailsPage }) =>
		blogDetailsPage &&
		css`
			@media ${({ theme }) => theme.breakpoints.sm} {
				width: 90%;
			}
		`}
`;
