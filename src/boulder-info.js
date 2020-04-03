import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Card, Icon, Image, Modal, Button, Header } from 'semantic-ui-react';
import _ from 'lodash'
import './App.css';
import BoulderModal from './boulder-modal';

export default class BoulderInfo extends PureComponent {
	state = {
		modalInfo: null
	};

	_openModal = () => {
		console.log('clickced');
		this.setState({ showModal: this.info });
	};


	render() {
		const { info } = this.props;

		return (
			<>
				<Card>
					<Image
						src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
						wrapped
						ui={false}
					/>
					<Card.Content>
						<Card.Header>{info.boulder}</Card.Header>
						<Card.Meta>{info.area}</Card.Meta>
						<Card.Description>
                        {info.numClimbs} Climbs
						</Card.Description>
					</Card.Content>
                    <BoulderModal info={info}/>
				</Card>
			</>
		);
	}
}

const BoulderInfoWrapper = styled.div`
	width: 40vw;
	height: 40vh;
`;

const HeaderWrapper = styled.h2``;
