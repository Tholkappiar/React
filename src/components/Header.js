import logo from "../../Assets/food-logo.png";
import { Link } from "react-router-dom";

export const Header = () => (
	<div className="header-container">
		<img className="logo" src={logo}></img>
		<div className="nav">
			<ul className="nav-items">
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

// export default Header;
