import React, { useState } from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		// this is the state which keeps tracks on the current state of the component
		this.state = {
			count: 0,
			actor: "Mark",
		};
	}
	//compoentDidMount is called after all the mounting or loading is done.
	componentDidMount() {
		console.log("componentDidMount");
	}

	render() {
		const { name, location } = this.props;

		// this.setState is used to update the state of the component
		const { count, actor } = this.state;
		// this.setState({ count: count + 1 });
		return (
			<>
				<p>{count}</p>
				<p>{name}</p>
				<p>{location}</p>
				<button
					onClick={() => {
						this.setState({ count: count + 1 });
					}}
				></button>
			</>
		);
	}
}

export default UserClass;
