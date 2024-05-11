
import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";

import im1 from "../../img//Malaysia and Indonesia/1.png";
import im2 from "../../img/Malaysia and Indonesia/11.png";
import im3 from "../../img/Malaysia and Indonesia/2.png";
import im4 from "../../img/Malaysia and Indonesia/22.png";
import im5 from "../../img/Malaysia and Indonesia/3.png";
import im6 from "../../img/Malaysia and Indonesia/33.png";
import im7 from "../../img/Malaysia and Indonesia/333.png";
import im8 from "../../img/Malaysia and Indonesia/4.png";
import im9 from "../../img/Malaysia and Indonesia/44.png";

function MalaysiaAandIndonesia() {
	const { t, i18n } = useTranslation();
	return (

		  <div>
			  <div className="gallery">

				  <h2>
					  {t("v").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im1} alt=""/>
				  <img className="gallery-image" src={im2} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("v2").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im3} alt=""/>
				  <img className="gallery-image" src={im4} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("v3").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im5} alt=""/>
				  <img className="gallery-image" src={im6} alt=""/>
				  <img className="gallery-image" src={im7} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("v4").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im8} alt=""/>
				  <img className="gallery-image" src={im9} alt=""/>

			  </div>
		  </div>
	);
}

export default MalaysiaAandIndonesia;