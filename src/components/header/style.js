import styled from 'styled-components'

export const StyledContainer = styled.header`
	padding-top: 1rem;
	padding-bottom: 1.5rem;
`

export const StyledContainerClose = styled(StyledContainer)`
	padding-bottom: 0rem;
`

export const StyledTitle = styled.h1.attrs(props => ({
	titleColor: props.color ? props.theme.colors[props.color] : props.theme.colors.black
}))`
	text-align: center;
	margin-top: 0;
	font-weight: 500;
	margin-bottom: 0;
	font-size: 3rem;
	color: ${props => props.titleColor};
`

export const StyledText = styled.h1.attrs(props => ({
	textColor: props.color ? props.theme.colors[props.color] : props.theme.colors.blue
}))`
	text-align: center;
	margin-top: 0;
	font-weight: 400;
	font-size: 1.875rem;
	margin-bottom: 1rem;
	color: ${props => props.textColor};
`
