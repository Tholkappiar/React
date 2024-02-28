import { useState } from "react";
import Restaurent from "./Restaurent";

const Body = ({ apidata }) => {
	const [filterData, setFilterData] = useState(apidata);

	const fetchData = async () => {
		const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const data = await response.json();
			// setFilterData(data);
			console.log(data)
	};
	fetchData();

	return (
		<>
			<div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredData = filterData.filter((item) => {
							console.log(item.info.avgRating);
							return item.info.avgRating > 4;
						});
						setFilterData(filteredData);
					}}
				>
					Filter Top Restaurents
				</button>
			</div>
			<div className="body-container">
				{filterData.map(
					(restaurent) => (
						<Restaurent key={restaurent.info.id} apiobj={restaurent} />
					)
				)}
			</div>
		</>
	);
};

export default Body;
