import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
	const arr = useRouteError();
	return (
		<React.Fragment>
			<h1>Something went wrong</h1>
			{/* <div>{arr.error.message}</div> */}
		</React.Fragment>
	);
};
