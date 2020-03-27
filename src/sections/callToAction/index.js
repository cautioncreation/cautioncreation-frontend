import React from 'react'
import { withTheme } from 'styled-components'

import { ContainerStatic } from '../../components/grid'
import { Button } from '../../components/button'

import * as S from './style'

export const CallToAction = withTheme(({ theme }) => (
	<ContainerStatic background={theme.colors.darkBlue}>
		<S.Row>
			<S.Column xs="12" lg="6">
				<S.Title>
					How much will your website cost?
				</S.Title>
				<S.Text>
					Get a no commitment quote today!
				</S.Text>
			</S.Column>
			<S.Column xs="12" lg="6">
				<Button yellow href="/contact">
					Request A Quote
				</Button>
			</S.Column>
		</S.Row>
	</ContainerStatic>
))
