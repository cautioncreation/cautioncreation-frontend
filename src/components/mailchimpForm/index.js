import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import * as S from './style'

export const MailchimpForm = () => {
	const [email, setEmail] = useState("")

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handleSubmit = (e) => {
    e.preventDefault()

		addToMailchimp(email)
    .then(({ msg, result }) => {
      if (result !== 'success') {
          throw msg
      }
      alert(msg)
    })
    .catch((err) => {
      console.log('err', err)
      alert(err)
    })
  }

	return (
		<div>
			<S.Form onSubmit={handleSubmit}>
				<S.FormTitle for="mailchimpEmail">Subscribe to our Newsletter</S.FormTitle>
				<S.InputWrapper>
					<S.Input type="email" name="email" placeholder="Email Address" id="mailchimpEmail" onChange={handleEmailChange}/>
		    	<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
						<input type="text" name="b_5beb28088a2412ca5a7539c07_42bc8764dd" tabIndex="-1" />
					</div>
					<S.Submit type="submit" value="Join" name="submit" />
				</S.InputWrapper>
			</S.Form>
		</div>
	)
}
