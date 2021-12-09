import { memo } from 'react';
import { styled } from '@mui/system';
import { Header } from '../../header/index';
import BasicBTN from '../../button/button';
import { ContainerScreen } from '../login/index';

const ContainerForm = styled('div')({
	width: '100%',
	boxSizing: 'border-box',
	display: 'inline',
	padding: 20,
	justifyContent: 'center',
	marginTop: 80
});

const Title = styled('h1')({
	maxWidth: '100%',
	margin: '12px 0px',
	fontWeight: 450,
	fontSize: 40,
	textAlign: 'center',
	lineHeight: 0.8
});

const SubTitle = styled('h4')({
	maxWidth: '100%',
	margin: '12px 0px',
	fontWeight: 'lighter',
	fontSize: 16,
	textAlign: 'center'
});

export interface ILandingProps {
	history?: any;
	onHandleClick(): void;
	isUserLoggedIn: boolean
}

function _LandingScreen(props: ILandingProps) {
	const { history, onHandleClick, isUserLoggedIn } = props;

	return (
		<ContainerScreen>
			<Header
				imageHeight={60}
				imageWidth={120}
				imageUrl={"http://portal-dev.ap-southeast-1.elasticbeanstalk.com/logo_full.png"}
				history={history}
				isUserLoggedIn={isUserLoggedIn}
			/>

			<ContainerForm>
				<Title>
					Mamaguru
				</Title>
				<SubTitle>
					Mamaguru Co-Teaching Network
				</SubTitle>

				<BasicBTN
					text={"Login"}
					padding={"10px"}
					variant={"contained"}
					backgroundColor={"#7AC3D1"}
					customColor={"#fff"}
					margin={"0px"}
					onHandleClick={onHandleClick}
				/>
			</ContainerForm>

		</ContainerScreen>
	)
}

export const LandingScreen = memo(_LandingScreen);