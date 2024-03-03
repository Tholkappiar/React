import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { name, location } = this.props;
		return (
			<>
				<p>{name}</p>
				<p>{location}</p>
			</>
		);
	}
}

export default UserClass;
