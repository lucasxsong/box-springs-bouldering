import _ from 'lodash';
import React from 'react';
import {
	Button,
	Header,
	Icon,
	Image,
	Modal,
	Table,
	Label,
	Rating
} from 'semantic-ui-react';

// this.labelColor = {};

const colors = ['green', 'green', 'blue', 'blue', 'red', 'red', 'black', 'black;']

const BoulderModal = props => (
	<Modal closeIcon trigger={<Button>View Climbs</Button>}>
		<Modal.Header>{props.info.boulder}</Modal.Header>
		<Modal.Content image scrolling>
			<Image
				size="medium"
				src="https://react.semantic-ui.com/images/wireframe/image.png"
				wrapped
			/>

			<Modal.Description>
				<Table>
					<Table.Body>
						{props.info.climbs.map(climb => (
							<Table.Row>
								<Table.Cell>
									<Label color={colors[climb.grade]} ribbon>
										V{climb.grade}
									</Label>
								</Table.Cell>
								<Table.Cell>{climb.name}</Table.Cell>
								<Table.Cell>
									<Rating
										icon="star"
										defaultRating={climb.stars}
										maxRating={4}
									/>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</Modal.Description>
		</Modal.Content>
	</Modal>
);

export default BoulderModal;
