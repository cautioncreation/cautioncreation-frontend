import styled from "styled-components"

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	padding: 8px 16px;
	background: ${props => props.theme.colors.black};
	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		background: ${props => props.scrollPosition === 0 ? 'none' : props.theme.colors.black};
	}
`
export const StyledBrand = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	text-decoration: none;
`
export const StyledLogo = styled.img`
	height: 48px;
	float: left;
	&:hover {
		animation: logoScale 0.5s infinite alternate;
	}

	@keyframes logoScale {
		from {transform: scale(1)}
		to {transform: scale(1.25)}
	}
`
export const StyledBrandName = styled.h1`
	display: none;
	margin: 0;
	font-weight: 400;
	line-height: 1;
	color: ${props => props.theme.colors.white};
	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		display: inline-block;
	}
`
