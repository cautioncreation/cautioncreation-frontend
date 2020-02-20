import React from 'react'

import { ContainerStatic, Row } from '../grid'
import { Header } from '../header'
import { ExpandingItem } from '../expandingItem'
import Handshake from '../../images/svg/handshake.svg'
import Telescope from '../../images/svg/telescope.svg'
import Design from '../../images/svg/design.svg'
import Browser from '../../images/svg/browser.svg'
import Rocket from '../../images/svg/rocket.svg'
import Maintenance from '../../images/svg/maintenance.svg'

export const HomeProcess = (props) => (
	<ContainerStatic type='gradients' background='darkGrey' shadow>
		<Header title='Our Development Process' titleColor='white'/>
		<Row>
			<ExpandingItem src={Handshake} title='1. Intro'/>
			<ExpandingItem src={Telescope} title='2. Explore'/>
			<ExpandingItem src={Design} title='3. Design'/>
			<ExpandingItem src={Browser} title='4. Develop'/>
			<ExpandingItem src={Rocket} title='5. Deploy'/>
			<ExpandingItem src={Maintenance} title='6. Maintain'/>
		</Row>
	</ContainerStatic>
)
