import React from "react";
import s from "./RehabelitationPage.module.sass";
import g from "./../Global.module.sass";
import gul from "../../images/gulmira.png";

const RehabelitationPage = (props) => {
	let text = props.text;
	return (
		<div className={g.container + " " + "container"}>
			<h2 className={g.textContainer + " " + g.heading}>{text.title}</h2>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text }}></p>
		</div>
	);
};

export default RehabelitationPage;
