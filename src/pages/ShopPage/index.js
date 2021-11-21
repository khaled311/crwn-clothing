import React, { useState } from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../components/PreviewCollection";

const ShopPage = () => {
	const [collections, setcollections] = useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherProps }) => (
				<PreviewCollection key={id} {...otherProps} />
			))}
		</div>
	);
};

export default ShopPage;
