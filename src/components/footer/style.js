import styled from 'styled-components'

export const Footer = styled.footer`
	width: 100%;
	align-self: flex-end;
`

export const FooterLink = styled.a`
	display: block;
	text-align: center;
	margin: 8px 0 8px;
	line-height: 1.4;
	color: ${props => props.theme.colors.lightBlue};
	font-weight: 500;
`

export const LogoLink = styled.a`
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

export const Logo = styled.img`
	width: 100px;
	margin: 0 auto;
	display: none;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
	}
`


export const SocialContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	max-height: 100%;
`

export const SocialTitle = styled.h2`
	color: ${props => props.theme.colors.white};
	text-align: center;
	display: none;
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
	}
`

export const SocialLink = styled.a`
	display: block;
`

export const SocialIcon = styled.img`
	width: 48px;
`
