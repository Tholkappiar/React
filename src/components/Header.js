import { useContext } from "react";
import logo from "../../Assets/food-logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "./UserContext";

const Header = () => {
	const onlineStatus = useOnlineStatus();

	let { isLoggedIn, user } = useContext(UserContext);
	isLoggedIn = true;
	console.log(isLoggedIn);

	return (
		<div className="flex justify-around bg-gray-300 mb-4">
			<img className="size-20" src={logo}></img>
			<div className="flex items-center">
				<ul className="font-sans flex gap-8">
					<div>online Status : {onlineStatus ? "✅" : "❌"}</div>
					<Link to={"/about"} className="link">
						About Us
					</Link>
					<Link to={"/contact"} className="link">
						Contact
					</Link>
					<Link to={"/func"} className="link">
						Cart
					</Link>
					<p>{user}</p>
				</ul>
			</div>
		</div>
	);
};

export default Header;
