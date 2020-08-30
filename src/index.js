import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import LangSwitcher from "./components/Header/LangSwitcher/LangSwitcher";
import text from "./text";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<LangSwitcher />

			<Redirect exact from="/" to="/ru/home" />
			<Route
				path="/ru"
				render={() => {
					return (
						<BrowserRouter basename="/ru">
							<App text={text.ru} />
						</BrowserRouter>
					);
				}}
			/>

			<Route
				path="/en"
				render={() => {
					return (
						<BrowserRouter basename="/en">
							<App text={text.en} />
						</BrowserRouter>
					);
				}}
			/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
