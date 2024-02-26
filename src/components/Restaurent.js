
const Restaurent = (props) => {

	const { apiobj } = props;

	const { imageId, action } = apiobj;
	
	return (
	<div className="res">
		<div className="res-container">
			{/* <div className="search-container">
			<input className="search"></input>
		
		</div> */}
			<div className="cards">
				<div className="card">
					<img
						className="food-img"
						src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + 
							imageId}
					></img>
					<div className="food-name">{action.text}</div>
				</div>
			</div>
		</div>
	</div>
	)
};

export default Restaurent;