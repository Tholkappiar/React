const ItemList = ({ itemList }) => {
	console.log("list", itemList);

	return (
		<div>
			{itemList.map((item) => (
				<div>{item.card.info.name}</div>
			))}
		</div>
	);
};

export default ItemList;
