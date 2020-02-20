import React from 'react'

import { Container, Row, Column } from '../grid'
import { Header } from '../header'
import { Button } from '../button'
import {
	StyledBackground,
	StyledTopText,
	StyledTitle,
	StyledBottomText,
} from './style'

export const HomeBlog = ({ src1, src2 }) => (
	<Container>
		<Header
			title='Check Out Our Blog'
			text="Whether You're An Owner Or A Coder, We've Got You"
		/>
		<Row>
			<Column xs='12' lg='6' noPadding>
				<StyledBackground fluid={src1} critical>
					<Container>
						<Row>
							<Column xs='0' lg='1' xl='2'/>
							<Column xs='12' lg='10' xl='8' flex center>
								<StyledTopText>I'm an Owner</StyledTopText>
								<StyledTitle>Web Management</StyledTitle>
								<StyledBottomText>
									Learn the best ways to skyrocket traffic to your website over time!
								</StyledBottomText>
								<Button pill>Business Blog</Button>
							</Column>
							<Column xs='0' lg='1' xl='2'/>
						</Row>
					</Container>
				</StyledBackground>
			</Column>
			<Column xs='12' lg='6' noPadding>
				<StyledBackground fluid={src2} critical>
					<Container>
						<Row>
							<Column xs='0' lg='1' xl='2'/>
							<Column xs='12' lg='10' xl='8' flex center>
								<StyledTopText>I'm a Coder</StyledTopText>
								<StyledTitle>Web Development</StyledTitle>
								<StyledBottomText>
									No matter your experience, learn helpful concepts and best practices!
								</StyledBottomText>
								<Button pill yellow>Developer Blog</Button>
							</Column>
							<Column xs='0' lg='1' xl='2'/>
						</Row>
					</Container>
				</StyledBackground>
			</Column>
		</Row>
	</Container>
)
