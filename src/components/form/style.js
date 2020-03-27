import styled from 'styled-components'

export const Form = styled.form`
	width: 100%;
`

export const Label = styled.label`
	font-size: 20px;
	top: ${props => props.isFocused ? '0px' : '34px'};
	cursor: text;
	position: relative;
	transition: top 0.5s;
`

export const Input = styled.input`
	background: none;
	height: 40px;
	width: 100%;
	font-size: 20px;
	margin-bottom: 1.5rem;
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.accent};
`

export const Textarea = styled.textarea`
	background: none;
	width: 100%;
	height: 40px;
	font-size: 20px;
	margin-bottom: 2rem;
	border: none;
	border-bottom: 1px solid ${props => props.theme.colors.accent};
`

export const CheckboxContainer = styled.div`
	margin-bottom: 1rem;
`

export const Checkbox = styled.input`
	margin-right: 4px;
`

export const CheckboxLabel = styled.label`
	margin: auto;
`

export const File = styled.input`
	margin-bottom: 1rem;
	vertical-align: center;
`
