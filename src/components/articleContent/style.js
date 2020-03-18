import styled from 'styled-components'

import ReactMarkdown from "react-markdown"

export const StyledArticle = styled(ReactMarkdown)`
	max-width: calc(70ch);
	margin-left: auto;
	margin-right: auto;
	img {
		max-width: 100%;
	}

	h1 {
		margin-top: 3rem;
		margin-bottom: 1rem;
	}

	p {
		@media(min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: 1.25rem;
		}
	}
`
