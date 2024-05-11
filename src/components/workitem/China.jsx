
import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";

import im1 from "../../img/China/1.png";
import im2 from "../../img/China/2.png";
import im3 from "../../img/China/3.png";
import im4 from "../../img/China/4.png";
import im5 from "../../img/China/5.png";
import im6 from "../../img/China/6.png";
import im7 from "../../img/China/7.png";
import im8 from "../../img/China/77.png";


function China() {
	const { t, i18n } = useTranslation();
	return (
		  <div>
			  <div className="gallery">

				  <h2>
					  {t("b").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>


			  </div>
			  <div className="gallery">

				  <h2>
					  {t("b2").split('\n').map((line, index) => (
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
					  {t("b3").split('\n').map((line, index) => (
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
					  {t("b4").split('\n').map((line, index) => (
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
					  {t("b5").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im4} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("b6").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im5} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("b7").split('\n').map((line, index) => (
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
					  {t("b8").split('\n').map((line, index) => (
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
					  {t("b9").split('\n').map((line, index) => (
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

export default China;