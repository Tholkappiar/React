import { CLOUD_IMAGE_ID } from "../../utils/constants";

const Cards = (props) => {
	const { apiobj } = props;

	// const { info : { cloudinaryImageId },info : { name } }= apiobj;

	const { cloudinaryImageId, name } = apiobj?.info;

	return (
		<div className="h-[320px] w-[270px] flex flex-col items-center bg-gray-200 rounded-lg">
			<img
				className="rounded-lg m-4 p-1 w-[250px] h-[260]"
				src={CLOUD_IMAGE_ID + cloudinaryImageId}
			></img>
			<div className="text-sm text-center">{name}</div>
		</div>
	);
};

export default Cards;
