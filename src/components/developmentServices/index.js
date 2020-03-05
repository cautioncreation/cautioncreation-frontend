import React from 'react'

import { SectionStatic, Row } from '../grid'

import { ServiceCard } from '../serviceCard'

export const DevelopmentServices = () => (
	<SectionStatic>
		<Row>
			<ServiceCard
				service="Themed Web Development"
				price="$800.00"
				paragraph="A straightforward solution for businesses looking to increase their reach on the web."
				subtitle="Potential features:"
				features={[
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
				]}
			/>
			<ServiceCard
				service="Custom Web Development"
				price="$1400.00"
				paragraph="A personalized, easy-to-manage website for companies with a defined brand identity."
				subtitle="Potential features:"
				features={[
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
				]}
			/>
			<ServiceCard
				service="Application Development"
				price="$2000.00"
				paragraph="A full-stack application with advanced features for businesses with expansive requirements."
				subtitle="Potential features:"
				features={[
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
					"Themed Wordpress CMS",
				]}
			/>
		</Row>
 	</SectionStatic>
)
