import React from 'react'

import {
	StyledLink,
	StyledButton,
} from './style'

export const Button = (props) => {
  const { href, target, rel, children, disabled, isLoading, ...rest } = props

  const button = (
    <StyledButton disabled={disabled || isLoading} {...rest}>
      {children}
    </StyledButton>
  )

  if(href) {
    return (
      <StyledLink
        href={href}
        target={target || null}
        rel={rel}
      >
        {button}
      </StyledLink>
    )
	}
	else return button
}
