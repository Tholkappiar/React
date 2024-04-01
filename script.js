import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
import UserClass from "./src/components/UserClass";
import UserContext from "./src/components/UserContext";

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

const Header = lazy(() => import("./src/components/Header"));

const AppLayout = () => {
	const [username, setusername] = useState(useContext(UserContext).user);

	return (
		<div>
			<UserContext.Provider value={{ user: username, setusername }}>
				<Suspense fallback={<div>Loading.........</div>}>
					<Header />
				</Suspense>
				<Outlet />
			</UserContext.Provider>
		</div>
	);
};

const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
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
