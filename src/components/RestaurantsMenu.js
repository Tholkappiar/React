import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantsMenu = () => {
	const restaurant = useRestaurantMenu();

	const [showIndex, setShowIndex] = useState(null);

	// console.log(restaurant);

	// const items = restaurant.map((restaurant) => {
	// 	return restaurant.card.card.itemCards;
	// });
	return (
		<div className="flex flex-col items-center">
			{restaurant.map((restaurant, index) => (
				<RestaurantCategory
					key={restaurant.card.card.title}
					restaurant={restaurant}
					showIndex={showIndex == index ? true : false}
					setShowIndex={() => setShowIndex(index)}
				/>
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
