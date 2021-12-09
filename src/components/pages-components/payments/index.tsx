import { Fragment, memo } from 'react';
import { styled } from '@mui/system';
import { Header } from '../../header/index';
import { ContainerScreen } from '../login/index';
import { Text } from '../reports/index';
import BasicBTN from '../../button/button';

const ContainerForm = styled('div')({
	width: '100%',
	boxSizing: 'border-box',
	display: 'inline',
	padding: 20,
	justifyContent: 'center',
	marginTop: 80
});

export interface IPaymentsScreen {
	history?: any;
	onHandleClick(phoneNumber: string): void;
	isUserLoggedIn: boolean;
	handleClickedMenu(id: number, fieldName: string): void;
	selectedIdx: number;
	paymentList: any
}

function _PaymentsScreen(props: IPaymentsScreen) {
	const { history, onHandleClick, paymentList, selectedIdx, handleClickedMenu, isUserLoggedIn } = props;

	return (
		<ContainerScreen>
			<Header
				handleClickedMenu={handleClickedMenu}
				imageHeight={60}
				selectedIdx={selectedIdx}
				imageWidth={120}
				imageUrl={"http://portal-dev.ap-southeast-1.elasticbeanstalk.com/logo_full.png"}
				history={history}
				isUserLoggedIn={isUserLoggedIn}
			/>

			<ContainerForm>
				{paymentList.length === 0 && (
					<Fragment>
						<Text fsize={16} fweight={"lighter"} color={"#888888"}>
							No Payment Requested
						</Text>

						<BasicBTN
							text={"Contact for Modification"}
							padding={"10px"}
							variant={"outlined"}
							backgroundColor={"#fff"}
							customColor={"#7AC3D1"}
							margin={"10px 0px"}
							onHandleClick={() => onHandleClick("62243514444")}
						/>
					</Fragment>
				)}
			</ContainerForm>

		</ContainerScreen>
	)
}

export const PaymentsScreen = memo(_PaymentsScreen);