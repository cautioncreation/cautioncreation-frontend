import styled, { css } from 'styled-components'

export const StyledForm = styled.form`
	width: 100%;
	padding: 15px;
`

export const StyledLabel = styled.label`
	font-size: 1.5rem;
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

export const StyledCheckbox = styled.input`
	width: 24px;
	height: 24px;
	margin-right: 4px;
`

export const StyledFile = styled.input`
	margin-bottom: 1rem;
`
