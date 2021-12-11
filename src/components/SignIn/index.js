import { useState } from "react";
import "./styles.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.actions";
import { useStore } from "react-redux";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { dispatch } = useStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setPassword("");
			setEmail("");
		} catch (err) {
			console.log("Error:", err);
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		if (name === "password") {
			setPassword(value);
		} else {
			setEmail(value);
		}
	};
	const handleGoogle = async () => {
		const { additionalUserInfo } = await signInWithGoogle();
		dispatch(setCurrentUser(additionalUserInfo.profile));
		// const dispatchData = dispatch(setCurrentUser(additionalUserInfo.profile));
		// localStorage.setItem("user", dispatchData.payload.given_name);
	};
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={handleGoogle} isGoogleSignIn>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
