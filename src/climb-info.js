import React, { Component } from 'react';
import {
	Accordion,
	Table,
	Rating,
	Label,
	Header,
	Grid,
	Embed,
	Icon,
} from 'semantic-ui-react';
import './App.css';

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

export default class ClimbInfo extends Component {
	state = { activeIndex: null, showVideo: false };

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	showVideo = () => {
		this.setState((prevState) => ({ showVideo: !prevState.showVideo }));
	};

	returnId = (video) => {
		return video.split('v=')[1];
	};

	render() {
		const { activeIndex } = this.state;
		const { climb } = this.props;
		return (
			<Accordion fluid styled>
				<Accordion.Title active={0} index={0} onClick={this.handleClick}>
					<Table.Row>
						<Table.Cell width={2}>
							<Label color={colors[climb.grade]} ribbon>
								<b>V{climb.grade}</b>
							</Label>
						</Table.Cell>
						<Table.Cell width={4}>
							<Rating
								icon="star"
								defaultRating={climb.stars}
								maxRating={4}
								size="small"
								disabled
							/>
						</Table.Cell>
						<Table.Cell width={10}>
							<Header size="medium">{climb.name}</Header>
						</Table.Cell>
						<Table.Cell width={4}>{climb.height}ft</Table.Cell>
					</Table.Row>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0}>
					<Grid>
						<Grid.Row columns={4}>
							<Grid.Column width={5}>
								<Label>{climb.fa}</Label>
								<div>
									{climb.video && (
										<Icon
											size="large"
											name="youtube"
											className="youtube-icon"
											onClick={this.showVideo}
										/>
									)}
								</div>
							</Grid.Column>
							<Grid.Column width={10}>{climb.desc}</Grid.Column>
						</Grid.Row>
						<Grid.Row textAlign="right" columns={1}>
							<Grid.Column width={15}>
								{this.state.showVideo && (
									<Embed id={this.returnId(climb.video)} source="youtube" active/>
								)}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Accordion.Content>
			</Accordion>
		);
	}
}
