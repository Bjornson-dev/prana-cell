import React from "react";
import s from "./HomePage.module.sass";
import g from "./../Global.module.sass";
import homeImg from "../../images/homeImg.jpg";

const HomePage = (props) => {
	let text = props.text;
	return (
		<div className={g.container + " " + "container"}>
			<h2 className={g.textContainer + " " + g.heading}>{text.title}</h2>
			<p className={g.textContainer + " " + s.subtitle}>{text.subtitle}</p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text1 }}></p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text2 }}></p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.mainText2 }}></p>
			<img src={homeImg} alt="Лаборатория" className={s.homeImg + " " + g.images} />
		</div>
	);
};

export default HomePage;
