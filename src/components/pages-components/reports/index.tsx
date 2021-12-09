import { memo } from 'react';
import { styled } from '@mui/system';
import { Header } from '../../header/index';
import { ContainerScreen } from '../login/index';
import Card from '@mui/material/Card';
import { map } from 'lodash';
import CardContent from '@mui/material/CardContent';
import BasicBTN from '../../button/button';

const ContainerForm = styled('div')({
	width: '100%',
	boxSizing: 'border-box',
	display: 'inline',
	padding: 20,
	justifyContent: 'center',
	marginTop: 80
});

const CustomCard = styled(Card)((props) => ({
	backgroundColor: props.bgcolor,
	borderRadius: 5,
	boxSizing: 'border-box',
	margin: '25px 0px'

}));

const CustomCardContent = styled(CardContent)((props) => ({
	backgroundColor: props.bgcolor,
	boxSizing: 'border-box',
	padding: props.padding,
	width: props.width,
	height: props.height
}));

export const Text = styled('div')((props) => ({
	fontSize: props.fsize,
	color: props.color,
	fontWeight: props.fweight,
	textAlign: 'center',
	margin: props.margin
}));

const Image = styled('img')((props) => ({
	minWidth: props.minwidth,
	maxWidth: props.maxwidth,
	width: props.width,
	height: props.height
}));


export interface IReportProps {
	history?: any;
	handleClickedMenu(id: number, fieldName: string): void;
	selectedIdx: number;
	isUserLoggedIn: boolean
	reportList: any;
	onHandleClick(id: string): void;
}

function _ReportsScreen(props: IReportProps) {
	const { history, isUserLoggedIn, handleClickedMenu, onHandleClick, reportList, selectedIdx } = props;
	console.log(reportList)

	return (
		<ContainerScreen>
			<Header
				handleClickedMenu={handleClickedMenu}
				isUserLoggedIn={isUserLoggedIn}
				selectedIdx={selectedIdx}
				imageHeight={60}
				imageWidth={120}
				imageUrl={"http://portal-dev.ap-southeast-1.elasticbeanstalk.com/logo_full.png"}
				history={history}
			/>

			<ContainerForm>
				{map(reportList, (item, idx) => (
					<CustomCard key={idx} variant={"outlined"} bgcolor={"#fff"}>
						<CustomCardContent bgcolor={"#F7F7F7"}>
							<Text fsize={14} fweight={"lighter"} color={"#888888"}>
								Session {" "}{item?._session_no}{"- -"}{item?.session_date}
							</Text>
						</CustomCardContent>

						<CustomCardContent
							padding={20}
							height={'auto'}
							width={'100%'}
							bgcolor={"#fff"}
						>
							<Image maxwidth={300} maxheight={300} src={item?.imgPath} />
							<h2>{item?.activity_id}</h2>
							<Text fsize={16} fweight={300}>
								{item?.summary}
							</Text>

							<Text margin={"10px 0px"} fsize={14} weight={"lighter"} color={"#888888"}>
								{"--"} Co-Teaching partner {" "}
								<i>{item?.teaching_partner}</i>
							</Text>

							<BasicBTN
								text={"Download Report"}
								padding={"10px"}
								variant={"contained"}
								backgroundColor={"#7AC3D1"}
								customColor={"#fff"}
								margin={"0px"}
								onHandleClick={() => onHandleClick(item?.report_id)}
							/>

						</CustomCardContent>

						<CustomCardContent bgcolor={"#F7F7F7"}>
							<Text fsize={14} fweight={"lighter"} color={"#888888"}>
								Next Activity/Improvement Plan: {" "} {item?.next_activity}
							</Text>
						</CustomCardContent>
					</CustomCard>
				))}
			</ContainerForm>
		</ContainerScreen>
	)
}

export const ReportsScreen = memo(_ReportsScreen);