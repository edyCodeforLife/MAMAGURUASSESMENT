
import { lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import { NavListener } from './components/nav-listener/index';

const LoginPage = lazy(() => import('./pages/index').then(({ LoginPage }) => ({ default: LoginPage })));
const LandingPage = lazy(() => import('./pages/index').then(({ LandingPage }) => ({ default: LandingPage })));
const ReportsPage = lazy(() => import('./pages/index').then(({ ReportsPage }) => ({ default: ReportsPage })));

const Main = (props) => {
	return (
		<NavListener {...props}>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/" component={ReportsPage} />
					<Route exact path="/landing" component={LandingPage} />
				</Switch>
			</Suspense>
		</NavListener >
	);
};

export default Main;
