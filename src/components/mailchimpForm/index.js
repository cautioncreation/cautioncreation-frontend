import React from 'react'

import {
	StyledFormTitle,
	StyledForm,
	StyledInputWrapper,
	StyledInput,
	StyledSubmit,
} from './style'

export const MailchimpForm = () => (
	<div id="mc_embed_signup">
		<StyledForm
			action="https://cautioncreation.us19.list-manage.com/subscribe/post?u=5beb28088a2412ca5a7539c07&amp;id=42bc8764dd"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			target="_blank"
			novalidate
		>
			<StyledFormTitle>Subscribe to our Newsletter</StyledFormTitle>
			<StyledInputWrapper>
				<StyledInput type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" />
				<div id="mce-responses">
					<div id="mce-error-response" style={{display: 'none'}} />
					<div id="mce-success-response" style={{display: 'none'}} />
				</div>
	    	<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
					<input type="text" name="b_5beb28088a2412ca5a7539c07_42bc8764dd" tabindex="-1" value="" />
				</div>
				<StyledSubmit type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe" />
			</StyledInputWrapper>
		</StyledForm>
	</div>
)
