import styled from 'styled-components'

export const StyledSocialContainer = styled.div`

`

export const StyledTitle = styled.h1`
	text-align: center;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		display: none;
	}
`

export const StyledSocialWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	@media(min-width: ${props => props.theme.breakpoints.md}) {
		position: fixed;
		right: 0;
		top: 64px;
		bottom: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		a {
			margin-top: 1rem;
			margin-bottom: 1rem;
		}
	}
	a {
		svg {
			fill: ${props => props.theme.colors.header};
		}
	}
`
