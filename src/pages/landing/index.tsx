import { memo } from "react";
import { LandingScreen } from '../../components/pages-components/landing';
import { LOGIN_URL } from '../../data/global/variables';

function _LandingPage(props) {

	const onHandleClick = () => {
		props.history.push(LOGIN_URL)
	}

	return (
		<LandingScreen
			history={props.history}
			onHandleClick={onHandleClick}
		/>
	)
}
export const LandingPage = memo((_LandingPage));
