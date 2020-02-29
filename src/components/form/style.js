import styled, { css } from 'styled-components'

export const StyledForm = styled.form`
	width: 100%;
`

export const StyledLabel = styled.label`
	font-size: 1.5rem;
	color: ${props => props.theme.colors.black};
	${props => props.required? css`
		&:after {
			content: "*";
			display: inline;
			color: red;
		}
	` : 'none'}
`

export const StyledInput = styled.input`
	width: 100%;
	height: 2.5rem;
	margin-bottom: 1rem;
`

export const StyledTextarea = styled.textarea`
	width: 100%;
	margin-bottom: 1rem;
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
