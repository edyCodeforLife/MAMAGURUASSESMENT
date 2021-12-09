import { memo } from 'react';
import { styled } from '@mui/system';
import { Header } from '../../header/index';
import BasicTextFields from '../../forms/text-field';
import { Text } from '../reports/index';
import { ContainerScreen } from '../login/index';

const ContainerForm = styled('div')({
	width: '100%',
	boxSizing: 'border-box',
	display: 'inline',
	padding: 20,
	justifyContent: 'center',
	marginTop: 80
});
const Label = styled('div')({
	maxWidth: '100%',
	margin: '12px 0px',
	fontSize: 20,
	fontWeight: 500,
	textAlign: 'left'
})

export interface ISettingsProps {
	history?: any;
	onChangeField(fieldId: string, value: any, error?: any): void;
	isUserLoggedIn: boolean;
	handleClickedMenu(id: number, fieldName: string): void;
	selectedIdx: number;
	userInfo: any;
}

function _SettingScreen(props: ISettingsProps) {
	const { history, userInfo, onChangeField, selectedIdx, handleClickedMenu, isUserLoggedIn } = props;

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
				<Text fsize={30} fweight={500} color={"#888888"}>
					My Information
				</Text>

				<Label>Username</Label>
				<BasicTextFields
					id={"outlined-basic"}
					variant={"outlined"}
					value={userInfo?.user_name}
					fieldId={"user_name"}
					width={"100%"}
					onChangeField={onChangeField}
				/>

				<Label>Password</Label>
				<BasicTextFields
					id={"outlined-basic"}
					variant={"outlined"}
					value={userInfo?.password}
					fieldId={"password"}
					width={"100%"}
					onChangeField={onChangeField}
				/>

				<Label>First Name</Label>
				<BasicTextFields
					id={"outlined-basic"}
					variant={"outlined"}
					value={userInfo?.first_name}
					fieldId={"first_name"}
					width={"100%"}
					onChangeField={onChangeField}
				/>

				<Label>Last Name</Label>
				<BasicTextFields
					id={"outlined-basic"}
					variant={"outlined"}
					value={userInfo?.last_name}
					fieldId={"last_name"}
					width={"100%"}
					onChangeField={onChangeField}
				/>

				<Label>Phone Number</Label>
				<BasicTextFields
					id={"outlined-basic"}
					variant={"outlined"}
					value={userInfo?.phone_number}
					fieldId={"phone_number"}
					width={"100%"}
					onChangeField={onChangeField}
				/>

				<Label>Email</Label>
				<BasicTextFields
					id={"outlined-basic"}
					variant={"outlined"}
					value={userInfo?.email}
					fieldId={"email"}
					width={"100%"}
					onChangeField={onChangeField}
				/>

			</ContainerForm>

		</ContainerScreen>
	)
}

export const SettingScreen = memo(_SettingScreen);