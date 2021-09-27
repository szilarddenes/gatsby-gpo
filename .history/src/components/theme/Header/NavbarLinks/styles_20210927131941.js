import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
	color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	transition: background 1.4s ease;
    text-decoration: none;
	cursor:pointer;

	@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	}
	}
	.active{
		background-color: #ffff38;
		color: #000;
		border-radius:5px;
		width: 100%;
		height:32px;
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
					margin-right: 1.45rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1.5rem;
					&:last-child {
							margin-bottom: unset;
					}
					&:first-child{
						margin-top: 5rem;
					}
			}
	`}
`;
