import { useDispatch } from "react-redux";
import { addItems } from "../../utils/CardSlice";
import { CLOUD_IMAGE_ID } from "../../utils/constants";

const ItemList = ({ itemList }) => {
	const dispatch = useDispatch();
	const handleCartAdd = (item) => {
		dispatch(addItems(item));
	};
	console.log(itemList);
	return (
		<div className="flex flex-col items-start p-4 mt-4 bg-gray-200 rounded-lg shadow-md">
			{itemList.map((item) => (
				<div
					key={item.card.info.id}
					className="flex justify-between w-full p-2"
				>
					<div className="w-2/3 space-y-2">
						<div className="font-bold">
							{item.card.info.name} - ${item.card.info.price}
						</div>
						<div className="font-light text-sm">
							{item.card.info.description}
						</div>
					</div>
					<div className="text-center">
						<img
							className="rounded-lg shadow-md w-32 h-24 object-cover"
							src={CLOUD_IMAGE_ID + item.card.info.imageId}
						></img>
						<button
							onClick={() => handleCartAdd(item)}
							className="bg-black h-10  text-white w=1/3 rounded-md shadow-md w-14 font-semibold"
						>
							Add +
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
