import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_API_URL } from "../../utils/constants";

const useRestaurantMenu = () => {
	const [restaurant, setRestaurant] = useState([]);
	const { Id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const temp = await fetch(RESTAURANT_API_URL);
			const data = await temp.json();
			const res =
				data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants;

			if (res) {
				const filtered = res.filter((item) => {
					return item.info.id == Id;
				});
				setRestaurant(filtered);
			}
		};

		fetchData();
	}, []);

	return restaurant;
};

export default useRestaurantMenu;
