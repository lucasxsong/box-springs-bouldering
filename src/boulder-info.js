import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Card, Icon } from 'semantic-ui-react';

export default class BoulderInfo extends PureComponent {
	render() {
		const { info } = this.props;

		return (
			<Card
				image={info.image}
				header={info.boulder}
				meta={info.area}
				description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
			/>
		);
	}
}

const BoulderInfoWrapper = styled.div`
	width: 40vw;
	height: 40vh;
`;

const HeaderWrapper = styled.h2``;
