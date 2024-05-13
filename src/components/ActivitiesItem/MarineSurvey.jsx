import React from 'react';
import { useTranslation } from 'react-i18next';

const Marinesurvey = () => {
	const { t, i18n } = useTranslation();

	return(
		  <div>
			  <h2>{t("mar")}</h2>
			  <h2>
				  {t("mar2").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}
			  </h2>
		  </div>
	)

};

export default Marinesurvey ;