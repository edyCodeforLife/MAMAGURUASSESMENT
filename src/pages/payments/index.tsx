import { memo, useState, useEffect } from "react";
import { PaymentsScreen } from '../../components/pages-components/payments/index';
import { LOGIN_URL } from '../../data/global/variables';
import Cookies from 'js-cookie';
import { AltAlert } from '../../components/alert/index';
import { useGlobalState } from '../../data/states';
import { USER_ACTIONS } from '../../data/reducers/user-reducer';
import { IPaymentService, PaymentService } from '../../data/business/index';
import * as LS from 'local-storage';
import { SECRET_KEY2, CURRENTUSER } from '../../data/global/variables';
import SimpleCryptoJS from 'simple-crypto-js';

function _PaymentPage(props) {
	const isLoggedIn = Cookies.get("isMamaLoggedIn");
	const _paymentService: IPaymentService = new PaymentService();
	const [paymentList, setPaymentList] = useState([]);
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
	}, [isLoggedIn]);

	useEffect(() => {
		let decryptedText;
		const paymentObjEncrypted: any = LS.get(CURRENTUSER);
		let simpleCrypto = new SimpleCryptoJS(SECRET_KEY2);
		if (paymentObjEncrypted) {
			decryptedText = simpleCrypto.decryptObject(paymentObjEncrypted);
		}
		_paymentService.paymentInfo(decryptedText?.user_id, {
			Success: (res: any) => {
				setPaymentList(res);
			}
		})
	}, [])

	return (
		<PaymentsScreen
			handleClickedMenu={handleClickedMenu}
			history={props.history}
			onHandleClick={onHandleClick}
			isUserLoggedIn={isUserLoggedIn}
			selectedIdx={route}
			paymentList={paymentList}
		/>
	)
}
export const PaymentPage = memo((_PaymentPage));
