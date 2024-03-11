import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DISH_API_URL } from "../../utils/constants";

const useRestaurantMenu = () => {
	const [restaurantMenu, setRestaurantMenu] = useState([]);
	const { Id } = useParams();

	const restaurant_dish = async () => {
		const data = await fetch(DISH_API_URL + Id);
		const RestaurantMenu = await data.json();
		filterData(RestaurantMenu);
	};

	const filterData = (unfilteredData) => {
		const chunkedData =
			unfilteredData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

		const Menu = chunkedData.filter((chunkedData) => {
			return (
				chunkedData.card.card["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
			);
		});
		setRestaurantMenu(Menu);
	};

	useEffect(() => {
		restaurant_dish();
	}, []);

	return restaurantMenu;
};

export default useRestaurantMenu;
