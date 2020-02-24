import React from 'react'
import { withTheme } from 'styled-components'

import { ContainerStatic, Row, Column } from '../grid'
import {

} from './style'

export const Footer = withTheme(({ theme }) => (
	<ContainerStatic background={theme.colors.black}>
		<Row>
			<Column xs="12" md="6" lg="3">
				
			</Column>
			<Column xs="12" md="6" lg="3">

			</Column>
			<Column xs="12" md="6" lg="3">

			</Column>
			<Column xs="12" md="6" lg="3">

			</Column>
		</Row>
	</ContainerStatic>
))
