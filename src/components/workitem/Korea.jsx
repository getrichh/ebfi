import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";

import im1 from "../../img/Korea/1.png";
import im2 from "../../img/Korea/2.png";
import im3 from "../../img/Korea/3.png";
import im4 from "../../img/Korea/4.png";
import im5 from "../../img/Korea/5.png";
import im6 from "../../img/Korea/6.png";
import im7 from "../../img/Korea/7.png";

function Korea() {
	const { t, i18n } = useTranslation();
	return (
		  <div>

			  <div className="gallery">
				  <h2 className="gallery-title">{t("h")}</h2>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("h2").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("h3").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("h4")}</h2>
				  <img className="gallery-image" src={im1} alt=""/>
				  <img className="gallery-image" src={im2} alt=""/>
				  <img className="gallery-image" src={im3} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("h5")}</h2>
				  <img className="gallery-image" src={im4} alt=""/>
				  <img className="gallery-image" src={im5} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("h6")}</h2>
				  <img className="gallery-image" src={im6} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("h7")}</h2>
				  <img className="gallery-image" src={im7} alt=""/>
			  </div>


		  </div>
	);
}

export default Korea;