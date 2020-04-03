import React from 'react';
import { Button, Image, Modal, Table, Message } from 'semantic-ui-react';
import ClimbInfo from './climb-info';

const BoulderModal = (props) => (
	<Modal closeIcon trigger={<Button>View Climbs</Button>}>
		<Modal.Header>{props.info.boulder}</Modal.Header>
		<Modal.Content image scrolling>
			<Image
				size=""
				src={props.info.image}
                className="coverImage"
			/>

			<Modal.Description>
				<Message>
					<p>
						{props.info.desc}
					</p>
				</Message>
				<Table>
					<Table.Body>
						{props.info.climbs.map((climb) => (
							<ClimbInfo climb={climb} />
						))}
					</Table.Body>
				</Table>
			</Modal.Description>
		</Modal.Content>
	</Modal>
);

export default BoulderModal;
