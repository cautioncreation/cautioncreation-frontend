import React from 'react'

import { Form, Input, Textarea, Checkbox } from '../form'
import { Button } from '../button'
import { SectionStatic, Row, Column } from '../grid'

import {
	StyledInfoContainer,
	StyledTitle,
	StyledInfo,
} from './style'

export const ContactForm = ({ data }) => (
	<SectionStatic>
		<Row>
			<Column xs="12" lg="8">
				<Form>
					<Row>
						<Column xs="12" md="6">
							<Input type="text" label="First Name" id="firstNameInput" name="first_name" required/>
						</Column>
						<Column xs="12" md="6">
							<Input type="text" label="Last Name" id="lastNameInput" name="last_name" required/>
						</Column>
						<Column xs="12" md="6">
							<Input type="email" label="Email Address" id="emailInput" name="email" required/>
						</Column>
						<Column xs="12" md="6">
							<Input type="text" label="Business Name" id="businessNameInput" name="business_name"/>
						</Column>
						<Column xs="12">
							<Textarea rows="6" label="Your Message" id="messageInput" name="message" required/>
						</Column>
						<Column xs="12">
							<Checkbox label="By checking this box, you are agreeing to the Privacy Policy and Cookie Policy." id="agreementCheckbox" name="agreement_checkbox" required/>
						</Column>
						<Column xs="12">
							<Button type="submit" yellow pill>
								Submit
							</Button>
						</Column>
					</Row>
				</Form>
			</Column>
			<Column xs="12" lg="4">
				<StyledInfoContainer>
					<StyledTitle>Phone</StyledTitle>
					<StyledInfo href="tel: 780-618-6340">
						+1 (780) 618 6340
					</StyledInfo>
				</StyledInfoContainer>
				<StyledInfoContainer>
					<StyledTitle>Email</StyledTitle>
					<StyledInfo href="mailto: hi@cautioncreation.com">
						hi@cautioncreation.com
					</StyledInfo>
				</StyledInfoContainer>
				<StyledInfoContainer>
					<StyledTitle>Address</StyledTitle>
					<StyledInfo href="tel: 780-618-6340">
						13035 200 St NW,
						<br />
						Edmonton AB, T5S 0E1
					</StyledInfo>
				</StyledInfoContainer>
			</Column>
		</Row>
	</SectionStatic>
)
