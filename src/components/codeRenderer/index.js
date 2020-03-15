import React from "react"
import { withTheme } from 'styled-components'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark, docco } from "react-syntax-highlighter/dist/esm/styles/prism"

export const CodeRenderer = withTheme(({ language, value, theme }) => {
  return (
    <SyntaxHighlighter
			language={language}
			style={(theme.theme === "dark" ? atomDark : docco)}
			showLineNumbers
			>
      {value}
    </SyntaxHighlighter>
  )
})
