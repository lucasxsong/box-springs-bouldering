import React from 'react';
import {
	Button,
	Image,
	Modal,
	Table,
	Message,
	Grid,
	Sticky,
	Header,
} from 'semantic-ui-react';
import ClimbInfo from './climb-info';
import './App.css';

const BoulderModal = (props) => (
	<Modal closeIcon trigger={<Button>View Climbs</Button>}>
		<Modal.Content image scrolling>
			<Grid stackable columns={2}>
				<Grid.Row>
					<Grid.Column>
						<Sticky offset={20}>
							<div className="boulder-image">
								<Header
									as="h2"
									className="boulder-header"
									style={{ backgroundColor: '#fffff' }}
								>
									{props.info.boulder}
								</Header>
								<Image rounded src={props.info.image} />
							</div>
						</Sticky>
					</Grid.Column>
					<Grid.Column>
						<Modal.Description>
							<Table basic='very'>
								<Message>
									<p>{props.info.desc}</p>
								</Message>
								<Table.Body>
									{props.info.climbs.map((climb) => (
										<ClimbInfo climb={climb} />
									))}
								</Table.Body>
							</Table>
						</Modal.Description>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Modal.Content>
	</Modal>
);

export default BoulderModal;
