import React from 'react';
import {withRouter} from 'react-router-dom';

const CardDetailsPage = () => {

	const renderCardDetails = () => {
		return "Card Data"
	}

	return (
		<div className="cardDetails">
			{renderCardDetails()}
		</div>
	);
}

export default withRouter(CardDetailsPage);