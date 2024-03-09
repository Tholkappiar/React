import { CLOUD_IMAGE_ID } from "../../utils/constants";

const Cards = (props) => {
	const { apiobj } = props;

	// const { info : { cloudinaryImageId },info : { name } }= apiobj;

	const { cloudinaryImageId, name } = apiobj?.info;

	return (
		<div className="flex flex-wrap">
			<div className="h-[270px] w-[220px] flex flex-col items-center">
				<div className="size-50">
					<img
						className="p-4 m-2 w-[200px] h-[210px] bg-gray-200 object-cover"
						src={CLOUD_IMAGE_ID + cloudinaryImageId}
					></img>
				</div>
				<div className="text-balance text-xs text-center size-40">{name}</div>
			</div>
		</div>
	);
};

export default Cards;
