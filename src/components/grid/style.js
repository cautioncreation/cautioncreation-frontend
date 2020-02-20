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
	display: ${props => props.flex ? 'flex' : null};
	flex-direction: ${props => props.row && props.flex ? 'row' : 'column'};
	align-items: ${props => props.center ? 'center' : null};
	justify-content: ${props => props.center ? 'center' : null};
	padding-left: 15px;
	padding-right: 15px;
	padding-bottom: ${props => props.noPadding ? '0px !important' : null};

	@media(min-width: ${props => props.theme.breakpoints.xs}) {
		min-height: 1px;
		padding-bottom: 40px;
		width: 	${props => props.xs ? props.xs /0.12 + "%" : null};
		min-height: ${props => props.xs === '0' ? "0" : null};
		padding-bottom: ${props => props.xs === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.sm}) {
		min-height: 1px;
		padding-bottom: 40px;
		width: ${props => props.sm ? props.sm /0.12 + "%" : null};
		min-height: ${props => props.sm === '0' ? "0" : null};
		min-height: ${props => props.sm === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.md}) {
		min-height: 1px;
		padding-bottom: 40px;
		width: ${props => props.md ? props.md /0.12 + "%" : null};
		min-height: ${props => props.md === '0' ? "0" : null};
		min-height: ${props => props.md === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.lg}) {
		min-height: 1px;
		padding-bottom: 40px;
		width: ${props => props.lg ? props.lg /0.12 + "%" : null};
		min-height: ${props => props.lg === '0' ? "0" : null};
		min-height: ${props => props.lg === '0' ? "0" : null};
	}

	@media(min-width: ${props => props.theme.breakpoints.xl}) {
		min-height: 1px;
		padding-bottom: 40px;
		width: ${props => props.xl ? (props.xl /0.12 + "%") : null};
		min-height: ${props => props.xl === '0' ? "0" : null};
		min-height: ${props => props.xl === '0' ? "0" : null};
	}
`


export const StyledContainer = styled.section.attrs(props => ({
  marginTop: props.fluid ? '0px' : '40px',
	background: props.type && props.background ? props.theme[props.type][props.background] : null,
	boxShadow: props.shadow ? props.theme.shadows.light : null,
	padding: props.noPadding ? '0' : null
}))`
	width: 100%;
	margin-top: ${props => props.marginTop};
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	background: ${props => props.background};
	box-shadow: ${props => props.boxShadow};
	padding: ${props => props.padding}
`

export const StyledContainerStatic = styled.div`
	margin-right: auto;
	margin-left: auto;

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
