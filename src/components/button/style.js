import styled, { css } from 'styled-components'

export const StyledLink = styled.a`
	display: flex;
	flex: none;
	align-items: center;
	text-decoration: none;
`

export const StyledButton = styled.button`
	font-weight: 600;
	font-size: 1.25rem;
	font-family: ${props => props.theme.fonts.secondary};
	line-height: 1;
	cursor: pointer;
	border: 0.125rem solid ${props => props.theme.colors.blue};
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	transition: background 1s;
	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.blue};
	&:hover {
		color: ${props => props.theme.colors.blue};
		background: none;
	}

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
		&:hover {
			${props => props.yellow ? css`
				color: ${props => props.theme.colors.black};
				background: ${props => props.theme.colors.yellow};
			` : css`
				color: ${props => props.theme.colors.white};
				background: ${props => props.theme.colors.blue};
			`}
		}
	` : null}

	${props => props.pill ? css`
		border-radius: 20px;
	` : null}

	${props => props.large ? css`
		font-size: 2rem;
		${props => props.pill ? css`
			border-radius: 26px;
		` : null}
	` : null}
`
