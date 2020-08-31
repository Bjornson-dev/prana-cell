import React from "react";
import s from "./TreatmentPage.module.sass";
import g from "./../Global.module.sass";
import treat from "../../images/treat.jpg";

const TreatmentPage = (props) => {
	let text = props.text;
	return (
		<div className={g.container + " " + "container"}>
			<h2 className={g.textContainer + " " + g.heading}>{text.title}</h2>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text }}></p>
			<img src={treat} alt="Лаборатория" className={s.treat} />
		</div>
	);
};

export default TreatmentPage;
