import React from 'react';
import Auxi from '../components/hoc/auxi';
import Questions from './questions';
import questionDetails from './questionDetails';
import NotFound from './notfound';
import Container from '@material-ui/core/Container';
import { Route, Switch } from 'react-router-dom';

export default props => {
	return (
		<Auxi>
			<Container fixed>
				<Switch>
					<Route path="/" exact><Questions /></Route>
					<Route path="/counter" exact><questionDetails /></Route>
					<Route><NotFound /></Route>
				</Switch>
			</Container>
		</Auxi>
	);
}