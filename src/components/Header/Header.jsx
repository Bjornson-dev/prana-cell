import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.sass";
import logo from "./../../images/logo (2).jpg";

const Header = (props) => {
	let text = props.text;
	return (
		<header className={s.header}>
			<div className={`container ${s.container}`}>
				<div className={s.logoWrapper}>
					<img src={logo} alt="Логотип PranaCell" />
				</div>

				<nav>
					<NavLink className={s.link} activeClassName={s.active} to="/home">
						{text.home.link}
					</NavLink>

					<NavLink
						className={s.link}
						activeClassName={s.active}
						to="/immunotherapy"
					>
						{text.immuno.link}
					</NavLink>

					<NavLink className={s.link} activeClassName={s.active} to="/effects">
						{text.effects.link}
					</NavLink>

					<NavLink
						className={s.link}
						activeClassName={s.active}
						to="/treatment"
					>
						{text.treat.link}
					</NavLink>

					<NavLink className={s.link} activeClassName={s.active} to="/faq">
						{text.faq.link}
					</NavLink>

					<NavLink
						className={s.link}
						activeClassName={s.active}
						to="/rehabelitation"
					>
						{text.reha.link}
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
