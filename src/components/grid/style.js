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
	padding: ${props => props.spacer ? '0 !important' : null};

	@media(min-width: ${props => props.theme.breakpoints.xs}) {
		width: ${props => props.xs ? props.xs /0.12 + "%" : null};
		padding-left: ${props => (props.xs === '0' ? '0px' : (props.xs > 0 ? '15px' : null))};
		padding-right: ${props => (props.xs === '0' ? '0px' : (props.xs > 0 ? '15px' : null))};
	}

	@media(min-width: ${props => props.theme.breakpoints.sm}) {
		width: ${props => props.sm ? props.sm /0.12 + "%" : null};
		padding-left: ${props => (props.sm === '0' ? '0px' : (props.sm > 0 ? '15px' : null))};
		padding-right: ${props => (props.sm === '0' ? '0px' : (props.sm > 0 ? '15px' : null))};
	}

	@media(min-width: ${props => props.theme.breakpoints.md}) {
		width: ${props => props.md ? props.md /0.12 + "%" : null};
		padding-left: ${props => (props.md === '0' ? '0px' : (props.md > 0 ? '15px' : null))};
		padding-right: ${props => (props.md === '0' ? '0px' : (props.md > 0 ? '15px' : null))};
	}

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		width: ${props => props.lg ? props.lg /0.12 + "%" : null};
		padding-left: ${props => (props.lg === '0' ? '0px' : (props.lg > 0 ? '15px' : null))};
		padding-right: ${props => (props.lg === '0' ? '0px' : (props.lg > 0 ? '15px' : null))};
	}

	@media(min-width: ${props => props.theme.breakpoints.xl}) {
		width: ${props => props.xl ? (props.xl /0.12 + "%") : null};
		padding-left: ${props => (props.xl === '0' ? '0px' : (props.xl > 0 ? '15px' : null))};
		padding-right: ${props => (props.xl === '0' ? '0px' : (props.xl > 0 ? '15px' : null))};
	}
`

export const StyledSection = styled.section`
	width: 100%;
	padding: 15px;
	margin: 0 0 120px;
	background: ${props => props.background};

	@media(min-width: ${props => props.theme.breakpoints.sm}) {
		margin: 0 0 60px;
	}
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
