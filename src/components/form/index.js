import React from 'react'

import {
	StyledForm,
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

export const Input = ({ id, label, type, name, required, placeholder }) => (
	<StyledInput
		type={type}
		id={id}
		name={name}
		required={required}
		placeholder={placeholder}
	/>
)

export const Textarea = ({ id, label, name, required, rows, placeholder }) => (
	<StyledTextarea
		id={id}
		name={name}
		required={required}
		rows={rows}
		placeholder={placeholder}
	/>
)

export const Checkbox = ({ id, label, type, name, required }) => (
	<StyledCheckboxContainer>
		<StyledCheckbox type="checkbox" id={id} name={name} required={required} />
		<StyledCheckboxLabel for={id} required={required}>
			{label}
		</StyledCheckboxLabel>
	</StyledCheckboxContainer>
)

export const File = ({ id, type, name, required, children }) => (
	<>
		<StyledFile type="file" id={id} name={name} required={required} />
	</>
)
