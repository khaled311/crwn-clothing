import { useStore } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton";
import "./styles.scss";

const CollectionItem = ({ item }) => {
	const { dispatch } = useStore();
	const { name, price, imageUrl } = item;

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="collection-footer">
				<div className="name">{name}</div>
				<div className="price">{price}</div>
			</div>
			<CustomButton onClick={() => dispatch(addItem(item))} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
