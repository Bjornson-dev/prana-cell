import React from "react";
import s from "./RehabelitationPage.module.sass";
import g from "./../Global.module.sass";
import gul from "../../images/gulmira.png";

const RehabelitationPage = (props) => {
	let text = props.text;
	return (
		<div>
			<h2 className={g.heading}>{text.title}</h2>
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text }}></p>
			<img src={gul} alt="Лаборатория" className={s.gul} />
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.endText }}></p>
			<div className={g.clearfix}></div>
		</div>
	);
};

export default RehabelitationPage;
