import { memo, useState } from 'react';
import { styled } from '@mui/system';

const ContainerNavBar = styled('div')({
	color: 'white',
	backgroundColor: '#F8F9FA',
	position: 'relative',
	top: 0,
	boxSizing: 'border-box',
	padding: 20,
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
});

const ImageContainer = styled('img')((props) => ({
	maxWidth: props.maxWidth,
	width: props.width,
	maxHeight: props.maxHeight,
	height: props.height
}));

const ContainerRightSideMenu = styled('div')((props) => ({
	color: 'black',
	display: 'flex',
	alignItems: 'center',
	fontWeight: props.fontWeight
}));

const ContainerRightSideMenuList = styled('div')((props) => ({
	color: 'black',
	display: 'flex',
	alignItems: 'center',
	margin: '0px 10px',
	fontWeight: props.fontWeight,
	cursor: 'pointer',
	opacity: props.opacity
}));


export interface IHeader {
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	imageMaxheight?: number;
	imageMaxWidth?: number;
	history?: any;
	handleClickedMenu?(id: number, fieldName: string): void;
	selectedIdx?: number;
	isUserLoggedIn: boolean;
}

const rightSideMenu = ["/", "/offers", "/payment", "/settings", "Logout"];

function _Header(props: IHeader) {
	const { history, isUserLoggedIn, imageUrl, handleClickedMenu, imageWidth, imageHeight, imageMaxheight, imageMaxWidth, selectedIdx } = props;

	const switchLabel = (label: string) => {
		switch (label) {
			case "/":
				return "Reports";
			case "/offers":
				return "Offers";
			case "/payment":
				return "Payments";
			case "/settings":
				return "Settings";
			case "Logout":
				return "Logout";
		}
	}
	return (
		<ContainerNavBar>
			<ImageContainer
				width={imageWidth}
				height={imageHeight}
				src={imageUrl}
			/>
			<ContainerRightSideMenu fontWeight={500}>
				{!isUserLoggedIn ? (
					<div>
						Login
					</div>
				) : (
					rightSideMenu.map((item, idx) => (
						<ContainerRightSideMenuList
							fontWeight={500}
							key={idx}
							onClick={() => handleClickedMenu(idx, item)}
							opacity={history.location.pathname === item ? 1 : 0.3}
						>
							{switchLabel(item)}
						</ContainerRightSideMenuList>
					))
				)}


			</ContainerRightSideMenu>

		</ContainerNavBar>
	)
}

export const Header = memo(_Header);