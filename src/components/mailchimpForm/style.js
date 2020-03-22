import styled from 'styled-components'

export const StyledForm = styled.form`

`

export const StyledFormTitle = styled.label`
	color: ${props => props.theme.colors.white};
	text-align: center;
	display: block;
	margin: 1rem 0;
	font-size: 1.5rem;
	font-weight: 500;
`

export const StyledInputWrapper = styled.div`
	display: flex;
	margin-bottom: 1rem;
`

export const StyledInput = styled.input`
	flex-grow: 2;
	height: 36px;
	border: none;
	padding-left: 10px;
	::placeholder {
		color: ${props => props.theme.colors.black};
	}
`

export const StyledSubmit = styled.input`
	height: 36px;
	padding: 4px 16px;
	border: none;
	background: ${props => props.theme.colors.yellow};
	font-weight: 500;
	color: ${props => props.theme.colors.black};
	cursor: pointer;
`
