
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTxtField = styled(TextField)((props) => ({
	width: props.width,
}))

export interface ITextField {
	id: string;
	label?: string;
	width: any;
	variant: 'standard' | 'filled' | 'outlined';
	autoFocus?: boolean;
	value: any;
	onChangeField(fieldId: string, value: any, error?: any): void;
	fieldId: string;
	handleKeyEnter?(e): void;
}

export default function BasicTextFields(props: ITextField) {
	const { id, label, variant, handleKeyEnter, width, autoFocus, value, onChangeField, fieldId } = props;
	return (
		<CustomTxtField
			autoFocus={autoFocus}
			value={value}
			onChange={(e) => { onChangeField(fieldId, e.target.value) }}
			width={width}
			id={id}
			label={label}
			onKeyPress={(e) => handleKeyEnter(e)}
			variant={variant}
		/>
	)
}