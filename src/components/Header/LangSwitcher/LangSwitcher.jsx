import React from "react";
import s from "./LangSwitcher.module.sass";
import { Route, NavLink } from "react-router-dom";

const LangSwitcher = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={`container ${s.container}`}>
				<span className={s.contact}>
					Address: TURKEY / TOSMUR Mah. 7 Sok. Aqua Aprt
				</span>
				<span className={s.contact}>
					Tel: <a href="tel:+905304004353">&nbsp; +90 5304004353 &nbsp;</a> /
					<a href="tel:+905527267099">&nbsp;+90 552 726 7099</a>
				</span>

				<div className={s.dropdown}>
					<button className={s.dropbtn}>
						<Route path="/ru">Русский</Route>
						<Route path="/en">English</Route>
					</button>

					<div className={s.dropdownContent}>
						<NavLink to="/ru/home">Русский</NavLink>
						<NavLink to="/en/home">English</NavLink>
					</div>
				</div>

				<a className={s.mail} href="mailto:bkteam2211@gmail.com">
					bkteam2211@gmail.com
				</a>
			</div>
		</div>
	);
};

export default LangSwitcher;
