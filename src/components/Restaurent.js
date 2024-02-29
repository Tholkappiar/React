import { CLOUD_IMAGE_ID } from "../../utils/constants";

const Restaurent = (props) => {
	const { apiobj } = props;

	const { info : { cloudinaryImageId },info : { name } }= apiobj;

	return (
		<div className="res-container">
			<div className="card">
				<div className="food-img-container">
					<img
						className="food-img"
						src={CLOUD_IMAGE_ID + cloudinaryImageId}
					></img>
				</div>
				<div className="food-name">{name}</div>
			</div>
		</div>
	);
};

export default Restaurent;
