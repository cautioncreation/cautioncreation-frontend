import React from 'react'

import * as S from './style'

export const Row = ({ children }) => (
	<S.Row>
		{children}
	</S.Row>
)

export const Column = ({ children, xs, sm, md, lg, xl, spacer }) => (
	<S.Column xs={xs} sm={sm} md={md} lg={lg} xl={xl} spacer={spacer}>
		{children}
	</S.Column>
)

export const Section = ({ children, background }) => (
	<S.Section background={background}>
		{children}
	</S.Section>
)

export const Container = ({ children, background }) => (
	<S.Container background={background}>
		{children}
	</S.Container>
)

export const SectionStatic = ({ children, background }) => (
	<S.Section background={background}>
		<S.ContainerStatic>
			{children}
		</S.ContainerStatic>
	</S.Section>
)

export const ContainerStatic = ({ children, background }) => (
	<S.Container background={background}>
		<S.ContainerStatic>
			{children}
		</S.ContainerStatic>
	</S.Container>
)
