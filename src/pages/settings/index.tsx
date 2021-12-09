import { memo, useState, useEffect } from "react";
import { SettingScreen } from '../../components/pages-components/settings/index';
import { LOGIN_URL } from '../../data/global/variables';
import Cookies from 'js-cookie';
import { AltAlert } from '../../components/alert/index';
import { useGlobalState } from '../../data/states';
import { USER_ACTIONS } from '../../data/reducers/user-reducer';

function _SettingsPage(props) {
	const isLoggedIn = Cookies.get("isMamaLoggedIn");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [{
		user: { route }
	}, dispatch] = useGlobalState();

	const onHandleClick = () => {
		props.history.push(LOGIN_URL)
	}

	const handleClickedMenu = (id: number, fieldName: string) => {
		dispatch({
			type: USER_ACTIONS.CHANGE_ROUTE,
			data: { route: id }
		});

		if (fieldName === "Logout") {
			Cookies.set('isMamaLoggedIn', 'no');
			Cookies.set('isMamaLoggedIn', 'no', { domain: 'localhost' });
			setTimeout(() => {
				AltAlert.show({
					title: "Logout berhasil",
					subtitle: "Anda telah keluar",
					type: 'success',
				});
				props.history.push('/login');
				window.location.reload();
			}, 500);
		}
		if (fieldName === "/offers") {
			props.history.push("/offers");
		}

		if (fieldName === "/payment") {
			props.history.push("/payment");
		}

		if (fieldName === "/settings") {
			props.history.push("/settings");
		}

		if (fieldName === "/") {
			props.history.push("/");
		}
	}

	useEffect(() => {
		let loggedIn = false
		if (isLoggedIn === "yes") {
			loggedIn = true
		}
		setIsUserLoggedIn(loggedIn);
	}, [isLoggedIn])

	return (
		<SettingScreen
			handleClickedMenu={handleClickedMenu}
			history={props.history}
			onHandleClick={onHandleClick}
			isUserLoggedIn={isUserLoggedIn}
			selectedIdx={route}
		/>
	)
}
export const SettingsPage = memo((_SettingsPage));
