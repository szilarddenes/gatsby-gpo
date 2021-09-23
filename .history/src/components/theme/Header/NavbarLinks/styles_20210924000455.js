import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
	color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	padding: 16px 12px;
	// transition: color .2s ease;

    text-decoration: none;

		@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
		}
	&:hover{
		background: #ffff38;
		padding: 16px 12px;
		border-radius: 6px;
		width:fit-content;
		width:moz-fit-content;
		color: #000;
	}
  }

  ${({ desktop }) =>
		desktop
			? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1.65rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 2.3rem;

					&:last-child {
							margin-bottom: unset;
					}
					&:first-child{
						margin-top: 2rem;
					}
			}
	`}
`;
