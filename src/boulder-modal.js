import React from 'react';
import {
	Button,
	Image,
	Modal,
	Table,
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
                            <ClimbInfo climb={climb}/>
						))}
					</Table.Body>
				</Table>
			</Modal.Description>
		</Modal.Content>
	</Modal>
);

export default BoulderModal;
