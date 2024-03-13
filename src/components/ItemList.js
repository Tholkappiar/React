const ItemList = ({ itemList }) => {
	console.log("list", itemList);

	return (
		<div className="w-6/12 mx-auto flex flex-col items-start p-4">
			{itemList.map((item) => (
				<div className="p-2">{item.card.info.name}</div>
			))}
		</div>
	);
};

export default ItemList;
