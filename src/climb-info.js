import React, { Component } from 'react';
import {
	Accordion,
	Table,
	Rating,
	Label,
	Header,
    Grid,
    Image
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
];

export default class ClimbInfo extends Component {
	state = { activeIndex: null };

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	render() {
		const { activeIndex } = this.state;
		const { climb } = this.props;
		return (
			<Accordion fluid styled>
				<Accordion.Title active={0} index={0} onClick={this.handleClick}>
					<Table.Row>
						<Table.Cell>
							<Label color={colors[climb.grade]} ribbon>
								<b>V{climb.grade}</b>
							</Label>
						</Table.Cell>
						<Table.Cell>
							<Rating
								icon="star"
								defaultRating={climb.stars}
								maxRating={4}
								size="small"
								disabled
							/>
						</Table.Cell>
						<Table.Cell>
							<Header size="medium">{climb.name}</Header>
						</Table.Cell>
						<Table.Cell>{climb.height}ft</Table.Cell>
					</Table.Row>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
					<Grid columns={3}>
						<Grid.Row>
							<Grid.Column width={4}>
								<Label>FA: {climb.fa}</Label>
							</Grid.Column>
							<Grid.Column width={10}>{climb.desc}</Grid.Column>
						</Grid.Row>
					</Grid>
				</Accordion.Content>
			</Accordion>
		);
	}
}
