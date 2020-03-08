import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import {
	StyledSocialLink,
	StyledSocialIcon
} from './style'

export const SocialIcons = () => {
	const data = useStaticQuery(graphql`
    query socialIconsQuery {
			facebook:file(relativePath: { eq: "svg/facebook.svg" }) {
	      publicURL
	    }
			instagram:file(relativePath: { eq: "svg/instagram.svg" }) {
	      publicURL
	    }
			linkedIn:file(relativePath: { eq: "svg/linkedin.svg" }) {
	      publicURL
	    }
			twitter:file(relativePath: { eq: "svg/twitter.svg" }) {
	      publicURL
	    }
    }
  `)

	return (
		<>
		<StyledSocialLink>
			<StyledSocialIcon src={data.facebook.publicURL} alt="facebook icon" href="https://facebook.com/cautioncreationweb" />
		</StyledSocialLink>
		<StyledSocialLink>
			<StyledSocialIcon src={data.instagram.publicURL} alt="instagram icon" href="https://facebook.com/cautioncreationweb" />
		</StyledSocialLink>
		<StyledSocialLink>
			<StyledSocialIcon src={data.linkedIn.publicURL} alt="linkedIn icon" href="https://facebook.com/cautioncreationweb" />
		</StyledSocialLink>
		<StyledSocialLink>
			<StyledSocialIcon src={data.twitter.publicURL} alt="Twitter icon" href="https://facebook.com/cautioncreationweb" />
		</StyledSocialLink>
	</>
	)
}
