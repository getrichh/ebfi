import React from 'react';
import { useTranslation } from 'react-i18next';

function History() {
	const { t, i18n } = useTranslation();
	return(
		  <div>
			  <div style={{fontSize: "48px", textAlign: 'center'}}>{t("History")}</div>
			  <div style={{fontSize: "32px", textAlign: 'center', marginTop: "10%"}}
				   className="history">{t('HistoryT')}</div>
		  </div>
	)
}

export default History;
