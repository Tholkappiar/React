import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
	const restaurant = useRestaurantMenu();

	// console.log(restaurant);

	// const items = restaurant.map((restaurant) => {
	// 	return restaurant.card.card.itemCards;
	// });
	console.log(restaurant);
	return (
		<div className="flex flex-col">
			{restaurant.map((restaurant) => (
				<RestaurantCategory restaurant={restaurant} />
			))}
		</div>
	);
};

export default RestaurantsMenu;

// {items.map((item) =>
// 	item.map((dish) => (
// 		<React.Fragment key={dish.card.info.id}>
// 			{/* <div>{console.log("items da ", items)}</div> */}
// 		</React.Fragment>
// 	))
// )}
