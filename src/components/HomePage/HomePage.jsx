import React from "react";
import s from "./HomePage.module.sass";
import g from "./../Global.module.sass";
import homeImg from "../../images/home.webp";

const HomePage = (props) => {
	let text = props.text;
	return (
		<div>
			<h2 className={g.heading}>{text.title}</h2>
			<p className={s.subtitle}>{text.subtitle}</p>
			<img src={homeImg} alt="Фотография антител" className={s.virus + " " + g.images} />
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.mainText }}></p>
			<div className={g.clearfix}></div>
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.mainText2 }}></p>
		</div>
	);
};

export default HomePage;
