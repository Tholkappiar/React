import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurentMenu";

const RestaurantsMenu = () => {
	const restaurant = useRestaurantMenu();

	// console.log(restaurant);

	const items = restaurant.map((restaurant) => {
		return restaurant.card.card.itemCards;
	});

	return (
		<>
			<ul>
				{items.map((item) =>
					item.map((dish) => (
						<React.Fragment key={dish.card.info.id}>
							<div>{dish.card.info.name}</div>
						</React.Fragment>
					))
				)}
			</ul>
		</>
	);
};

export default RestaurantsMenu;
