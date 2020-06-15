import React from 'react'
import { Helmet } from 'react-helmet'
import { normalize } from 'styled-normalize'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const Theme = ({ children, transparentNav, isDarkMode }) => {

	return (
		<ThemeProvider theme={isDarkMode === 'true' ? darkTheme : lightTheme}>
			<GlobalStyle transparentNav={transparentNav}/>
			<Helmet>
				<link href="https://fonts.googleapis.com/css?family=Exo:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="preconnect" crossorigin></link>
			</Helmet>
			{children}
		</ThemeProvider>
	)

}

export default Theme

const lightTheme = {
	theme: "light",
  colors: {
		white: '#ffffff',
		black: '#363636',
		yellow: "#E4EB17",

		lightBlue: "#42BFF5",
		mediumBlue: "#0088BB",
		darkBlue: "#113240",

		lightGrey: "#E3E3E3",
		mediumGrey: "#707070",
		darkGrey: "#121212",

		text: "#707070",
		header: "#121212",
		accent: "#0088BB",
		background: "#FFFFFF",
		backgroundSecondary: "#E3E3E3",
  },
	fonts: {
		primary: ['"Exo", sans-serif'],
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

const darkTheme = {
	theme: "dark",
  colors: {
		white: '#ffffff',
		black: '#363636',
		yellow: "#E4EB17",

		lightBlue: "#42BFF5",
		mediumBlue: "#0088BB",
		darkBlue: "#113240",

		lightGrey: "#E3E3E3",
		mediumGrey: "#707070",
		darkGrey: "#121212",

		text: "#E3E3E3",
		header: "#FFFFFF",
		accent: "#42BFF5",
		background: "#121212",
		backgroundSecondary: "#363636",
  },
	fonts: {
		primary: ['"Exo", sans-serif'],
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

	body, html {
		width: 100%;
		min-height: 100vh;
		background-color: ${props => props.theme.colors.background};
		&::-webkit-scrollbar {
	  	width: 15px;
		}
		&::-webkit-scrollbar-track {
		  background: ${props => props.theme.colors.lightGrey};
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 7.5px;
		  background-color: ${props => props.theme.colors.mediumGrey};
		}
	}

	#gatsby-focus-wrapper {
		display: flex;
		flex-wrap: wrap;
		min-height: 100vh;
		padding-top: ${props => props.transparentNav === true ? '0px' : '64px'};
	}

	a {
		font-weight: 500;
		text-decoration: none;
		color: ${props => props.theme.colors.accent};
	}

	*, ::after, ::before {
		font-weight: 400;
		line-height: 1.4;
		box-sizing: border-box;
		color: ${props => props.theme.colors.text};
		font-family: ${props => props.theme.fonts.primary};
	}

	input:focus, textarea:focus, select:focus, button:focus{
    outline: none;
  }

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
		line-height: 1.15;
		color: ${props => props.theme.colors.header};
		font-family: ${props => props.theme.fonts.primary};
	}
`
