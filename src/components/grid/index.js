import React from 'react'

import {
	StyledRow,
	StyledColumn,
	StyledContainer,
	StyledContainerStatic,
} from './style'

export const Row = ({ children }) => (
	<StyledRow>
		{children}
	</StyledRow>
)

export const Column = ({ children, xs, sm, md, lg, xl, noPadding, flex, row, center }) => (
	<StyledColumn xs={xs} sm={sm} md={md} lg={lg} xl={xl} noPadding={noPadding} flex={flex} row={row} center={center}>
		{children}
	</StyledColumn>
)

export const Container = ({ fluid, type, background, shadow, children, noPadding }) => (
	<StyledContainer fluid={fluid} type={type} background={background} shadow={shadow} noPadding={noPadding}>
		{children}
	</StyledContainer>
)

export const ContainerStatic = ({ fluid, type, background, shadow, children, noPadding }) => (
	<StyledContainer fluid={fluid} type={type} background={background} shadow={shadow} noPadding={noPadding}>
		<StyledContainerStatic>
			{children}
		</StyledContainerStatic>
	</StyledContainer>
)
