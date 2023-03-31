import "./index.css";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import {ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
	palette:{
		primary:{
			main:'#61dafb'
		},
		secondary:{
			main:'#da61bf'
		}
	}
})

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
		<App />
		</ThemeProvider>
	</React.StrictMode>
);
