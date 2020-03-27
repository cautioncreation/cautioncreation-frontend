import styled from 'styled-components'

export const Form = styled.form`

`

export const FormTitle = styled.label`
	color: ${props => props.theme.colors.white};
	text-align: center;
	display: block;
	margin: 1rem 0;
	font-size: 1.5rem;
	font-weight: 500;
`

export const InputWrapper = styled.div`
	display: flex;
	margin-bottom: 1rem;
`

export const Input = styled.input`
	flex-grow: 2;
	height: 36px;
	border: none;
	padding-left: 10px;
	::placeholder {
		color: ${props => props.theme.colors.black};
	}
`

export const Submit = styled.input`
	height: 36px;
	padding: 4px 16px;
	border: none;
	background: ${props => props.theme.colors.yellow};
	font-weight: 500;
	color: ${props => props.theme.colors.black};
	cursor: pointer;
`
