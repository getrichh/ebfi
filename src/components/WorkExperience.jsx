import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // Для программной навигации
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from 'react-i18next';

import Alglogo from "../img/alglogo.png";
import Brzlogo from "../img/brzlogo.png";
import Chinlogo from "../img/chinlogo.png";
import Evrplogo from "../img/evrplogo.png";
import Korlogo from "../img/korlogo.png";
import malzlogo from "../img/malzlogo.png";
import Turklogo from "../img/turklogo.png";
import Ukrlogo from "../img/ukrlogo.png";
import Usalogo from "../img/usalogo.png";
import Azovstal from "../img/Azovstal/2.png"


const WorkExperience = () => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate(); // Хук для навигации
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	};


	const experiences = [
		{
			id: "1",
			title: t("Algeria"),
			image: Alglogo,
			detailPath: "/work-experience/algeria"
		},
		{
			id: "2",
			title: t("Ukraine"),
			image: Ukrlogo,
			detailPath: "/work-experience/ukraine"
		},
		{
			id: "3",
			title: t("Azovstal"),
			image: Azovstal,
			detailPath: "/work-experience/azovstal"
		},
		{
			id: "4",
			title: t("Brazil"),
			image: Brzlogo,
			detailPath: "/work-experience/brazil"
		},
		{
			id: "5",
			title: t("China"),
			image: Chinlogo,
			detailPath: "/work-experience/china"
		},
		{
			id: "6",
			title: t("Europe"),
			image: Evrplogo,
			detailPath: "/work-experience/europe"
		},
		{
			id: "7",
			title: t("Korea"),
			image: Korlogo,
			detailPath: "/work-experience/korea"
		},
		{
			id: "8",
			title: t("Malaysia and Indonesia"),
			image: malzlogo,
			detailPath: "/work-experience/malaysiaandindonesia"
		},
		{
			id: "9",
			title: t("Turkey"),
			image: Turklogo,
			detailPath: "/work-experience/turkey"
		},
		{
			id: "10",
			title: t("USA and Canada"),
			image: Usalogo,
			detailPath: "/work-experience/usaandcanada"
		},
	];

	return (
		  <div style={{ padding: '20px' }}>
			  <Slider {...settings}>
				  {experiences.map((exp, index) => (
						<div key={index} style={{position: 'relative', textAlign: 'center'}}>
							<h3 style={{fontSize:'32px'}} >{exp.title} </h3>
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

export default WorkExperience;
