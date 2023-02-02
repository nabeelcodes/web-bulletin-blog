import styled from 'styled-components';

export const StyledLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;

	margin-inline: auto;
	max-width: ${({ maxWidth }) => maxWidth ?? '2000px'};
	min-height: 100vh;
	/* overflow: hidden; */

	main {
		flex: 1 0 100%;
	}
`;
