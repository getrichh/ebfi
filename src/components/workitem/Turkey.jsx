import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";


import im1 from "../../img/Turkey/1.png";
import im2 from "../../img/Turkey/2.png";
import im3 from "../../img/Turkey/3.png";
import im4 from "../../img/Turkey/4.png";
import im5 from "../../img/Turkey/5.png";
import im6 from "../../img/Turkey/6.png";
import im7 from "../../img/Turkey/7.png";
import im8 from "../../img/Turkey/8.png";
function Turkey() {
	const { t, i18n } = useTranslation();
	return (
		  <div>
			  <div className="gallery">

				  <h2>
					  {t("x").split('\n').map((line, index) => (
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
					  {t("x2").split('\n').map((line, index) => (
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
					  {t("x3").split('\n').map((line, index) => (
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
					  {t("x4").split('\n').map((line, index) => (
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
					  {t("x5").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im1} alt=""/>

			  </div>
		  </div>
	);
}

export default Turkey;