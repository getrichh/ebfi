import React from 'react';
import { useTranslation } from 'react-i18next';

const Audits = () => {
	const { t, i18n } = useTranslation();

	return(
		  <div>
			  <h2>{t("r2")}</h2>
			  <h2>
				  {t("r").split('\n').map((line, index) => (
						<React.Fragment key={index}>
							{line}
							<br/>
						</React.Fragment>
				  ))}
			  </h2>
		  </div>
	)

};

export default Audits;