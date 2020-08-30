import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import g from "./components/Global.module.sass";
import ImmunoPage from "./components/ImmunoPage/ImmunoPage";
import EffectsPage from "./components/EffectsPage/EffectsPage";
import TreatmentPage from "./components/TreatmentPage/TreatmentPage";
import FaqPage from "./components/FaqPage/FaqPage";
import RehabelitationPage from "./components/RehabelitationPage/RehabelitationPage";

function App(props) {
	return (
		<div>
			<Header text={props.text} />
			<main className={g.main}>
				<div className={g.formWrapper}>
					<div className={g.form}></div>
					<Route path="/home" render={() => <HomePage text={props.text.home} />}></Route>
					<Route path="/immunotherapy" render={() => <ImmunoPage text={props.text.immuno} />}></Route>
					<Route path="/effects" render={() => <EffectsPage text={props.text.effects} />}></Route>
					<Route path="/treatment" render={() => <TreatmentPage text={props.text.treat} />}></Route>
					<Route path="/faq" render={() => <FaqPage text={props.text.faq} />}></Route>
					<Route path="/rehabelitation" render={() => <RehabelitationPage text={props.text.reha} />}></Route>
				</div>
			</main>
		</div>
	);
}

export default App;

// {/* <NavLink exact to="/">
//   Русский
// </NavLink>
// <NavLink to="/en">Английский</NavLink>

// <Route exact path="/" render={() => <Header text={props.langs.ru} />} />
// <Route path="/en" render={() => <Header text={props.langs.en} />} /> */}
