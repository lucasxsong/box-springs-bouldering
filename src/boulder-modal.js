import _ from 'lodash';
import React from 'react';
import { Button, Header, Icon, Image, Modal, Table } from 'semantic-ui-react';

const BoulderModal = props => (
	<Modal trigger={<Button>View Climbs</Button>}>
		<Modal.Header>{props.info.boulder}</Modal.Header>
		<Modal.Content image scrolling>
			<Image
				size="medium"
				src="https://react.semantic-ui.com/images/wireframe/image.png"
				wrapped
			/>

			<Modal.Description>
				<Header>Modal Header</Header>
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Climb</Table.HeaderCell>
							<Table.HeaderCell>Rating</Table.HeaderCell>
							<Table.HeaderCell>Grade</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
                    <Table.Body>
					{/* {props.info.climbs.map((climb) => (
                        <>
						<Table.Cell>{climb.name}</Table.Cell>
						<Table.Cell></Table.Cell>
						<Table.Cell></Table.Cell>
                        </>

					))} */}
                    {props.info.climbs[0].name[0]}

                    </Table.Body>
				</Table>
			</Modal.Description>
		</Modal.Content>
		<Modal.Actions>
			<Button primary>
				Proceed <Icon name="chevron right" />
			</Button>
		</Modal.Actions>
	</Modal>
);

export default BoulderModal;
