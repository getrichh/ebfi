import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";




import im1 from "../../img/Brazil/1.png";
import im2 from "../../img/Brazil/2.png";
import im3 from "../../img/Brazil/3.png";
import im4 from "../../img/Brazil/4.png";
import im5 from "../../img/Brazil/5.png";
import im6 from "../../img/Brazil/6.png";
import im7 from "../../img/Brazil/7.png";
import im8 from "../../img/Brazil/8.png";
import im9 from "../../img/Brazil/9.png";
import im10 from "../../img/Brazil/10.png";
import im11 from "../../img/Brazil/11.png";
import im12 from "../../img/Brazil/12.png";
function Brazil() {

	const { t, i18n } = useTranslation();
	return (
		  <div>


			  <div className="gallery">
				  <h2>{t("m").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im1} alt=""/>

			  </div>
			  <div className="gallery">
				  <h2>{t("m2").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im2} alt=""/>
				  <img className="gallery-image" src={im3} alt=""/>

			  </div>
			  <div className="gallery">
				  <h2>{t("m3").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im4} alt=""/>

			  </div>
			  <div className="gallery">
				  <h2>{t("m4").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im5} alt=""/>

			  </div>
			  <div className="gallery">
				  <h2>{t("m5").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im6} alt=""/>
				  <img className="gallery-image" src={im7} alt=""/>


			  </div>
			  <div className="gallery">
				  <h2>{t("m6").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im8} alt=""/>

			  </div>
			  <div className="gallery">
				  <h2>{t("m7").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im9} alt=""/>

			  </div>
			  <div className="gallery">
				  <h2>{t("m8").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}</h2>

				  <img className="gallery-image" src={im10} alt=""/>
				  <img className="gallery-image" src={im11} alt=""/>
				  <img className="gallery-image" src={im12} alt=""/>

			  </div>

		  </div>
	);
}

export default Brazil;