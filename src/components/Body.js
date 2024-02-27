import { useState } from "react";
import Restaurent from "./Restaurent";

const Body = ({ apidata }) => {
	const [filterData, setFilterData] = useState(apidata);

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
