import React from "react";
import s from "./ImmunoPage.module.sass";
import g from "./../Global.module.sass";
import lab from "../../images/laboratory.jpg";
import scheme from "../../images/schemeImmuno.jpg";

const Immuno = (props) => {
	let text = props.text;
	return (
		<div>
			<h2 className={g.heading}>{text.title}</h2>
			<img src={lab} alt="Лаборатория" className={s.lab + " " + g.images} />
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text1 }}></p>
			<div className={g.clearfix}></div>
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text2 }}></p>
			<img src={scheme} alt="Лаборатория" className={s.scheme + " " + g.images} />
			<p className={g.text} dangerouslySetInnerHTML={{ __html: text.text3 }}></p>
			<div className={g.clearfix}></div>
		</div>
	);
};

export default Immuno;
