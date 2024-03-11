import Cards from "../components/Cards";

const IsOpen = (Cards) => {
	return (props) => {
		return (
			<div>
				<label>Open</label>
				<Cards {...props} />
			</div>
		);
	};
};

export default IsOpen;
