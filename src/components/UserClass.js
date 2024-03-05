import React, { useState } from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		// this is the state which keeps tracks on the current state of the component
		this.state = {
			count: 0,
			actor: "Mark",
		};
		console.log("constructor is called !");
	}

	update = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	//compoentDidMount is called after all the mounting or loading is done.
	componentDidMount() {
		// console.log.("componentDidMount");
		// this.interval = setInterval(() => {
		// 	console.log("did Mount");
		// }, 1000);
		console.log("did Mount !");
	}
	// whenever update is done this block is executed
	componentDidUpdate() {
		console.log("count is updated");
	}

	// when the unmount happens this block is executed
	componentWillUnmount() {
		clearInterval(this.interval);
		console.log("the componenet is unmounted ");
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
					onClick={() => this.setState({ count: this.state.count + 1 })}
				></button>
			</>
		);
	}
}

export default UserClass;
