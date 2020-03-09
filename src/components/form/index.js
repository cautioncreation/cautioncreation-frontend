import React, { useState } from 'react'

import {
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledTextarea,
	StyledCheckboxContainer,
	StyledCheckbox,
	StyledCheckboxLabel,
	StyledFile,
} from './style'

export const Form = ({ children }) => (
	<StyledForm method="post" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="bot-field" />
		{children}
	</StyledForm>
)

export const Input = ({ id, label, type, name, required, placeholder }) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<>
		<StyledLabel isFocused={isFocused} htmlFor={id}>{placeholder}</StyledLabel>
		<StyledInput
			type={type}
			id={id}
			name={name}
			required={required}
			onFocus={() => {{setIsFocused(true)}}}
			onBlur={() => {
				if(document.getElementById(id).value === "") {
					setIsFocused(false)
				}
			}}
		/>
		</>
	)

}

export const Textarea = ({ id, label, name, required, rows, placeholder }) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<>
		<StyledLabel isFocused={isFocused} htmlFor={id}>{placeholder}</StyledLabel>
		<StyledTextarea
			id={id}
			name={name}
			required={required}
			rows="1"
			onFocus={() => {setIsFocused(true)}}
			onBlur={() => {
				if(document.getElementById(id).value === "") {
					setIsFocused(false)
				}
			}}
		/>
		</>
	)
}

export const Checkbox = ({ id, label, type, name, required }) => (
	<StyledCheckboxContainer>
		<StyledCheckbox type="checkbox" id={id} name={name} required={required} />
		<StyledCheckboxLabel htmlFor={id} required={required}>
			{label}
		</StyledCheckboxLabel>
	</StyledCheckboxContainer>
)

export const File = ({ id, type, name, required, children }) => (
	<>
		<StyledFile type="file" id={id} name={name} required={required} />
	</>
)
