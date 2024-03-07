import logo from "../../Assets/food-logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
const Header = () => {
	const onlineStatus = useOnlineStatus();

	return (
		<div className="header-container">
			<img className="logo" src={logo}></img>
			<div className="nav">
				<ul className="nav-items">
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
