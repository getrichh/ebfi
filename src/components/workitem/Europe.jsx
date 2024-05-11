
import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";

import im1 from "../../img/Europe/1.png";
import im2 from "../../img/Europe/2.png";
import im3 from "../../img/Europe/3.png";
import im4 from "../../img/Europe/4.png";
import im5 from "../../img/Europe/5.png";
import im6 from "../../img/Europe/6.png";
import im7 from "../../img/Europe/7.png";
import im8 from "../../img/Europe/8.png";
import im9 from "../../img/Europe/9.png";



function Europe() {
	const { t, i18n } = useTranslation();
	return (
		  <div>
			  <div className="gallery">

				  <h2>
					  {t("n").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>


			  </div>
			  <div className="gallery">

				  <h2>
					  {t("n2").split('\n').map((line, index) => (
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
					  {t("n3").split('\n').map((line, index) => (
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
				  {t("n4").split('\n').map((line, index) => (
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
					  {t("n5").split('\n').map((line, index) => (
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
					  {t("n6").split('\n').map((line, index) => (
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
					  {t("n7").split('\n').map((line, index) => (
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
					  {t("n8").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im8} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("n9").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={im9} alt=""/>

			  </div>
		  </div>
	);
}

export default Europe;