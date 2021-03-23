import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExposureNeg1RoundedIcon from '@material-ui/icons/ExposureNeg1Rounded';
import PlusOneRoundedIcon from '@material-ui/icons/PlusOneRounded';

const questionDetails = (props) => {

	return (
		<Grid container direction="row" justify="center" alignItems="center">
			<Button variant="contained" color="secondary"><ExposureNeg1RoundedIcon /></Button>
			<p style={{margin: '30px 20px'}}></p>
			<Button variant="contained" color="primary"><PlusOneRoundedIcon /></Button>
		</Grid>
	);
}

const mapStateToProps = state => ({
	
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(questionDetails);