import { memo, useState, useEffect, useCallback } from "react";
import { LoginScreen } from '../../components/pages-components/login/index'
import { IRequestLogin } from '../../data/services/auth/auth-interface';
import { IAuthServiceMama, AuthServiceMama } from '../../data/business/index';
import { AltAlert } from '../../components/alert/index';

function _LoginPage(props) {
	const _authService: IAuthServiceMama = new AuthServiceMama();
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
							title: "Sukses",
							subtitle: "Sukses",
							type: 'success',
						});
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

	return (
		<LoginScreen
			history={props.history}
			onHandleLogin={onHandleLogin}
			onChangeField={onChangeField}
			inputValue={inputValue}
			handleKeyEnter={handleKeyEnter}
		/>
	)
}
export const LoginPage = memo((_LoginPage));
