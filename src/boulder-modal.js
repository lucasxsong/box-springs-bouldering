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
    Rating,
} from 'semantic-ui-react';
import ClimbInfo from './climb-info'

const BoulderModal = (props) => (
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
						{props.info.climbs.map((climb) => (
							// <Table.Row>
							// 	<Table.Cell>
							// 		<Label color={colors[climb.grade]} ribbon>
							// 			<b>V{climb.grade}</b>
							// 		</Label>
							// 	</Table.Cell>
                            //     <Table.Cell>
							// 		<Rating
							// 			icon="star"
							// 			defaultRating={climb.stars}
							// 			maxRating={4}
							// 			size="small"
							// 			disabled
							// 		/>
							// 	</Table.Cell>
							// 	<Table.Cell><Header size="medium">{climb.name}</Header></Table.Cell>
                            //     <Table.Cell>{climb.desc}</Table.Cell>
                            // </Table.Row>
                            <ClimbInfo climb={climb}/>
						))}
					</Table.Body>
				</Table>
			</Modal.Description>
		</Modal.Content>
	</Modal>
);

export default BoulderModal;
