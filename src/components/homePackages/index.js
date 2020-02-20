import React from 'react'

import { ContainerStatic, Row } from '../grid'
import { Header } from '../header'
import { ProductCard } from '../productCard'
import { Button } from '../button'
import {
	StyledTitle,
	StyledText,
	StyledHook,
	StyledContainer
} from './style'

export const HomePackages = () => (
 	<ContainerStatic>
		<Header
			title="Maintenance Packages"
			text="Monthly Payments, Constant Service"
		/>
		<Row>
			<ProductCard xs='12' lg='4' title='Partnership Package' starCount={1}>
				<StyledTitle>What's Included</StyledTitle>
				<StyledText>
					✔ Weekly backups<br />
					✔ Constant security scans<br />
					✔ 24/7 uptime monitoring<br />
					✔ Website performance checks<br />
					✔ Detailed report every monday<br />
					✔ Plugin, theme and core updates
				</StyledText>
				<StyledHook>Starting at $60 / month</StyledHook>
				<StyledContainer>
					<Button pill>Learn More</Button>
				</StyledContainer>
			</ProductCard>
			<ProductCard xs='12' lg='4' title='Partnership Package' starCount={2}>
				<StyledTitle>What's Included</StyledTitle>
				<StyledText>
					The Partnership package plus:<br />
					✔ Daily backups<br />
					✔ Google analytics integration<br />
					✔ Extensive broken link monitoring<br />
					✔ Weekly Performance Optimizations<br />
					✔ 2 hours of development each month

				</StyledText>
				<StyledHook>Starting at $180 / month</StyledHook>
				<StyledContainer>
					<Button pill>Learn More</Button>
				</StyledContainer>
			</ProductCard>
			<ProductCard xs='12' lg='4' title='Partnership Package' starCount={3}>
				<StyledTitle>What's Included</StyledTitle>
				<StyledText>
					The Incorporated Package Plus:<br />
					✔ Hourly backups<br />
					✔<br />
					✔ Weekly SEO ranking tweaks<br />
					✔ Heavily discounted hourly rate<br />
					✔ 5 hours of development each month

				</StyledText>
				<StyledHook>Starting at $600 / month</StyledHook>
				<StyledContainer>
					<Button pill>Learn More</Button>
				</StyledContainer>
			</ProductCard>
		</Row>
	</ContainerStatic>
)
