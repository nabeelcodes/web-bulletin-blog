import styled from 'styled-components';

export const StyledButton = styled.button`
	display: grid;
	place-content: center;
	min-width: 50px;
	min-height: 50px;
	position: fixed;
	right: 40px;
	bottom: 40px;
	background-color: ${({ theme }) => theme.colors.secondaryAccent};
	border: none;
	border-radius: 50%;
	cursor: pointer;
	transition: bottom 0.325s linear;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	&.move-up {
		bottom: 120px;
	}

	@media ${({ theme }) => theme.breakpoints.ipad} {
		right: 50px;
	}

	@media ${({ theme }) => theme.breakpoints.sm} {
		right: 30px;
		bottom: 30px;
	}
`;
