const ItemList = ({ itemList }) => {
	return (
		<div className="flex flex-col items-start p-4 mt-4 bg-gray-200 rounded-lg shadow-md">
			{itemList.map((item) => (
				<div key={item.card.info.id} className="p-2">
					{item.card.info.name}
				</div>
			))}
		</div>
	);
};

export default ItemList;
