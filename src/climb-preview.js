import React, { Component } from 'react';
import {
	Accordion,
	Table,
	Rating,
	Label,
	Header,
	Grid,
	Image,
	Transition,
} from 'semantic-ui-react';

const colors = [
	'green',
	'green',
	'blue',
	'blue',
	'red',
	'red',
	'brown',
	'brown',
	'black',
	'black',
	'pink',
	'pink',
];

export default class ClimbPreview extends Component {
	state = { activeIndex: null };

	render() {
		const { activeIndex } = this.state;
		const { climb } = this.props;
		return (
			<Table.Row>
				<Table.Cell width={2}>
					<Label style={{marginLeft: '5px'}} color={colors[climb.grade]} ribbon>
                        <Rating
						icon="star"
						defaultRating={climb.stars}
						maxRating={4}
						size="small"
						disabled
					/>
					</Label>
				</Table.Cell>
				<Table.Cell width={10}>
					<Header size="small">{climb.name}</Header>
				</Table.Cell>
			</Table.Row>
		);
	}
}
