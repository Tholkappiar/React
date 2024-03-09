import logo from "../../Assets/food-logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
const Header = () => {
	const onlineStatus = useOnlineStatus();

	return (
		<div className="flex justify-around">
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
				</ul>
			</div>
		</div>
	);
};

export default Header;
