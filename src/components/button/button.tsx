
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomBTN = styled(Button)((props) => ({
	width: props.width,
	padding: props.padding,
	backgroundColor: props.backgroundColor,
	color: props.customColor,
	margin: props.margin
}))

export interface ITextField {
	text: string;
	variant: 'text' | 'contained' | 'outlined';
	backgroundColor: string;
	padding: string;
	width?: number;
	customColor: string;
	margin: string
	onHandleClick(): void
}

export default function BasicBTN(props: ITextField) {
	const { text, padding, onHandleClick, variant, margin, width, customColor, backgroundColor } = props;
	return (
		<CustomBTN
			onClick={() => { onHandleClick() }}
			width={width}
			customColor={customColor}
			padding={padding}
			backgroundColor={backgroundColor}
			variant={variant}
			margin={margin}
		>
			{text}
		</CustomBTN>
	)
}