import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DateTime from "./DateTime";
import Logo from "../img/logo.svg"

function Header() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		  <header className="app-header">
			  <DateTime></DateTime>
			  <div className="logo">
				  <img src={Logo} alt=""/>
				  </div>
			  <div className="menu">
				  <button onClick={() => setIsOpen(!isOpen)} onTouchStart={() => setIsOpen(!isOpen)} className="dropdown-button">Menu</button>
				  {isOpen && (
						<div className="dropdown-content">
							<ul>
								<Link to="/history" onClick={() => setIsOpen(false)}>{t('History')}</Link>
								<Link to="/activities" onClick={() => setIsOpen(false)}>{t('Activities')}</Link>
								<Link to="/work-experience"
									  onClick={() => setIsOpen(false)}>{t('Work Experience')}</Link>
								<Link to="/geography" onClick={() => setIsOpen(false)}>{t('Geography')}</Link>

							</ul>
						</div>
				  )}
			  </div>
			  <div className="language-switcher">
				  <button onClick={() => changeLanguage('en')}>EN</button>
				  <button onClick={() => changeLanguage('ru')}>RU</button>
			  </div>
		  </header>
	);
}

export default Header;
