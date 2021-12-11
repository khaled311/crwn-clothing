import "./styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import store from "../../redux/store";
import { useState } from "react";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

const Header = () => {
	const [currentUser, setcurrentUser] = useState({});
	const [cart, setCart] = useState({});
	store.subscribe(() => {
		setcurrentUser(store.getState().user.currentUser);
		setCart(store.getState().cart);
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
				<CartIcon />
			</div>
			{cart.hidden === false && <CartDropdown />}
		</div>
	);
};

export default Header;
