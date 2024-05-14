import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";
import im1 from "../../img/Azovstal/1.png";
import im2 from "../../img/Azovstal/2.png";
import im3 from "../../img/Azovstal/3.png";
import im4 from "../../img/Azovstal/4.png";




function Ukraine() {
	const { t, i18n } = useTranslation();
	return (
		  <div>


			  <div className="gallery">
				  <h2 className="gallery-title">{t("Azovstal")}</h2>
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
				  <h2>
					  {t("g").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im1} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("g2").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im2} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("g3").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im3} alt=""/>
			  </div>
			  <div className="gallery">
				  <h2>
					  {t("g4").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im4} alt=""/>
			  </div>
		  </div>

	);
}

export default Ukraine;