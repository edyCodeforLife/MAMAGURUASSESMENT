import { memo, useState } from 'react';
import { styled } from '@mui/system';
import { Header } from '../../header/index';
import BasicTextFields from '../../forms/text-field';
import BasicBTN from '../../button/button';

const ContainerLoginScreen = styled('div')({
	boxSizing: 'border-box',
	padding: 60,
	width: '100vw',
	height: '100vh',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column'
});

const ContainerForm = styled('div')({
	width: '100%',
	boxSizing: 'border-box',
	display: 'inline-grid',
	padding: 20,
	justifyContent: 'center',
});

const Label = styled('div')({
	maxWidth: '100%',
	margin: '12px 0px',
	fontSize: 14,
	fontWeight: 500,
	textAlign: 'left'
})

export interface ILoginProps {
	history?: any;
	onHandleLogin(): void
	inputValue: any;
	onChangeField(fieldId: string, value: any): void;
	handleKeyEnter(e): void;
}

function _LoginScreen(props: ILoginProps) {
	const { onHandleLogin, history, handleKeyEnter, inputValue, onChangeField } = props;

	return (
		<ContainerLoginScreen>
			<Header
				imageHeight={60}
				imageWidth={120}
				imageUrl={"http://portal-dev.ap-southeast-1.elasticbeanstalk.com/logo_full.png"}
				history={history}
			/>

			<ContainerForm>
				<Label>Username</Label>
				<BasicTextFields
					id={"outlined-basic"}
					label={"Username"}
					variant={"outlined"}
					autoFocus={true}
					value={inputValue?.user_name}
					fieldId={"user_name"}
					width={350}
					onChangeField={onChangeField}
					handleKeyEnter={handleKeyEnter}
				/>
				<Label>Password</Label>
				<BasicTextFields
					id={"outlined-basic"}
					label={"Password"}
					variant={"outlined"}
					width={350}
					value={inputValue?.password}
					fieldId={"password"}
					onChangeField={onChangeField}
					handleKeyEnter={handleKeyEnter}

				/>
				<BasicBTN
					text={"Login"}
					padding={"10px 20px"}
					variant={"contained"}
					backgroundColor={"#7AC3D1"}
					customColor={"#fff"}
					margin={"10px 0px"}
					onHandleClick={onHandleLogin}
				/>
			</ContainerForm>

		</ContainerLoginScreen>
	)
}

export const LoginScreen = memo(_LoginScreen);