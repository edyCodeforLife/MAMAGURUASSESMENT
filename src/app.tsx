import { StylesProvider } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./app.scss";
import Main from "./routes";

const theme = createTheme({
	typography: {
		fontFamily: [
			"NotoSans",
			"NotoSansThai",
			"Arial",
			"Roboto",
			"'Helvetica Neue'",
			"sans-serif",
		].join(","),
	},
});

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
