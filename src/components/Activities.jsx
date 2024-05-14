import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'; // Для программной навигации

import { useTranslation } from 'react-i18next';


import  slideActivities1 from "../img/Activities/picture_Aadits.jpg"
import  slideActivities2 from "../img/Activities/-Quality_control_new.jpg"
import  slideActivities3 from "../img/Activities/Preshipment_new.jpg"
import  slideActivities4 from "../img/Activities/Marine_Survey_new.jpg"


const Activities = () => {

	const { t, i18n } = useTranslation();
	const navigate = useNavigate(); // Хук для навигации
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
	};

	const activities = [
		{
			title: t("r2"),

			image: slideActivities1,
			detailPath: "/work-experience/audits"
		},
		{
			title: t("y"),

			image: slideActivities2,
			detailPath: "/work-experience/quality"
		},
		{
			title: t("pre"),

			image: slideActivities3,
			detailPath: "/work-experience/preshipmentinspection"
		},
		{
			title: t("mar"),

			image: slideActivities4,
			detailPath: "/work-experience/marinesurvey"
		}


	];

	return (
		  <div style={{padding: '20px'}}>
			  <Slider {...settings}>
				  {activities.map((exp, index) => (
						<div key={index} style={{position: 'relative', textAlign: 'center'}}>
							<h3 style={{fontSize: '32px'}}>{exp.title} </h3>
							<img src={exp.image} alt={exp.title} style={{width: 'auto', height: '700px'}}/>
							<div>
								<button onClick={() => navigate(exp.detailPath)}
										style={{padding: '10px 20px', margin: '10px'}}>
									{t("Open")}
								</button>
							</div>
						</div>
				  ))}
			  </Slider>
		  </div>
	);
}

export default Activities;
