import "./styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { useStore } from "react-redux";

const CartIcon = () => {
	const { dispatch } = useStore();

	const toggleCartOpen = () => {
		dispatch(toggleCartHidden);
	};

	return (
		<div className="cart-icon" onClick={toggleCartOpen}>
			<ShoppingCart className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
