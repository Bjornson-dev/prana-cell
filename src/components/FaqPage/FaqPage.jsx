import React from "react";
import s from "./FaqPage.module.sass";
import g from "./../Global.module.sass";

const FaqPage = (props) => {
	let text = props.text;
	return (
		<div>
			<h2 className={g.heading}>{text.title}</h2>
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text }}></p>
		</div>
	);
};

export default FaqPage;
