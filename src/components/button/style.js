import styled, { css } from 'styled-components'

export const Link = styled.a`
	display: inline-block;
	text-decoration: none;
`

export const Button = styled.button`
	font-weight: 600;
	font-size: 1.25rem;
	font-family: ${props => props.theme.fonts.secondary};
	line-height: 1;
	cursor: pointer;
	border: 0.125rem solid ${props => props.theme.colors.mediumBlue};
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	transition: background 1s;
	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.mediumBlue};
	&:hover {
		background: none;
		color: ${props => props.theme.colors.mediumBlue};
	}

	${props => props.fullWidth ? css`
		width: 100%;
	` : null}

	${props => props.lightBlue ? css`
		border: 0.125rem solid ${props => props.theme.colors.lightBlue};
		background: ${props => props.theme.colors.lightBlue};
	` : null}

	${props => props.yellow ? css`
		color: ${props => props.theme.colors.black};
		border: 2px solid ${props => props.theme.colors.yellow};
		background-color: ${props => props.theme.colors.yellow};
		&:hover {
			color: ${props => props.theme.colors.yellow};
			background: none;
		}
	` : null}

	${props => props.outline ? css`
		background: none;
		color: ${props => props.theme.colors.white};
		&:hover {
			${props => props.yellow ? css`
				color: ${props => props.theme.colors.black};
				background: ${props => props.theme.colors.yellow};
			` : css`
				color: ${props => props.theme.colors.white};
				background: ${props => props.theme.colors.lightBlue};
			`}
		}
	` : null}

	${props => props.pill ? css`
		border-radius: 20px;
	` : null}

	${props => props.large ? css`
		font-size: 1.5rem;
		${props => props.pill ? css`
			border-radius: 22px;
		` : null}
		@media(min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: 2rem;
			${props => props.pill ? css`
				border-radius: 26px;
			` : null}
		}

	` : null}
`
