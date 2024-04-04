import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	console.log(cartItems);
	return (
		// <div className="flex justify-center">
		<div className="w-6/12 m-auto">
			<ItemList itemList={cartItems} />
		</div>
		// </div>
	);
};

export default Cart;
