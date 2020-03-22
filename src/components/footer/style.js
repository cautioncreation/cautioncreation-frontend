import styled from 'styled-components'

export const StyledFooter = styled.footer`
	width: 100%;
	align-self: flex-end;
`

export const StyledFooterLink = styled.a`
	display: block;
	text-align: center;
	margin: 8px 0 8px;
	line-height: 1.4;
	color: ${props => props.theme.colors.lightBlue};
	font-weight: 500;
`

export const StyledLogoLink = styled.a`
	display: block;
	cursor: pointer;
	&:hover {
		animation: logoScaleFooter 0.5s infinite alternate;
	}

	@keyframes logoScaleFooter {
		from {transform: scale(1)}
		to {transform: scale(1.25)}
	}
`

export const StyledLogo = styled.img`
	width: 100px;
	margin: 0 auto;
	display: none;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
	}
`


export const StyledSocialContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	max-height: 100%;
`

export const StyledSocialTitle = styled.h2`
	color: ${props => props.theme.colors.white};
	text-align: center;
	display: none;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
	}
`

export const StyledSocialLink = styled.a`
	display: block;
`

export const StyledSocialIcon = styled.img`
	width: 48px;
`
