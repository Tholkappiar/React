import { useEffect } from "react";
import UserClass from "./UserClass";

const UserFunc = () => {
	// useEffect(() => {
	// 	const time = setInterval(() => {
	// 		console.log("useEffect called !");
	// 	}, 1000);

	//  // so this is will be executed when the component unmount is done !
	// 	return () => {
	// 		clearInterval(time);
	// 		console.log("cleared");
	// 	};
	// }, []);

	return <div>this is the func</div>;
};

export default UserFunc;
