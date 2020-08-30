import React from "react";
import s from "./EffectsPage.module.sass";
import g from "./../Global.module.sass";

const EffectsPage = (props) => {
	let text = props.text;
	return (
		<div className={g.container + " " + "container"}>
			<h2 className={g.heading}>{text.link}</h2>
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text }}></p>
		</div>
	);
};

export default EffectsPage;
