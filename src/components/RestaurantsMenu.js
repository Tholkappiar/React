import React from "react";
import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
	const [restaurant, setRestaurant] = useState([]);
	const { Id } = useParams();
	console.log(Id);

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
