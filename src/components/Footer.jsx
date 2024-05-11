import React from 'react';
import Logo from "../img/logo.svg"

function Footer() {
	return (
		  <footer className="app-footer">
			  <img src={Logo} alt=""/>
			  <p>Contact us at contact@example.com</p>
		  </footer>
	);
}

export default Footer;
