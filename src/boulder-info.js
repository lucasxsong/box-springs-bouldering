import React, { PureComponent } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './App.css';
import BoulderModal from './boulder-modal';

export default class BoulderInfo extends PureComponent {
	state = {
		modalInfo: null
	};

	_openModal = () => {
		this.setState({ showModal: this.info });
	};


	render() {
		const { info } = this.props;

		return (
			<>
				<Card>
					<Image
                        src={`${process.env.PUBLIC_URL} ${info.image}`}
                        className='boulder-image'
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
