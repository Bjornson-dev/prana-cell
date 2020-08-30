import React from "react";
import s from "./ImmunoPage.module.sass";
import g from "./../Global.module.sass";
import lab from "../../images/laboratory.jpg";
import scheme from "../../images/schemeImmuno.jpg";

const Immuno = (props) => {
	let text = props.text;
	return (
		<div className={g.container + " " + "container"}>
			<img src={lab} alt="Лаборатория" className={s.lab + " " + g.images} />
			<h2 className={g.textContainer + " " + g.heading}>{text.title}</h2>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text1 }}></p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text2 }}></p>
			<p className={g.textContainer + " " + g.text} dangerouslySetInnerHTML={{ __html: text.text3 }}></p>
			<img src={scheme} alt="Лаборатория" className={s.scheme} />
		</div>
	);
};

export default Immuno;
