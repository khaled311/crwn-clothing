import "./styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
// import { useStore } from "react-redux";
// import userReducer from "../../redux/user/user.reducer";
import store from "../../redux/store";
import { useState } from "react";

const Header = () => {
	const [currentUser, setcurrentUser] = useState({});
	store.subscribe(() => {
		setcurrentUser(store.getState().user.currentUser);
	});

	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						Sign Out
					</div>
				) : (
					<Link className="option" to="/signin">
						Sign in
					</Link>
				)}
			</div>
		</div>
	);
};

// const mapStateToProps = (state) => ({
// 	currentUser: state.user.currentUser,
// });

export default Header;
