import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
	color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	transition: background 1.4s ease;
    text-decoration: none;

	@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
	}

	transition: all 0.2s
	display: block
    text-transform: uppercase

      &:after
        content: ''
        display: block
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        height: 4px  
        background-color: #f48fb1
        animation: slide-out 300ms ease-in-out forwards
      &:hover
        background: lighten(#eceff1,5%)
        color: #546e7a
        &:after
          animation: slide-in 300ms

		  @keyframes slide-out
		  0%
			transform: none
		  100%
			transform: translate(100%,0)
		 @keyframes slide-in
		  0%
			transform: translate(-100%,0)
		  100%
			transform: none
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
