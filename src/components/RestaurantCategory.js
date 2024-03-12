import ItemList from "./ItemList";

const RestaurantCategory = (restaurant) => {
	console.log("res", restaurant);
	return (
		<div>
			<div className="w-6/12 flex justify-between m-2 shadow-lg rounded-lg text-xs p-2 px-3 bg-gray-35">
				<div className="font-bold">{restaurant.restaurant.card.card.title}</div>
				<div>⬇️</div>
			</div>
			{/* {console.log("working da ", restaurant.restaurant.card.card.itemCards)} */}
			<ItemList itemList={restaurant.restaurant.card.card.itemCards} />
		</div>
	);
};

export default RestaurantCategory;
