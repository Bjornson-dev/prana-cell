import React from "react";
import s from "./TreatmentPage.module.sass";
import g from "./../Global.module.sass";
import treat from "../../images/treat.jpg";

const TreatmentPage = (props) => {
	let text = props.text;
	return (
		<div>
			<h2 className={g.heading}>{text.title}</h2>
			<img src={treat} alt="Лаборатория" className={s.treat} />
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text }}></p>
			<div className={g.clearfix}></div>
		</div>
	);
};

export default TreatmentPage;
