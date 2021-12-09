import { memo, useState, useEffect } from "react";
import { LandingScreen } from '../../components/pages-components/landing';
import { LOGIN_URL } from '../../data/global/variables';
import Cookies from 'js-cookie';

function _LandingPage(props) {

	const isLoggedIn = Cookies.get("isMamaLoggedIn");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	const onHandleClick = () => {
		props.history.push(LOGIN_URL)
	}

	useEffect(() => {
		let loggedIn = false
		if (isLoggedIn === "yes") {
			loggedIn = true
		}
		setIsUserLoggedIn(loggedIn);
	}, [isLoggedIn])

	return (
		<LandingScreen
			history={props.history}
			onHandleClick={onHandleClick}
			isUserLoggedIn={isUserLoggedIn}
		/>
	)
}
export const LandingPage = memo((_LandingPage));
