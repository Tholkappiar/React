import { useEffect, useState } from "react";
import Restaurent from "./Restaurent";

const Body = () => {
	const [filterData, setFilterData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const data = await response.json();
			// setFilterData(data.data.cards[0].card.card.imageGridCards.info);
			setFilterData(
				data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
			);
			console.log(filterData);
		};
		fetchData();
	}, []);

	return (
		<>
			<div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredData = filterData.filter((item) => {
							// console.log(item.info.avgRating);
							return item.info.avgRating > 4;
						});
						setFilterData(filteredData);
					}}
				>
					Filter Top Restaurents
				</button>
			</div>
			<div className="body-container">
				{filterData.map((filterData) => (
					<Restaurent key={filterData.info.id} apiobj={filterData} />
				))}
			</div>
		</>
	);
};

export default Body;
