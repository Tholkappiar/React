import Restaurent from "./Restaurent";

const Body = ({ apidata }) => {
	return (
		<div className="body-container">
			{apidata.map((restaurent) => (
				<Restaurent key={restaurent.id} apiobj={restaurent} />
			))}
		</div>
	);
};

export default Body;
