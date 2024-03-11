import { Suspense, lazy, useEffect, useState } from "react";
// import Cards from "./Cards";
import { RESTAURANT_API_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Cards = lazy(() => import("./Cards"));

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
			<div className="flex justify-center gap-2">
				<input
					className="border border-solid border-black"
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
					className="bg-gray-300 rounded-sm text-[15px] p-1 border border-solid border-black"
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
			<div className="flex flex-wrap gap-2 justify-center mt-4">
				{filterData.map((filterData) => (
					<Link
						style={{ color: "black", textDecoration: "none" }}
						key={filterData.info.id}
						to={"/res/" + filterData.info.id}
					>
						<Suspense fallback={"Loading.."}>
							<Cards apiobj={filterData} />
						</Suspense>
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
