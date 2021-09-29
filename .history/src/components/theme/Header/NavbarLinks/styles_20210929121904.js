import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
	color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	transition: background .1s ease-in-out;
    text-decoration: none;
	text-tr
	cursor:pointer;
	display: inline;
	width: max-content;
	height:auto;
	padding: .3rem .4rem;
	background-color: #ffff38;
	color: #000;
	border-radius:8px;
	border: 2px solid #2121210;

	@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	}
	}
	.active{
		background-color: #ffff38;
		color: #000;
		border-radius:5px;
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