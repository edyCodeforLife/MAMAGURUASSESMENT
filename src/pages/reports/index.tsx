import { memo, useEffect, useState } from "react";
import { ReportsScreen } from '../../components/pages-components/reports/index';
import Cookies from 'js-cookie';
import { AltAlert } from '../../components/alert/index';
import { IReportsServiceUser, ReportServiceUser } from '../../data/business/index';
import * as LS from 'local-storage';
import { SECRET_KEY2, CURRENTUSER } from '../../data/global/variables';
import SimpleCryptoJS from 'simple-crypto-js';
import { clone, map } from 'lodash';
import { useGlobalState } from '../../data/states';
import { USER_ACTIONS } from '../../data/reducers/user-reducer';

function _ReportsPage(props) {
	const _ReportService: IReportsServiceUser = new ReportServiceUser();
	const isLoggedIn = Cookies.get("isMamaLoggedIn");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [reportList, setReportList] = useState([]);
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
				// window.location.reload();
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


	const getData = () => {
		let decryptedText;
		const paymentObjEncrypted: any = LS.get(CURRENTUSER);
		let simpleCrypto = new SimpleCryptoJS(SECRET_KEY2);
		if (paymentObjEncrypted) {
			decryptedText = simpleCrypto.decryptObject(paymentObjEncrypted);
		}
		_ReportService.ChildInfo(decryptedText?.user_id, {
			Success: (res: any) => {
				_ReportService.FetchReports(res[0]?.kids_id, {
					Success: (res: any) => {
						if (res?.reports) {
							let cloned = clone(res?.reports);
							let data = map(cloned, (item, idx) => {
								item["imgPath"] = `http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=${item.image_id}`;
								return item;
							});
							setReportList(data);
						}
					}
				})
			}
		})
	}

	const onHandleClick = (report_id: string) => {
		const anchorEl = document.createElement('a');

		anchorEl.href = `http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/reports/download_report?report_id=${report_id}`;
		anchorEl.target = '_blank';
		anchorEl.rel = 'noopener';
		setTimeout(() => {
			anchorEl.click();
		});
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<ReportsScreen
			history={props.history}
			handleClickedMenu={handleClickedMenu}
			selectedIdx={route}
			isUserLoggedIn={isUserLoggedIn}
			reportList={reportList}
			onHandleClick={onHandleClick}
		/>
	)
}
export const ReportsPage = memo((_ReportsPage));
