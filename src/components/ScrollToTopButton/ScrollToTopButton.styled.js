import styled from 'styled-components';

export const StyledButton = styled.button`
	position: fixed;
	right: 100px;
	bottom: 120px;
	padding: 1rem;
	background-color: white;
	color: white;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	@media ${({ theme }) => theme.breakpoints.hover} {
		&:hover {
			box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px,
				rgba(0, 0, 0, 0.23) 0px 3px 10px;
		}
	}

	@media ${({ theme }) => theme.breakpoints.ipad} {
		right: 50px;
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		right: 20px;
	}
`;
