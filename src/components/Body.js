import { useEffect, useState } from "react";
import Restaurent from "./Restaurent";

const Body = () => {
	const [filterData, setFilterData] = useState([]);
	const [Data, setData] = useState([]);

	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const data = await response.json();
		var temp =
			data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
		setFilterData(temp);
		setData(temp);
	};

	function search() {
		if (searchText.trim() == "") {
			fetchData();
		} else {
			let filterSearch = Data.filter((item) =>
				item.info.name
					.toLowerCase()
					.trim()
					.includes(searchText.toLowerCase().trim())
			);
			setFilterData(filterSearch);
		}
	}

	return (
		<>
			<div>
				<input
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
						search();
					}}
					onKeyDown={(e) => {
						if (e.key === "Backspace") {
							search();
						}
					}}
				></input>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredData = filterData.filter((item) => {
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
