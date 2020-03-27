import React from 'react'

import { Form, Input, Textarea, Checkbox } from '../../components/form'
import { Button } from '../../components/button'
import { SectionStatic, Row, Column } from '../../components/grid'

import * as S from './style'

export const ContactForm = ({ data }) => (
	<SectionStatic>
		<S.PageTitle>Contact Us</S.PageTitle>
		<Row>
			<Column xs="12" md="8">
				<Form>
					<Row>
						<Column xs="12" md="6">
							<Input type="text" placeholder="First Name" id="firstNameInput" name="first_name" required/>
						</Column>
						<Column xs="12" md="6">
							<Input type="text" placeholder="Last Name" id="lastNameInput" name="last_name" required/>
						</Column>
						<Column xs="12" md="6">
							<Input type="email" placeholder="Email Address" id="emailInput" name="email" required/>
						</Column>
						<Column xs="12" md="6">
							<Input type="text" placeholder="Business Name" id="businessNameInput" name="business_name"/>
						</Column>
						<Column xs="12">
							<Textarea rows="1" placeholder="Your Message" id="messageInput" name="message" required/>
						</Column>
						<Column xs="12">
							<Checkbox label="By checking this box, you are agreeing to the Privacy Policy and Cookie Policy." id="agreementCheckbox" name="agreement_checkbox" required/>
						</Column>
						<Column xs="12">
							<Button type="submit">
								Submit
							</Button>
						</Column>
					</Row>
				</Form>
			</Column>
			<Column xs="12" md="4">
				<S.InfoContainer>
					<S.Title>Phone</S.Title>
					<S.Info href="tel: 780-618-6340">
						+1 (780) 618 6340
					</S.Info>
				</S.InfoContainer>
				<S.InfoContainer>
					<S.Title>Email</S.Title>
					<S.Info href="mailto: hi@cautioncreation.com">
						hi@cautioncreation.com
					</S.Info>
				</S.InfoContainer>
				<S.InfoContainer>
					<S.Title>Address</S.Title>
					<S.Info href="https://www.google.com/maps/place/13035+200+St+NW,+Edmonton,+AB+T5S+0E1/@53.5916904,-113.6666143,17z/data=!3m1!4b1!4m5!3m4!1s0x53a0271e4125eb8b:0x248ede7059613225!8m2!3d53.5916904!4d-113.6644256">
						13035 200 St NW,
						<br />
						Edmonton AB, T5S 0E1
					</S.Info>
				</S.InfoContainer>
			</Column>
		</Row>
	</SectionStatic>
)
