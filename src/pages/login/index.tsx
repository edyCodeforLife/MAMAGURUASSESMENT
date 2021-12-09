import { memo, useState, useCallback, useEffect } from "react";
import { LoginScreen } from '../../components/pages-components/login/index'
import { IRequestLogin } from '../../data/services/auth/auth-interface';
import { IAuthServiceMama, AuthServiceMama } from '../../data/business/index';
import { AltAlert } from '../../components/alert/index';
import Cookies from 'js-cookie';
import SimpleCryptoJS from 'simple-crypto-js';
import * as LS from 'local-storage';
import { SECRET_KEY2, CURRENTUSER } from '../../data/global/variables';
import { useGlobalState } from '../../data/states';
import { USER_ACTIONS } from '../../data/reducers/user-reducer';

function _LoginPage(props) {
	const _authService: IAuthServiceMama = new AuthServiceMama();
	const [_, dispatch] = useGlobalState();
	const isLoggedIn = Cookies.get("isMamaLoggedIn");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [inputValue, setInputValue] = useState<IRequestLogin>({
		user_name: '',
		password: ''
	})

	const onHandleLogin = () => {
		if (inputValue.user_name !== '' && inputValue.password !== '') {
			_authService.LoginService(inputValue, {
				Success: (res: any) => {
					if (res.success) {
						AltAlert.show({
							title: "Login Success",
							subtitle: "Login berhasil",
							type: 'success',
						});
						const simpleCrypto: any = new SimpleCryptoJS(SECRET_KEY2);
						const encryptedText = simpleCrypto.encryptObject(res);
						LS.set(CURRENTUSER, encryptedText);
						dispatch({
							type: USER_ACTIONS.CHANGE_USER,
							data: { user: res }
						});
						Cookies.set('isMamaLoggedIn', 'yes');
						Cookies.set('isMamaLoggedIn', 'yes', { domain: 'localhost' });
						setTimeout(() => {
							props.history.push('/')
						}, 500);
					} else {
						AltAlert.show({
							title: "Terjadi kesalahan!",
							subtitle: res.message,
							type: 'warning',
						});
					}

				},
			})
		} else {
			AltAlert.show({
				title: "Terjadi kesalahan!",
				subtitle: 'Mohon isi form terlebih dahulu!',
				type: 'warning',
			});
		}
	}

	const handleKeyEnter = (e) => {
		if (e.key === "Enter") {
			onHandleLogin();
		}
	}

	const onChangeField = useCallback((fieldId: string, value: any, error?: any) => {
		let obj: any = {};
		if (fieldId === "user_name" || fieldId === "password") {
			obj[fieldId] = value;
			setInputValue({ ...inputValue, ...obj })
		}

	}, [inputValue]);

	useEffect(() => {
		let loggedIn = false
		if (isLoggedIn === "yes") {
			loggedIn = true
		}
		setIsUserLoggedIn(loggedIn);
	}, [isLoggedIn])

	return (
		<LoginScreen
			history={props.history}
			onHandleLogin={onHandleLogin}
			onChangeField={onChangeField}
			inputValue={inputValue}
			handleKeyEnter={handleKeyEnter}
			isUserLoggedIn={isUserLoggedIn}
		/>
	)
}
export const LoginPage = memo((_LoginPage));
