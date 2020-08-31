import React from "react";
import "./App.css";
import g from "./components/Global.module.sass";
import { NavLink } from "react-router-dom";

const Form = (props) => {
	let text = props.text;

	return (
		<div className={g.formContainer}>
			<span className={g.formTagline} dangerouslySetInnerHTML={{ __html: text.form.tagline }}></span>
			<form method="POST" action="mail.php" onSubmit={() => alert(text.form.thanks)}>
				<input type="hidden" name="project_name" value="Prana Cell" />
				<input type="hidden" name="admin_email" value="arthurbearnyson@gmail.com" />
				<input type="hidden" name="form_subject" value="Форма с сайта PranaCell" />

				<div className={g.form__group + " " + g.field + " " + g.form__groupWrap + " " + g.textarea}>
					<textarea type="text" className={g.form__field} placeholder={text.form.message} name="message" id="message" required />
					<label for="name" className={g.form__label}>
						{text.form.message}
					</label>
					<button className={g.button}>{text.form.button}</button>
				</div>

				<div className={g.form__groupWrap}>
					<div className={g.form__group + " " + g.field}>
						<input type="input" className={g.form__field} placeholder={text.form.name} name="name" id="name" required />
						<label for="name" className={g.form__label}>
							{text.form.name}
						</label>
					</div>
					<div class={g.form__group + " " + g.field}>
						<input type="text" className={g.form__field} placeholder={text.form.mail} name="mail" id="mail" required />
						<label for="name" className={g.form__label}>
							{text.form.mail}
						</label>
					</div>
					<div class={g.form__group + " " + g.field}>
						<input type="text" className={g.form__field} placeholder={text.form.phone} name="Phone" id="Phone" required />
						<label for="name" className={g.form__label}>
							{text.form.phone}
						</label>
					</div>
				</div>
			</form>
			<span className={g.span}>2017. © Все права защищены.</span>
		</div>
	);
};

export default Form;
