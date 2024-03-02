import { useEffect, useState } from "react";
import Cards from "./Cards";
import { RESTAURANT_API_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
	const [filterData, setFilterData] = useState([]);
	const [Data, setData] = useState([]);

	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(RESTAURANT_API_URL);
		const data = await response.json();
		var temp =
			data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setFilterData(temp);
		setData(temp);
		console.log(temp);
	};

	function search() {
		if (searchText.trim() == "") {
			setFilterData(Data);
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
							return item.info.avgRating > 4.5;
						});
						setFilterData(filteredData);
					}}
				>
					Filter Top Restaurants
				</button>
			</div>
			<div className="body-container">
				{filterData.map((filterData) => (
					<Link
						style={{ color: "black", textDecoration: "none" }}
						key={filterData.info.id}
						to={`/res/${filterData.info.id}`}
					>
						<Cards apiobj={filterData} />
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
