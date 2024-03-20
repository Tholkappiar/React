import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ restaurant }) => {
	const [showDish, setShowDish] = useState(false);
	const toggleShowDish = () => {
		setShowDish(!showDish);
	};

	return (
		<div
			key={restaurant.card.card.title}
			className="flex flex-col w-6/12 my-2 bg-slate-200 rounded-lg"
		>
			<div
				className="flex  justify-between text-left bg-gray-300 rounded-lg h-10 items-center px-4"
				onClick={toggleShowDish}
			>
				<div className="font-bold">
					{restaurant.card.card.title} ({restaurant.card.card.itemCards.length})
				</div>
				<div>⬇️</div>
			</div>
			{showDish && <ItemList itemList={restaurant.card.card.itemCards} />}
		</div>
	);
};

export default RestaurantCategory;
