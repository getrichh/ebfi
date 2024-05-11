import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";

import im1 from "../../img/Ukraine/1.png";
import im2 from "../../img/Ukraine/2.png";
import im3 from "../../img/Ukraine/3.png";
import im4 from "../../img/Ukraine/4.png";
import im5 from "../../img/Ukraine/5.png";
import im6 from "../../img/Ukraine/6.png";
import im7 from "../../img/Ukraine/7.png";
import im8 from "../../img/Ukraine/8.png";
import im9 from "../../img/Ukraine/9.png";
import im10 from "../../img/Ukraine/10.png";
import im11 from "../../img/Ukraine/11.png";
import im12 from "../../img/Ukraine/12.png";
import im13 from "../../img/Ukraine/13.png";
import im14 from "../../img/Ukraine/14.png";
import im15 from "../../img/Ukraine/15.png";




function Ukraine() {
	const { t, i18n } = useTranslation();
	return (
		  <div>


			  <div className="gallery">
				  <h2 className="gallery-title">{t("z")}</h2>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("z1").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z2")}</h2>
				  <img className="gallery-image" src={im1} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z3")}</h2>
				  <img className="gallery-image" src={im2} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z4")}</h2>
				  <img className="gallery-image" src={im3} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z5")}</h2>
				  <img className="gallery-image" src={im4} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z6")}</h2>
				  <img className="gallery-image" src={im5} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z7")}</h2>
				  <img className="gallery-image" src={im6} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z8")}</h2>
				  <img className="gallery-image" src={im7} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("z9").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z10")}</h2>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("z11").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im8} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z13")}</h2>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("z14").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>

				  <img className="gallery-image" src={im9} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("z15").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im10} alt=""/>
				  <img className="gallery-image" src={im11} alt=""/>
				  <img className="gallery-image" src={im12} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z16")}</h2>
				  <img className="gallery-image" src={im13} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z17")}</h2>
				  <img className="gallery-image" src={im14} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2 className="gallery-title">{t("z18")}</h2>
				  <img className="gallery-image" src={im15} alt=""/>
			  </div>


		  </div>
	);
}

export default Ukraine;