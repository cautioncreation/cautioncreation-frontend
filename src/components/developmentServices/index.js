import React from 'react'

import { SectionStatic, Row } from '../grid'
import { ServiceCard } from '../serviceCard'

import {
	StyledTitle,
} from './style'

export const DevelopmentServices = () => (
	<SectionStatic>
		<StyledTitle>Development Services</StyledTitle>
		<Row>
			<ServiceCard
				hideFeatures
				service="Themed Web Development"
				price="$800.00"
				paragraph="A straightforward solution for businesses looking to increase their reach on the web."
				subtitle="Package features:"
				features={[
					"CMS Integration",
					"Top Quality Images",
					"Professional Theme",
					"2-6 Week Turnaround",
					"Your choice of plugins",
					"Included Email at your domain",
				]}
			/>
			<ServiceCard
				hideFeatures
				service="Custom Web Development"
				price="$1400.00"
				paragraph="A personalized, easy-to-manage website for companies with a defined brand identity."
				subtitle="Package features:"
				features={[
					"I Developed Theme",
				]}
			/>
			<ServiceCard
				hideFeatures
				service="Application Development"
				price="$2000.00"
				paragraph="A full-stack application with advanced features for businesses with expansive requirements."
				subtitle="Package features:"
				features={[
					"Themed Wordpress CMS",
				]}
			/>
		</Row>
 	</SectionStatic>
)
