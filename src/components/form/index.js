import React, { useState } from 'react'

import * as S from './style'

export const Form = ({ children }) => (
	<S.Form method="post" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="bot-field" />
		{children}
	</S.Form>
)

export const Input = ({ id, label, type, name, required, placeholder }) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<>
		<S.Label isFocused={isFocused} htmlFor={id}>{placeholder}</S.Label>
		<S.Input
			type={type}
			id={id}
			name={name}
			required={required}
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

export const Textarea = ({ id, label, name, required, rows, placeholder }) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<>
		<S.Label isFocused={isFocused} htmlFor={id}>{placeholder}</S.Label>
		<S.Textarea
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
	<S.CheckboxContainer>
		<S.Checkbox type="checkbox" id={id} name={name} required={required} />
		<S.CheckboxLabel htmlFor={id} required={required}>
			{label}
		</S.CheckboxLabel>
	</S.CheckboxContainer>
)

export const File = ({ id, type, name, required, children }) => (
	<>
		<S.File type="file" id={id} name={name} required={required} />
	</>
)
