import React from 'react'
import { normalize } from 'styled-normalize'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const Theme = ({ children, path }) => {

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle path={path}/>
			{children}
		</ThemeProvider>
	)

}

export default Theme

const theme = {
  colors: {
		white: '#ffffff',
		black: '#363636',
		blue: "#42bff5",
		darkBlue: "#113240",
		mediumBlue: "#1D5C80",
		lightBlue: "#009GD0",
		yellow: "#E4EB17",
		mediumYellow: "#A3883B",
		darkYellow: "#525100",
		lightGreen: "#17EBAB",
		mediumGreen: "#78866b",
		darkGreen: "#405f2d",
		darkGrey: "#3A3A3A",
		lightGrey: "#F1F1F1",
		mediumGrey: "#707070",
  },
	fonts: {
		primary: ['"Dosis", sans-serif'],
	  secondary: ['"Exo", sans-serif'],
	},
	gradients: {
		black: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(112,112,112,1) 0%, rgba(54,54,54,1) 100%);",
		darkGrey: "linear-gradient(0deg, rgb(112, 112, 112) 0%, rgb(58, 58, 58) 100%)",
		lightGrey: "linear-gradient(0deg, rgb(112, 112, 112) 0%, rgba(58, 58, 58, 0.8) 100%)",
	},
	breakpoints: {
		xs: "0px",
		sm: "576px",
		md: "768px",
		lg: "992px",
		xl: "1200px",
		smDown: "575px",
		mdDown: "767px",
		lgDown: "991px",
		xlDown: "1199px",
	},
	shadows: {
		light: "2px 2px 10px 5px rgba(0,0,0,0.5)",
	}
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
	@import url('https://fonts.googleapis.com/css?family=Dosis|Exo&display=swap');

	body {
		width: 100%;
		min-height: 100%;
		padding-top: ${props => props.path === '/' ? '0px' : '64px'};
	}

	a {
		color: ${props => props.theme.colors.darkGrey};
		text-decoration: none;
		&:hover {

		}
	}

	*, ::after, ::before {
		font-family: ${props => props.theme.fonts.secondary};
		color: ${props => props.theme.colors.mediumGrey};
		font-weight: 300;
		box-sizing: border-box;
	}

	input:focus, textarea:focus, select:focus, button:focus{
        outline: none;
  }

	h1, h2, h3, h4, h5, h6 {
		font-weight: 500;
		font-family: ${props => props.theme.fonts.primary};
		color: ${props => props.theme.colors.black};
	}
`
