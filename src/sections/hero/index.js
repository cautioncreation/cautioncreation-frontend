import React from 'react'

import { Container, Row, Column } from '../../components/grid'

import * as S from './style'

export const Hero = ({ children, src, alt }) => (
	<S.Container>
		<S.Background Tag="div" fluid={src} alt={alt}>
			{children}
		</S.Background>
	</S.Container>
)

export const HeroSmall = ({ children, src, alt, title, text, darken, position }) => (
	<S.Container>
		<S.SmallBackground Tag="div" fluid={src} alt={alt} position={position}>
			{darken ? <S.Tint darken={darken} /> : null}
			<Container>
				<Row>
					<Column xs="0" lg="1" spacer />
					<S.TextColumn xs="12" lg="6">
						<S.Subtitle>{title}</S.Subtitle>
						<S.Title>{text}</S.Title>
					</S.TextColumn>
					<Column xs="0" lg="5" spacer />
				</Row>
			</Container>
		</S.SmallBackground>
	</S.Container>
)

export const CartoonHero = ({ background, subtitle, title, color, src, alt }) => (
	<S.CartoonContainer background={background}>
		<S.CartoonContainerStatic>
			<Row>
				<S.CartoonTextColumn xs="12" lg="8">
					<S.CartoonTextWrapper>
						<S.CartoonSubTitle>{subtitle}</S.CartoonSubTitle>
						<S.CartoonTitle color={color}>{title}</S.CartoonTitle>
					</S.CartoonTextWrapper>
				</S.CartoonTextColumn>
				<Column xs="2" lg="0"/>
				<Column xs="8" lg="4">
					<S.CartoonVector src={src} alt={alt}/>
				</Column>
				<Column xs="2" lg="0"/>
			</Row>
		</S.CartoonContainerStatic>
	</S.CartoonContainer>
)
