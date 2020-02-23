import React from 'react'

import {
	StyledRow,
	StyledColumn,
	StyledSection,
	StyledContainer,
	StyledContainerStatic,
} from './style'

export const Row = ({ children }) => (
	<StyledRow>
		{children}
	</StyledRow>
)

export const Column = ({ children, xs, sm, md, lg, xl }) => (
	<StyledColumn xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
		{children}
	</StyledColumn>
)

export const Section = ({ children }) => (
	<StyledSection>
		{children}
	</StyledSection>
)

export const Container = ({ children }) => (
	<StyledContainer>
		{children}
	</StyledContainer>
)

export const SectionStatic = ({ children }) => (
	<StyledSection>
		<StyledContainerStatic>
			{children}
		</StyledContainerStatic>
	</StyledSection>
)

export const ContainerStatic = ({ children }) => (
	<StyledContainer>
		<StyledContainerStatic>
			{children}
		</StyledContainerStatic>
	</StyledContainer>
)
