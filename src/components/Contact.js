import React, { useContext } from "react";
import UserContext from "./UserContext";

function Contact() {
	const user = useContext(UserContext);
	console.log(user);

	const { setusername } = useContext(UserContext);

	return (
		<div className="flex justify-center ">
			<input
				className="outline-none shadow-md rounded-lg p-2"
				placeholder="Username"
				onChange={(e) => setusername(e.target.value)}
			/>
		</div>
	);
}

export default Contact;
