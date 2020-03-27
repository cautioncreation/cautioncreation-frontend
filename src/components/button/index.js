import React from 'react'

import * as S from './style'

export const Button = (props) => {
  const { href, target, rel, children, disabled, isLoading, ...rest } = props

  const button = (
    <S.Button disabled={disabled || isLoading} {...rest}>
      {children}
    </S.Button>
  )

  if(href) {
    return (
      <S.Link
        href={href}
        target={target || null}
        rel={rel}
      >
        {button}
      </S.Link>
    )
	}
	else return button
}
