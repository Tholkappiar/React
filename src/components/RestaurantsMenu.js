import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurentMenu";

const RestaurantsMenu = () => {
	const restaurant = useRestaurantMenu();
	// usestate returns the value of the state and the function(bound Dispatch setState) to update the state
	// console.log(useState());

	return (
		<>
			<ul>
				{restaurant.map((item) => (
					<React.Fragment key={item.info.id}>
						<li>{item.info.name}</li>
						<li>{item.info.locality}</li>
						<li>{item.info.avgRating}</li>
					</React.Fragment>
				))}
			</ul>
		</>
	);
};

export default RestaurantsMenu;
