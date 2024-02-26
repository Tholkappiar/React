import logo from "../../Assets/food-logo.png";

export const Header = () => (
	<div className="header-container">
		<img className="logo" src={logo}></img>
		<div className="nav">
			<ul className="nav-items">
				<li>Home</li>
				<li>About Us</li>
				<li>Contact</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>
);

// export default Header;
