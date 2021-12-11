import { useState } from "react";
import "./styles.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		} catch (err) {
			console.log("error:", err);
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		if (name === "displayName") {
			setDisplayName(value);
		} else if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		} else {
			setConfirmPassword(value);
		}
	};

	return (
		<div className="sign-up">
			<h2 className="title">I don't have an account</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit} className="sign-up-form">
				<FormInput
					name="displayName"
					type="text"
					value={displayName}
					handleChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
