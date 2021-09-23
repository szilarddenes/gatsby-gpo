import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
	color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

    text-decoration: none;

		@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
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
			padding: 4rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
