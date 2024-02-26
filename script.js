import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { mockData } from "./utils/mockData";
import { Header } from "./src/components/Header";
import Body from "./src/components/Body";

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
		<Body apidata={mockData} />
	</div>
);

root.render(AppLayout());
