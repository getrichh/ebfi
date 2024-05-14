import React from 'react';
import Logo from "../img/logo.svg"

function Footer() {
	return (
		  <footer className="app-footer">
			  <img src={Logo} alt=""/>
			  <p>Oleksandr Shchekan</p>
			  <p> a.shchekan@ebfi.net</p>
			  <p>+380509300468</p>
			  <p>+34623560115</p>
		  </footer>
	);
}

export default Footer;
