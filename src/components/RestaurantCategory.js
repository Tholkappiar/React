import ItemList from "./ItemList";

const RestaurantCategory = (restaurant) => {
	console.log("res", restaurant);
	return (
		<div className="flex flex-col">
			<div className="flex w-6/12 mx-auto justify-between ">
				<div className="font-bold">{restaurant.restaurant.card.card.title}</div>
				<div>⬇️</div>
			</div>
			{/* {console.log("working da ", restaurant.restaurant.card.card.itemCards)} */}

			<ItemList itemList={restaurant.restaurant.card.card.itemCards} />
		</div>
	);
};

export default RestaurantCategory;
