import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header } from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./src/components/About";
import { Error } from "./src/components/Error";

// const heading = React.createElement("h1", { id: "heading" }, "Hi , I am thols");
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);

/**
 * Header
 *  - logo
 *  - navItems
 * Body
 * 	- search
 *  - cards
 * Footer
 * 	- copyright
 * 	- Links
 *  - social
 */

const AppLayout = () => (
	<div>
		<Header />
		<Outlet/>
	</div>
);

const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout/>,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body/>
			},
			{
				path: "/about",
				element: <About/>
			}
		]
	}
]);

root.render(<RouterProvider router={appRoute}/>);
