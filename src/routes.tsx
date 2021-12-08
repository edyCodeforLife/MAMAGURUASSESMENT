
import { lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import { NavListener } from './components/nav-listener/index';

const HomePage = lazy(() => import('./pages/index').then(({ HomePage }) => ({ default: HomePage })));
const LoginPage = lazy(() => import('./pages/index').then(({ LoginPage }) => ({ default: LoginPage })));
const LandingPage = lazy(() => import('./pages/index').then(({ LandingPage }) => ({ default: LandingPage })));

const Main = (props) => {
	return (
		<NavListener {...props}>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/" component={HomePage} />
					<Route exact path="/landing" component={LandingPage} />
				</Switch>
			</Suspense>
		</NavListener >
	);
};

export default Main;
