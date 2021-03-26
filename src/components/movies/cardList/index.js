import React from 'react';
import Card from '../card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const CardList = (props) => {

	if(!props.cardClickFunc || !props.listData)
		return null;

	return (
		<Grid data-test="cardListContainer" container spacing={2}>
			{props.listData.map(item => {
				return (
					<Grid key={item.id} item xs={12} sm={12} md={12} lg={12}>
						<Card 
							onClick={() => props.cardClickFunc(item.id)}
							title={item.text} />
					</Grid>
				)
			})}
		</Grid>
	);
}

CardList.propTypes = {
    cardClickFunc: PropTypes.func,
    listData: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string
    }))
}


export default CardList;