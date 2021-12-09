import { memo, useState, useEffect, useCallback } from "react";
import { SettingScreen } from '../../components/pages-components/settings/index';
import Cookies from 'js-cookie';
import { AltAlert } from '../../components/alert/index';
import { useGlobalState } from '../../data/states';
import { USER_ACTIONS } from '../../data/reducers/user-reducer';
import { ISettingService, SettingService } from '../../data/business/index';
import * as LS from 'local-storage';
import { SECRET_KEY2, CURRENTUSER } from '../../data/global/variables';
import SimpleCryptoJS from 'simple-crypto-js';

function _SettingsPage(props) {
	const isLoggedIn = Cookies.get("isMamaLoggedIn");
	const _SettingService: ISettingService = new SettingService();
	const [userInfo, setUserInfo] = useState({});
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [{
		user: { route }
	}, dispatch] = useGlobalState();


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

	const getInitialUserData = () => {
		let decryptedText;
		const paymentObjEncrypted: any = LS.get(CURRENTUSER);
		let simpleCrypto = new SimpleCryptoJS(SECRET_KEY2);
		if (paymentObjEncrypted) {
			decryptedText = simpleCrypto.decryptObject(paymentObjEncrypted);
		}
		let data = {};
		_SettingService.userInfomation(decryptedText?.user_id, {
			Success: (res: any) => {
				data["user_name"] = res?.user_name;
				data["password"] = res?.password;
				data["first_name"] = res?.first_name;
				data["last_name"] = res?.last_name;
				data["phone_number"] = res?.phone_number;
				data["email"] = res?.email;
				setTimeout(() => {
					setUserInfo(data);
				}, 500);
			}
		})
	}

	useEffect(() => {
		getInitialUserData();
	}, []);

	const onChangeField = useCallback((fieldId: string, value: any, error?: any) => {
		let obj: any = {};
		obj[fieldId] = value;
		setUserInfo({ ...userInfo, ...obj })
	}, [userInfo]);

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
			onChangeField={onChangeField}
			history={props.history}
			isUserLoggedIn={isUserLoggedIn}
			selectedIdx={route}
			userInfo={userInfo}
		/>
	)
}
export const SettingsPage = memo((_SettingsPage));
