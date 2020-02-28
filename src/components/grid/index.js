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

export const Column = ({ children, xs, sm, md, lg, xl, spacer }) => (
	<StyledColumn xs={xs} sm={sm} md={md} lg={lg} xl={xl} spacer={spacer}>
		{children}
	</StyledColumn>
)

export const Section = ({ children, background }) => (
	<StyledSection background={background}>
		{children}
	</StyledSection>
)

export const Container = ({ children, background }) => (
	<StyledContainer background={background}>
		{children}
	</StyledContainer>
)

export const SectionStatic = ({ children, background }) => (
	<StyledSection background={background}>
		<StyledContainerStatic>
			{children}
		</StyledContainerStatic>
	</StyledSection>
)

export const ContainerStatic = ({ children, background }) => (
	<StyledContainer background={background}>
		<StyledContainerStatic>
			{children}
		</StyledContainerStatic>
	</StyledContainer>
)
