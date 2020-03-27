import React from 'react'

import { SectionStatic, Row } from '../../components/grid'
import { ServiceCard } from '../../components/serviceCard'

import * as S from './style'

export const MaintenancePackages = () => (
	<SectionStatic>
		<S.Title>WordPress Packages</S.Title>
		<Row>
			<ServiceCard
				service="Proprietor Package"
				price="$60.00 / month"
				paragraph="A straightforward solution for businesses looking to increase their reach on the web."
				subtitle="Package features:"
				features={[
					"Weekly backups",
					"Constant security scans",
					"24/7 uptime monitoring",
					"Weekly System updates",
					"Website performance checks",
					"Detailed report every monday"
				]}
			/>
			<ServiceCard
				service="Partnership Package"
				price="$180.00 / month"
				paragraph="A personalized, easy-to-manage website for companies with a defined brand identity."
				subtitle="Package features:"
				features={[
					"The Partnership package plus:",
					"Daily backups",
					"Discounted hourly rate",
					"Google analytics integration",
					"Extensive broken link monitoring",
					"Weekly Performance Optimizations",
					"3 hours of development each month"

				]}
			/>
			<ServiceCard
				service="Corporation Package"
				price="$300.00 / month"
				paragraph="A full-stack application with advanced features for businesses with expansive requirements."
				subtitle="Package features:"
				features={[
					"The Incorporated Package Plus:",
					"Hourly backups",
					"Weekly SEO improvements",
					"Copywriting & guest posts",
					"Hosting and domain included",
					"Heavily discounted hourly rate",
					"5 hours of development each month"

				]}
			/>
		</Row>
 	</SectionStatic>
)
