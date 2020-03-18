import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const CodeRenderer = ({ language, value, theme }) => {
  return (
    <SyntaxHighlighter
			language={language}
			style={atomDark}
			showLineNumbers
			>
      {value}
    </SyntaxHighlighter>
  )
}
