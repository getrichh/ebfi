import React from 'react';
import Logo from "../img/logo.svg";
import { Link } from 'react-router-dom';

function Footer() {
	return (
		  <footer className="app-footer">
			  <Link to="/" className="logo-link">
				  <img src={Logo} alt=""/>
			  </Link>

			  <p>Oleksandr Shchekan</p>
			  <p> a.shchekan@ebfi.net</p>
			  <p>+380509300468</p>
			  <p>+34623560115</p>
		  </footer>
	);
}

export default Footer;
