import React, { PureComponent } from 'react';
import { Card, Image, Table } from 'semantic-ui-react';
import './App.css';
import BoulderModal from './boulder-modal';
import ClimbPreview from './climb-preview';

export default class BoulderInfo extends PureComponent {
	state = {
		modalInfo: null,
	};

	_openModal = () => {
		this.setState({ showModal: this.info });
	};

	render() {
		const { info } = this.props;

		var isMobile = window.screen.width < 800;
		var numClimbs = info.climbs.length;
		var showClimbs = numClimbs > 3 ? 3 : numClimbs;
		if (isMobile && showClimbs === 3) showClimbs -= 1;
		var climbSummary = info.climbs
			.sort(function (a, b) {
				return b.stars - a.stars;
			})
			.slice(0, showClimbs);

		return (
			<>
				<Card>
					<Image src={info.image} />
					<Card.Content>
						<Card.Header>{info.boulder}</Card.Header>
						<Card.Meta>{info.area}</Card.Meta>
						<Card.Description>
							<Table basic="very">
								<Table.Body>
									{climbSummary.map((climb) => {
										return <ClimbPreview climb={climb} />;
									})}
								</Table.Body>
							</Table>
						</Card.Description>
					</Card.Content>
					<BoulderModal info={info} />
				</Card>
			</>
		);
	}
}
