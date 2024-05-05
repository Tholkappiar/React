import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Addition from "./Addition";
import { About } from "../components/About";
import React from "react";

const sum = (a, b) => {
	return a + b;
};

test("Sum Function", () => {
	const result = Addition(4, 3);

	expect(result).toBe(7);
});

test("Contact Page", () => {
	render(<About />);
	const content = screen.getByRole("heading");
	expect(content).toBeInTheDocument();
});
