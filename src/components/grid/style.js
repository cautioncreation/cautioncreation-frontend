import styled from 'styled-components'

export const StyledRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
`

export const StyledColumn = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-left: 15px;
	padding-right: 15px;

	@media(min-width: ${props => props.theme.breakpoints.xs}) {
		min-height: 1px;
		width: 	${props => props.xs ? props.xs /0.12 + "%" : null};
		min-height: ${props => props.xs === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.sm}) {
		min-height: 1px;
		width: ${props => props.sm ? props.sm /0.12 + "%" : null};
		min-height: ${props => props.sm === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.md}) {
		min-height: 1px;
		width: ${props => props.md ? props.md /0.12 + "%" : null};
		min-height: ${props => props.md === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		min-height: 1px;
		width: ${props => props.lg ? props.lg /0.12 + "%" : null};
		min-height: ${props => props.lg === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.xl}) {
		min-height: 1px;
		width: ${props => props.xl ? (props.xl /0.12 + "%") : null};
		min-height: ${props => props.xl === '0' ? "0" : null};
	}
`

export const StyledSection = styled.section`
	width: 100%;
	padding: 15px;
	margin-top: 60px;
	margin-bottom: 100px;
	background: ${props => props.background};
`

export const StyledContainer = styled.div`
	width: 100%;
	padding: 15px;
	background: ${props => props.background};
`

export const StyledContainerStatic = styled(StyledContainer)`
	margin-right: auto;
	margin-left: auto;
	padding: 0;

	@media(min-width: ${props => props.theme.breakpoints.sm}) {
		max-width: 540px;
	}

	@media(min-width: ${props => props.theme.breakpoints.md}) {
		max-width: 720px;
	}

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		max-width: 960px;
	}

	@media(min-width: ${props => props.theme.breakpoints.xl}) {
		max-width: 1140px;
	}
`
