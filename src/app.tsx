import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import "./app.scss";
import Main from "./routes";

const theme = {
	colors: {
		primary: '#037Ef3',
		textLight: '#F3F4F7',
	},
};

const App = (props) => {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<div className="full-screen">
					<Main {...props} />
				</div>
				<div id="alerts" />
			</ThemeProvider>
		</StylesProvider >

	);
};

export default App;
