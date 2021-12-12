import "./styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { useStore } from "react-redux";

const CartIcon = () => {
	const { dispatch, getState } = useStore();
	const itemsQuantity = getState().cart.cartItems.length;

	const toggleCartOpen = () => {
		dispatch(toggleCartHidden);
	};

	return (
		<div className="cart-icon" onClick={toggleCartOpen}>
			<ShoppingCart className="shopping-icon" />
			<span className="item-count">{itemsQuantity}</span>
		</div>
	);
};

export default CartIcon;
