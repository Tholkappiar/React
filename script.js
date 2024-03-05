import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header } from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./src/components/About";
import { Error } from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
import UserClass from "./src/components/UserClass";
import UserFunc from "./src/components/UserFunc";

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
		<Outlet />
	</div>
);

const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurants/:id",
				element: <RestaurantsMenu />,
			},
			{
				path: "/res/:Id",
				element: <RestaurantsMenu />,
			},
			{
				path: "/class",
				element: <UserClass name={"thols"} location={"salem"} />,
			},
			{
				path: "/func",
				element: (
					<>
						<UserClass />
						<UserClass />
					</>
				),
			},
		],
	},
]);

root.render(<RouterProvider router={appRoute} />);
