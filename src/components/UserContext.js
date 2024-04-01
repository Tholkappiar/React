import { createContext } from "react";

const UserContext = createContext({
	isLoggedIn: false,
	user: "user",
});

export default UserContext;
