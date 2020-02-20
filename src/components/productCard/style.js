import styled from 'styled-components'

export const StyledContainer = styled.div`
	padding: 0 1.5rem 1rem;
	box-shadow: ${props => props.theme.shadows.light};
`
export const StyledDrape = styled.div`
	padding: 0;
`
export const StyledHeader = styled.div`
	background: ${props => props.theme.colors.darkGrey};
	padding-top: 0.5rem;
`
export const StyledTitle = styled.h1`
	margin: 0;
	text-align: center;
	color: ${props => props.theme.colors.white};
`
export const StyledStarContainer = styled.div`
	display: flex;
	justify-content: center;
`
export const StyledStar = styled.img`

`
export const StyledContent = styled.div`

`

export const StyledDrapePoint = styled.img`
	width: 100%;
	margin-top: -1px;
`
