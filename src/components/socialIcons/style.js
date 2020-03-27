import styled from 'styled-components'

export const SocialLink = styled.a`
	transition: all 1s;
	display: inline-block;
	margin: 0px 16px;
	&:hover {
		transform: rotate(360deg);
	}
`

export const SocialIcon = styled.svg`
	width: 40px;
	height: 40px;
	fill: ${props => props.theme.colors.white};
`
