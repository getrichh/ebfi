import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";

import im1 from "../../img/USA and Canada/1.png";
import im2 from "../../img/USA and Canada/1.1.png";
import im3 from "../../img/USA and Canada/1.2.png";
import im4 from "../../img/USA and Canada/2.png";
import im5 from "../../img/USA and Canada/2.1.png";
import im6 from "../../img/USA and Canada/3.png";
import im7 from "../../img/USA and Canada/4.png";
import im8 from "../../img/USA and Canada/5.png";
import im9 from "../../img/USA and Canada/6.png";


function USAandCanada() {
	const { t, i18n } = useTranslation();
	return (
		  <div>
			  <div className="gallery">

				  <h2>
					  {t("c").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im1} alt=""/>
				  <img className="gallery-image" src={im2} alt=""/>
				  <img className="gallery-image" src={im3} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("c2").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im4} alt=""/>
				  <img className="gallery-image" src={im5} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
				  {t("c3").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im6} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("c4").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im7} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("c5").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im8} alt=""/>

			  </div>
		  </div>
	);
}

export default USAandCanada;