import styled from 'styled-components'

export const StyledForm = styled.form`
	width: 100%;
`

export const StyledLabel = styled.label`
	font-size: 20px;
	top: ${props => props.isFocused ? '0px' : '34px'};
	cursor: text;
	position: relative;
	transition: top 0.5s;
`

export const StyledInput = styled.input`
	height: 40px;
	width: 100%;
	font-size: 20px;
	margin-bottom: 1.5rem;
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.mediumGrey};
`

export const StyledTextarea = styled.textarea`
	width: 100%;
	height: 40px;
	font-size: 20px;
	margin-bottom: 2rem;
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.mediumGrey};
`

export const StyledCheckboxContainer = styled.div`
	margin-bottom: 1rem;
`

export const StyledCheckbox = styled.input`
	margin-right: 4px;
`

export const StyledCheckboxLabel = styled.label`
	margin: auto;
	color: ${props => props.theme.colors.black};
`

export const StyledFile = styled.input`
	margin-bottom: 1rem;
	vertical-align: center;
`
