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


export interface IHeader {
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	imageMaxheight?: number;
	imageMaxWidth?: number;
	history?: any;
}

function _Header(props: IHeader) {
	const { history, imageUrl, imageWidth, imageHeight, imageMaxheight, imageMaxWidth } = props;

	return (
		<ContainerNavBar>
			<ImageContainer
				width={imageWidth}
				height={imageHeight}
				src={imageUrl}
			/>
			<ContainerRightSideMenu fontWeight={500}>
				Login
			</ContainerRightSideMenu>

		</ContainerNavBar>
	)
}

export const Header = memo(_Header);