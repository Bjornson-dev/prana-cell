import React from "react";
import s from "./HomePage.module.sass";
import g from "./../Global.module.sass";
import homeImg from "../../images/cell.jpg";

const HomePage = (props) => {
	let text = props.text;
	return (
		<div className={g.container + " " + "container"}>
			<h2 className={g.textContainer + " " + g.heading}>{text.title}</h2>
			<p className={g.textContainer + " " + s.subtitle}>{text.subtitle}</p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text1 }}></p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text2 }}></p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.mainText2 }}></p>
		</div>
	);
};

export default HomePage;
