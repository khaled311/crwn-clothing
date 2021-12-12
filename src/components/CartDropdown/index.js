import { useStore } from "react-redux";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import "./styles.scss";

const CartDropdown = () => {
	const { getState } = useStore();
	const { cartItems } = getState().cart;

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem item={item} key={item.id} />
				))}
			</div>
			<CustomButton>Go to checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
