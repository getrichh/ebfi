import { useTranslation } from 'react-i18next';
import React from 'react';

import "../../Gallery.css";



import alg1  from "../../img/Algeria/alg1.png";
import alg2 from "../../img/Algeria/Fotoram.io.png";
import alg3 from "../../img/Algeria/alg3.png";
import alg4 from "../../img/Algeria/alg4.png";
import alg5 from "../../img/Algeria/alg5.png";
import alg6 from "../../img/Algeria/alg6.png";
import alg7 from "../../img/Algeria/alg7.png";
import alg8 from "../../img/Algeria/alg8.png";
import alg9 from "../../img/Algeria/alg9.png";
import alg10 from "../../img/Algeria/alg10.png";


function Algeria() {
	const { t, i18n } = useTranslation();
	return (
		  <div>

			  <div className="gallery">
				  <h2>
					  {t("l").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg1} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l2").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg2} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l3").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>


			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l4").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg3} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l5").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg4} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l6").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg5} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l7").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg6} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l8").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg7} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l9").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg8} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l10").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg9} alt=""/>

			  </div>
			  <div className="gallery">

				  <h2>
					  {t("l11").split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br/>
							</React.Fragment>
					  ))}
				  </h2>
				  <img className="gallery-image" src={alg10} alt=""/>

			  </div>



		  </div>


	);
}

export default Algeria;
