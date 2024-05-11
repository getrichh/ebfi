import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			"History": "History",
			"Work Experience": "Work Experience",
			"Geography": "Geography",
			"Activities": "Activities",

			"HistoryT": "Engineering Bureau Franke International LLC has been successfully operating in the field of inspection services for over 40 years. It was founded as an independent company in 1973 in Germany. In 2006, as part of a business expansion strategy, it was decided to establish a branch - Engineering Bureau Franke International (IBFI). The basis for this decision was an analysis of the trends in the growth of demand for the provision of highly professional inspection services in the CIS and Asian steel markets. From 2008 to 2020, the company's owners developed offices on all continents. In this case, we can say that we have offices, branches, and our representatives in such countries as China, Uzbekistan, India, Germany, Italy, USA, Brazil, Algeria, UAE, and others.",

			"Open": "Open",
			// workItems
			"Turkey": "Turkey",
			"Algeria": "Algeria",
			"Brazil ": "Brazil ",
			"Malaysia and Indonesia": "Malaysia and Indonesia",
			"USA and Canada": "USA and Canada",
			"Korea ": "Korea ",
			"China ": "China ",
			"Europe": "Europe",
			"Ukraine": "Ukraine",

			// Korea
			"h": "Products – Hot-rolled sheet, coils, round billets",
			"h2": "Inspection task:\n" +
				  "Cargo identification during storage in the port (pre-loading inspection)\n" +
				  "- determining storage locations in the port;\n" +
				  "- visual identification of the cargo according to the accompanying documents;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- inventory of cargo quantity;\n" +
				  "- visual inspection of the accessible cargo condition;\n" +
				  "- control of the condition of the workplace;\n" +
				  "- control the factory and color markings, factory labels, packaging condition;\n" +
				  "- issuing a final act of storage inspection with attachments and photographs.",
			"h3": "Inspection during the loading of cargo onto the ship (loading/unloading inspection)\n" +
				  "- identification of cargo according to accompanying documents;\n" +
				  "- visual inspection of the cargo condition;\n" +
				  "- control of cargo non-radioactivity;\n" +
				  "- control of the condition of the workplace;\n" +
				  "- control of factory and color markings, factory labels, packaging condition in the port warehouse before and during loading;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- verification of compliance with the international ISPM 15 requirements;\n" +
				  "- keeping records of cargo during loading;\n" +
				  "- control of loading cargo into the ship's holds according to the expedition documents and cargo plan;\n" +
				  "- visual control of the trimming and stowing process in the holds during loading;\n" +
				  "- draft survey of the weight of the loaded cargo;\n" +
				  "- brief daily reports on the inspection stages;\n" +
				  "- issuing a final inspection report with attached documents and photographs.",
			"h4": "BUSAN PORT, SOUTH KOREA",
			"h5": "DANGJIN PORT, SOUTH KOREA",
			"h6": "GWANGYANG PORT, SOUTH KOREA",
			"h7": "POHANG PORT, SOUTH KOREA",

			// Ukraine

			"z": "Dnipro Metallurgical Plant / \"DMK\"",
			"z1": "Providing quality and quantity inspection services, with the following inspection task:\n" +
				  "1. Random control and presence during the carrying out of geometric measurements and deviations\n" +
				  "2. Random control, presence, and marking during the sampling for testing\n" +
				  "3. Random control and presence during mechanical testing\n" +
				  "4. Random control and presence during microstructure analysis\n" +
				  "5. Verification of test results according to factory quality documents\n" +
				  "6. Packaging and label information control\n" +
				  "7. Tallyman's count of shipped products\n" +
				  "8. Verification and signing of quality certificates\n" +
				  "9. Preliminary inspection reports\n" +
				  "10. Issuance of the final inspection report.\n",
			"z2": "Hot-rolled steel angle",
			"z3": "Hot-rolled steel channel",
			"z4": "Wire rod in coils",
			"z5": "Reinforcing bars",
			"z6": "Square billet",
			"z7": "Round billet",
			"z8": "Tests",
			"z9": "Incoming control of the following raw materials/materials:\n" +
				  "\n" +
				  "Iron ore concentrate\n" +
				  "Agglomerated iron ore\n" +
				  "Anthracite\n" +
				  "Ordinary limestone\n" +
				  "Dolomitized limestone  \n" +
				  "Lime\n" +
				  "Iron ore pellets\n" +
				  "MK ore\n" +
				  "Blast furnace coke\n" +
				  "High-temperature tar\n" +
				  "Fluorspar\n" +
				  "Slag-forming and insulating mixes\n" +
				  "Periclase-chromite products\n" +
				  "Fireclay products\n" +
				  "Ladle products\n" +
				  "Dinas products\n" +
				  "Quartzite products. Unfired\n" +
				  "Mullite-corundum ladle\n" +
				  "Mullite-corundum for steel casting               \n" +
				  "Quartz cups\n" +
				  "Ferrosilicomanganese                             \n" +
				  "Ferrosilicon                                              \n" +
				  "Ferromanganese\n" +
				  "Secondary aluminum \n" +
				  "\n" +
				  "Inspection task:\n" +
				  "- Identification of the incoming material in accordance with the accompanying documentation.\n" +
				  "- Visual assessment of the packaging preservation.\n" +
				  "- Visual assessment of the integrity of the containers if the material is supplied in boxes, crates, kegs, bags, etc.\n" +
				  "- Visual control of the incoming material.\n" +
				  "- Random control of geometric dimensions.\n" +
				  "- Random or 100% control of the quantity of incoming material.\n" +
				  "- Participation along with the representatives of the plant in presenting rejected products to the supplier.\n" +
				  "- Incoming control, performed by sampling and conducting laboratory tests.\n" +
				  "- Presence and control of sampling by the plant's samplers.\n" +
				  "- Sealing, marking, or stamping of the sampled samples/probes.\n" +
				  "- Presence and control of the results of laboratory tests in laboratories.\n",
			"z10": "LLC \"Unistil\", Kryvyi Rih",
			"z11": "Inspection during the galvanizing process of cold-rolled steel in coils, during shipment, with the following inspection task:\n" +
				  "1. Control of technological data and production technology:\n" +
				  "- control of the melt temperature in the galvanizing bath;\n" +
				  "- visual control of the melt level in the galvanizing bath;\n" +
				  "- accompaniment during the control of the chemical composition of the melt for galvanizing;\n" +
				  "2. Visual inspection of the top surface of the galvanized strip during production;\n" +
				  "3. Visual inspection of the rolls available in the warehouse before packaging;\n" +
				  "4. Control of geometric dimensions;\n" +
				  "5. Accompaniment and control during sample collection, verification of correct marking of samples;\n" +
				  "6. Accompaniment during testing, control of results indicated in protocols;\n" +
				  "7. Control and accompaniment during loading of products;\n" +
				  "8. Photo report;\n" +
				  "9. Verification and signing of quality certificates;\n" +
				  "10. Issuance of the final inspection report.",
			"z13": "PJSC \"ArcelorMittal\" Kryvyi Rih",
			"z14": "Audit of the production process:\n" +
				  "- Document verification\n" +
				  "- Verification of purchased components and materials\n" +
				  "- Production/control monitoring \n" +
				  "- Routine testing\n" +
				  "- Handling and storage\n" +
				  "- Management certification",
			"z15": "Inspection in ports\n" +
				  "\n" +
				  "Products:\n" +
				  "- pig iron in ingots\n" +
				  "- hot-rolled, cold-rolled sheet\n" +
				  "- wire rod in coils\n" +
				  "- square billet\n" +
				  "- reinforcing steel\n" +
				  "\n" +
				  "Inspection task:\n" +
				  "Cargo identification during storage in the port (pre-loading inspection)\n" +
				  "- determining storage locations in the port;\n" +
				  "- visual identification of the cargo according to the accompanying documents;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- inventory of cargo quantity;\n" +
				  "- visual inspection of the accessible cargo condition;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control the factory and color markings, factory labels, packaging condition;\n" +
				  "- issuing a final act of storage inspection with attachments and photographs.\n" +
				  "\n" +
				  "Inspection during the loading of cargo onto the ship (loading/stowing inspection)\n" +
				  "- identification of cargo according to accompanying documents;\n" +
				  "- visual inspection of the cargo condition;\n" +
				  "- control of cargo non-radioactivity;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control of factory and color markings, factory labels, packaging condition in the port warehouse before and during loading;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- verification of the assembly mass according to ISPM 15;\n" +
				  "- keeping records of cargo during loading;\n" +
				  "- control of loading cargo into the ship's holds according to the expedition documents and cargo plan;\n" +
				  "- visual control of the trimming and stowing process in the holds during loading;\n" +
				  "- draft survey of the weight of the loaded cargo;\n" +
				  "- brief daily reports on the inspection stages;\n" +
				  "- issuing a final inspection report with attached documents and photographs.",
			"z16": "Nikolaev Sea Trade Port",
			"z17": "Mariupol Sea Trade Port",
			"z18": "Odessa Sea Trade Port",

			// Turkey

			"x": "Manufacturer - YESILYURT DEMIR CELIK END. VE LIMAN ISL. A.S.\n" +
				  "Products – Square billet\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"x2": "Manufacturer - ICDAS CELIK ENERJI TERSANE VE ULASIM SANAYI A.S., TURKEY\n" +
				  "Products – Square billet\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"x3": "Manufacturer - KOC METALURJI A.S.\n" +
				  "Products – Square billet\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"x4": "ICDAS PORT",
			"x5": "YEŞILYURT PORT",

			// USA and Canada

			"c": "MOBILE, AL, USA  \n" +
				  "\n" +
				  "Inspection task - Inspection during unloading\n" +
				  "- observation of the unloading process\n" +
				  "- - draft survey of the weight of the unloaded cargo ship / barge\n" +
				  "- brief daily reports on the inspection stages\n" +
				  "- issuance of the draft act of survey indicating the weight according to the draft survey",
			"c2": "NEW ORLEANS, LA, USA",
			"c3": "CORPUS CHRISTI PORT, TX, USA ",
			"c4": "BROWNSVILLE PORT, TX, USA",
			"c5": "CONTRECOEUR PORT, CANADA",

			// Malaysia and Indonesia

			"v": "Manufacturer - EASTERN STEEL SDN.BHN, KEMAMAN, MALAYSIA\n" +
				  "Products – Steel slabs\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"v2": "KEMAMAN PORT, MALAYSIA",
			"v3": "MANUFACTURER - DEXIM STEEL INDONESIA\n" +
				  "Products – Steel slabs\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"v4": "BAHODOPI PORT, INDONESIA",

			// China

			"b": "Products – Steel slabs, reinforcing bars\n" +
				  "\n" +
				  "Inspection task:\n" +
				  "Cargo identification during storage in the port (pre-loading inspection)\n" +
				  "- determining storage locations in the port;\n" +
				  "- visual identification of the cargo according to the accompanying documents;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- inventory of cargo quantity;\n" +
				  "- visual inspection of the accessible cargo condition;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control the factory and color markings, factory labels, packaging condition;\n" +
				  "- issuing a final act of storage inspection with attachments and photographs.",
			"b2": "Inspection during the loading of cargo onto the ship (loading/unloading inspection)\n" +
				  "- identification of cargo according to accompanying documents;\n" +
				  "- visual inspection of the cargo condition;\n" +
				  "- control of cargo non-radioactivity;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control of factory and color markings, factory labels, packaging condition in the port warehouse before and during loading;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- verification of the assembly mass according to ISPM 15;\n" +
				  "- keeping records of cargo during loading;\n" +
				  "- control of loading cargo into the ship's holds according to the expedition documents and cargo plan;\n" +
				  "- visual control of the trimming and stowing process in the holds during loading;\n" +
				  "- draft survey of the weight of the loaded cargo;\n" +
				  "- brief daily reports on the inspection stages;\n" +
				  "- issuing a final inspection report with attached documents and photographs.",
			"b3": "ZHANGJIAGANG PORT, CHINA",
			"b4": "ZHANJIANG, CHINA",
			"b5": "JIANGYIN PORT, CHINA",
			"b6": "SHANGHAI PORT, CHINA",
			"b7": "LIANYUNGANG PORT, CHINA",
			"b8": "RIO DE JANEIRO PORT, BRAZIL",
			"b9": "HONG KONG PORT, CHINA",

			// Europe

			"n": "Products – Steel slabs, square billet\n" +
				  "\n" +
				  "Inspection task:\n" +
				  "Cargo identification during storage in the port (pre-loading inspection)\n" +
				  "- determining storage locations in the port;\n" +
				  "- visual identification of the cargo according to the accompanying documents;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- inventory of cargo quantity;\n" +
				  "- visual inspection of the accessible cargo condition;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control the factory and color markings, factory labels, packaging condition;\n" +
				  "- issuing a final act of storage inspection with attachments and photographs.\n",
			"n2": "Inspection during the loading of cargo onto the ship (loading/unloading inspection)\n" +
				  "- identification of cargo according to accompanying documents;\n" +
				  "- visual inspection of the cargo condition;\n" +
				  "- control of cargo non-radioactivity;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control of factory and color markings, factory labels, packaging condition in the port warehouse before and during loading;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- verification of the assembly mass according to ISPM 15;\n" +
				  "- keeping records of cargo during loading;\n" +
				  "- control of loading cargo into the ship's holds according to the expedition documents and cargo plan;\n" +
				  "- visual control of the trimming and stowing process in the holds during loading;\n" +
				  "- draft survey of the weight of the loaded cargo;\n" +
				  "- brief daily reports on the inspection stages;\n" +
				  "- issuing a final inspection report with attached documents and photographs.",
			"n3": "GHENT PORT, BELGIUM",
			"n4": "ANTWERP PORT, BELGIUM",
			"n5": "GDYNIA PORT, POLAND",
			"n6": "SZCZECIN PORT, POLAND",
			"n7": "Warehouse inspection / inventory\n" +
				  "\n" +
				  "Inspection location - MOSTAR, BOSNIA AND HERZEGOVINA\n" +
				  "Products – Aluminum billet\n" +
				  "Inspection task:\n" +
				  "- counting the number of pieces;\n" +
				  "- control of the overall condition of the warehouse (condition of the facility, order, technical condition);\n" +
				  "- control of rooms where materials are stored and safety techniques;\n" +
				  "- verification of warehouse security systems;\n" +
				  "- checking the video surveillance systems at the warehouse;\n" +
				  "- compiling the accompanying form with information provided by the warehouse.\n" +
				  "- issuance of the final report;\n" +
				  " - photo report.",
			"n8": "Inspection location – TORNYOSPALCA, HUNGARY\n" +
				  "Products – Galvanized hot-rolled steel in coils, paint products\n" +
				  "Inspection task:\n" +
				  "- counting the number of pieces;\n" +
				  "- control of the overall condition of the warehouse (condition of the facility, order, technical condition);\n" +
				  "- control of rooms where materials are stored and safety techniques;\n" +
				  "- verification of warehouse security systems;\n" +
				  "- checking the video surveillance systems at the warehouse;\n" +
				  "- compiling the accompanying form with information provided by the warehouse.\n" +
				  "- issuance of the final report;\n" +
				  " - photo report.",
			"n9": "LITHUANIA, KLAIPEDA\n" +
				  "Products – steel scrap\n" +
				  "Inspection task:\n" +
				  "1. Description, verification of storage conditions, placement of products in the warehouse;\n" +
				  "2. Verification, determination of the quantity of products in the warehouse according to the accounting documentation;\n" +
				  "3. Description of the arrival of products, movement in the warehouse, and shipment of products;\n" +
				  "4. Visual control of product contamination;\n" +
				  "5. Visual control of the presence of explosive, flammable parts;\n" +
				  "6. Control of product non-radioactivity;\n" +
				  "7. Round-the-clock control and monitoring of the loading process;\n" +
				  "8. Issuance of the final inspection report;\n" +
				  "9. Issuance of the draft act of survey indicating the weight according to the draft survey;\n" +
				  "10. Issuance of the quality certificate.\n" +
				  "11. Photo report.",

			// Brazil

			"m": "Manufacturer - GERDAU ACOMINAS, S.A., BRAZIL\n" +
				  "Products – Square billet\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"m2": "Manufacturer - GERDAU ACOS LONGOS, S.A., BRAZIL\n" +
				  "Products – Square billet\n" +
				  "Inspection task:\n" +
				  "- control of the production process;\n" +
				  "- random control and observation during measurements of geometric dimensions and deviations;\n" +
				  "- random control of cargo surface quality, available for visual inspection;\n" +
				  "- random control and observation during the determination of chemical composition;\n" +
				  "- verification of results according to factory quality documents;\n" +
				  "- control of packaging and information on labels;\n" +
				  "- random weight verification;\n" +
				  "- verification of quality certificates;\n" +
				  "- preliminary inspection reports (email, fax, phone);\n" +
				  "- photo reports;\n" +
				  "- issuance of the final inspection report.",
			"m3": "SEPETIBA PORT, BRAZIL",
			"m4": "PRAIA MOLE PORT, BRAZIL",
			"m5": "PIG IRON\n" +
				  "Inspection task:\n" +
				  "\n" +
				  "1/ Cargo identification during storage in the port\n" +
				  "- determining storage location in the port/assessing storage conditions;\n" +
				  "- verification of pig iron compliance with contractual requirements and standards;\n" +
				  "- visual assessment and random measurements of individual item sizes.\n" +
				  "2/ Inspection during loading of cargo onto the ship.\n" +
				  "- control of the loading process;\n" +
				  "- sample collection and preparation\n" +
				  "- assessment of the percentage of broken parts;\n" +
				  "- assessment of the percentage content of non-metallic, muddy, dusty impurities;\n" +
				  "- draft survey of the loaded cargo weight;\n" +
				  "- radiation control;\n" +
				  "- brief daily reports on the inspection stages.\n" +
				  "3/ Inspection during unloading\n" +
				  "- observation of the unloading process;\n" +
				  "- draft survey of the unloaded cargo weight;\n" +
				  "- brief daily reports on the inspection stages.\n" +
				  " \n" +
				  "- Issuance of the draft act of survey indicating the weight according to the draft survey.\n" +
				  "- Issuance of an analysis certificate, issued at the loading port, indicating the complete chemical composition of the material, ingot weight, percentage of shards less than 50/100 grams, as well as the percentage of non-metallic particles, dirt, and dust.\n" +
				  "- Issuance of a non-radioactivity certificate",
			"m6": "TPS PORT, PRAIA MOLE, VITÓRIA ES, BRAZIL",
			"m7": "RIO DE JANEIRO PORT, BRAZIL",
			"m8": "ITAQUI PORT, BRAZIL",


			// Algeria

			"l": "Manufacturer - ALGERIAN QATARI STEEL / AQS, Algeria\n" +
				  "Products – Square billet, reinforcing bars, wire rod in coils\n" +
				  "Approximately 5000 tons per month",
			"l2": "Manufacturer - TOSYALY FER et ACIER, Algeria\n" +
				  "Products – Square billet, reinforcing bars, wire rod in coils\n" +
				  "Approximately 2000 tons per month",
			"l3": "Ports \n" +
				  "Products – Square billet, reinforcing bars, wire rod in coils\n" +
				  "\n" +
				  "Inspection task:\n" +
				  "Cargo identification during storage in the port (pre-loading inspection)\n" +
				  "- determining storage locations in the port;\n" +
				  "- visual identification of the cargo according to the accompanying documents;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- inventory of cargo quantity;\n" +
				  "- visual inspection of the accessible cargo condition;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control the factory and color markings, factory labels, packaging condition;\n" +
				  "- issuing a final act of storage inspection with attachments and photographs.\n" +
				  "\n" +
				  "Inspection during the loading of cargo onto the ship (loading inspection)\n" +
				  "- identification of cargo according to accompanying documents;\n" +
				  "- visual inspection of the cargo condition;\n" +
				  "- control of cargo non-radioactivity;\n" +
				  "- rust condition control by ARS;\n" +
				  "- control of factory and color markings, factory labels, packaging condition in the port warehouse before and during loading;\n" +
				  "- random control of geometric dimensions;\n" +
				  "- verification of the assembly mass according to ISPM 15;\n" +
				  "- keeping records of cargo during loading;\n" +
				  "- control of loading cargo into the ship's holds according to the expedition documents and cargo plan;\n" +
				  "- visual control of the trimming and stowing process in the holds during loading;\n" +
				  "- draft survey of the weight of the loaded cargo;\n" +
				  "- brief daily reports on the inspection stages;\n" +
				  "- issuing a final inspection report with attached documents and photographs.",
			"l4": "ORAN PORT, ALGERIA",
			"l5": "DJEN DJEN PORT, ALGERIA",
			"l6": "MOSTAGANEM PORT, ALGERIA",
			"l7": "ARZEW PORT, ALGERIA",
			"l8": "SOHAR PORT, OMAN",
			"l9": "MINA ZAYED PORT, UAE",
			"l10": "GANGAVARAM PORT, INDIA",
			"l11": "GUAYAQUIL PORT, ECUADOR",


			// Preshipment
			"d":"This type of our services includes inspection of all product’s parameters for ready one:\n" +
				  "\n" +
				  "- visual inspection: during this activity qualified inspector check the items visually and can confirm the item is brand new and hasn’t any defects. Also, at the moment it can be control of coating, logos, markings, etc\n" +
				  "\n" +
				  "- geometric inspection: during this activity inspector will control parameters according to drawings or other technical requirements which consist of size information about the item. During this type of control inspector will use only verified measure equipment. Verification documents will be shown in the report also.\n" +
				  "\n" +
				  "- qualification control: during this type of control, inspector can collect (if inspection goes at the manufacture site) all qualification documents for staff of the manufacture which involved in QCD.\n" +
				  "\n" +
				  "- marking inspection: during it inspector can control written or hot stamp markings on the body of item. It will be compared with standards for marking. Remarks will be shown in report.\n" +
				  "\n" +
				  "- packing inspection: under control will be all packages including net and gross weight. Also, will be shown quantity of loading places. Conditions of packages and comparing to the requirements of our client and standards.\n" +
				  "\n" +
				  "- sealing: based on the requirements we can provide additional sealing of cargo with identification of each loading place.\n" +
				  "\n" +
				  "- quality certificate review: inspector will review MTC for products based on the international standards. If some parameters will be our of range it will be immediately shown in the report."
		}

	},
	ru: {
		translation: {
			"History": "История",
			"Work Experience": "Опыт работы",
			"Geography": "География",
			"Activities": "Виды деятельности",

			"HistoryT":"Engineering Bureau Franke International LLC успешно работает в области инспекционных услуг более 40 лет. Оно было основано как независимая компания в 1973 году в Германии. В 2006 году, в рамках стратегии расширения бизнеса, было принято решение о создании филиала - Engineering Bureau Franke International (IBFI). Основой для этого решения послужил анализ тенденций роста спроса на предоставление высокопрофессиональных инспекционных услуг на сталелитейных рынках СНГ и Азии. В период с 2008 по 2020 год владельцы компании развивали офисы на всех континентах. В этом случае мы можем сказать, что у нас есть офисы, филиалы и наши представители в таких странах, как Китай, Узбекистан, Индия, Германия, Италия, США, Бразилия, Алжир, ОАЭ и другие.",

			"Open": "Открыть",
			// workItems
			"Turkey": "Турция",
			"Algeria": "Алжир",
			"Brazil": "Бразилия",
			"Malaysia and Indonesia": "Малайзия и Индонезия",
			"USA and Canada": "США и Канада",
			"Korea": "Южная Корея",
			"China": "Китай",
			"Europe": "Европа",
			"Ukraine": "Украина",


			// Korea
			"h": "Продукция – Горячекатаный лист, рулоны, круглая заготовка",
			"h2":"Инспекционное задание:\n" +
				  "Идентификация груза при хранении в порту (проверка перед погрузкой)\n" +
				  "- определение мест хранения в порту;\n" +
				  "- визуальная идентификация груза по товаросопроводительным документам;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- учет количества груза;\n" +
				  "- визуальный осмотр состояния доступного груза;\n" +
				  "- контроль состояния рабочих мест;\n" +
				  "- контролировать заводскую и цветовую маркировку, заводские этикетки, состояние упаковки;\n" +
				  "- выпуск итогового акта проверки хранения с приложениями и фотографиями.",
			"h3":"Инспекция при погрузке груза на борт судна (инспекция погрузки/выгрузки)\n" +
				  "- идентификация груза по товаросопроводительным документам;\n" +
				  "- визуальный осмотр состояния груза;\n" +
				  "- контроль нерадиоактивности груза;\n" +
				  "- контроль состояния рабочих мест;\n" +
				  "- контроль заводской и цветовой маркировки, заводских этикеток, состояния упаковки на портовом складе до и во время погрузки;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- проверка соответствия международной системы требованиям ISPM 15;\n" +
				  "- вести учет груза при погрузке;\n" +
				  "- контроль погрузки грузов в трюмах судна согласно экспедиционным документам и грузовому плану;\n" +
				  "- визуальный контроль процесса обрезки и укладки груза в трюмах при погрузке;\n" +
				  "- проект освидетельствования веса загружаемого груза;\n" +
				  "- краткие ежедневные отчеты об этапах проверки;\n" +
				  "- выдача итогового отчета о проверке с приложением документов и фотографий.",
			"h4":"ПОРТ ПУСАН, ЮЖНАЯ КОРЕЯ",
			"h5":"ПОРТ ДАНЧЖИН, ЮЖНАЯ КОРЕЯ",
			"h6":"ПОРТ КВАНЪЯН, ЮЖНАЯ КОРЕЯ",
			"h7":"ПОРТ ПХОХАН, ЮЖНАЯ КОРЕЯ",

			// Ukraine

			"z":"Днепровский металлургический комбинат / «ДМК»",
			"z1":"Предоставление услуг по  инспекции качества и количества стальной продукции, со следующим инспекционным заданием:\n" +
				  "1. Выборочный контроль и присутствие при проведении геометрических измерений и отклонений \n" +
				  "2. выборочный контроль, присутствие и маркировка при отборе образцов, направляемых на испытания \n" +
				  "3. выборочный контроль и присутствие при проведении механических испытаний \n" +
				  "4. выборочный контроль и присутствие при проведении анализа микроструктуры \n" +
				  "5. Проверка результатов испытаний по заводским документам о качестве\n" +
				  "6. Контроль упаковки и информации на бирках\n" +
				  "7. Тальманский счет отгружаемой продукции\n" +
				  "8. Проверка и визирование сертификатов качества\n" +
				  "9. Предварительные инспекционные отчеты\n" +
				  "10. Издание финального инспекционного отчета.\n",
			"z2":"Уголок стальной горячекатаный",
			"z3":"Швеллер стальной горячекатаный",
			"z4":"Катанка в бунтах",
			"z5":"Арматура",
			"z6":"Квадратная заготовка",
			"z7":"Круглая заготовка",
			"z8":"Испытания",
			"z9":"Входной контроль следующего сырья/материаллов:\n" +
				  "\n" +
				  "Железорудный концентрат\n" +
				  "Руда железная агломерационная\n" +
				  "Антрацит\n" +
				  "Известняк обычный\n" +
				  "Известняк доломитизированный  \n" +
				  "Известь\n" +
				  "Железорудные окатыши\n" +
				  "Руда МК\n" +
				  "Кокс доменный\n" +
				  "Пек высокотемпературный\n" +
				  "Плавиковый шпат\n" +
				  "Шлакообразующие и теплоизолирующие смеси\n" +
				  "Периклазохромитовые изделия\n" +
				  "Шамотные изделия\n" +
				  "Ковшевые изделия\n" +
				  "Динасовые изделия\n" +
				  "Изделия кварцитовые. Безобжиговые\n" +
				  "Муллитокорундовые ковшевые\n" +
				  "Муллитокорундовые для разливки стали               \n" +
				  "Кварцевые стаканы\n" +
				  "Ферросиликомарганец                             \n" +
				  "Ферросилиций                                              \n" +
				  "Ферромарганец\n" +
				  "Алюминий вторичный \n" +
				  "\n" +
				  "Инспекционное задание:\n" +
				  "- Идентификация поступившего материала в соответствии с сопроводительной документацией.\n" +
				  "- Визуальная оценка сохранности упаковки.\n" +
				  "- Визуальная оценка целостности тары, если материал поставляется в ящиках, коробках, кегах, мешках и т.д.\n" +
				  "- Визуальный контроль поступившего материала.\n" +
				  "- Выборочный контроль геометрических размеров.\n" +
				  "- Выборочный или 100% контроль количества поступившего материала.\n" +
				  "- Участие совместно с представителями комбината в предъявление поставщику забракованной продукции.\n" +
				  "- Входной контроль, осуществляемый по средствам отбора проб и проведением лабораторных испытаний.\n" +
				  "- Присутствие и контроль проведения отбора проб пробоотборщиками комбината.\n" +
				  "- Опломбирование, маркировка или клеймение отобранных образцов/проб.\n" +
				  "- Присутствие и контроль результатов проведенных лабораторных испытаний в лабораториях.\n",
			"z10":"ООО «Юнистил», Кривой Рог",
			"z11":"Инспекция в процессе оцинкования холоднокатаной стали в рулонах, отгрузке, со следующим инспекционным заданием:\n" +
				  "1. Контроль технологических данных и технологии производства:\n" +
				  "- контроль температуры расплава в ванне оцинкования;\n" +
				  "- визуальный контроль уровня расплава в ванне оцинкования;\n" +
				  "- сопровождение при контроле химического состава расплава для оцинкования;\n" +
				  "2. Визуальный осмотр верхней поверхности оцинкованной полосы в процессе производства;\n" +
				  "3. Визуальный осмотр имеющихся на складе рулонов перед упаковкой;\n" +
				  "4. Контроль геометрических размеров;\n" +
				  "5. Сопровождение и контроль при отборе проб, проверка правильности маркировки проб;\n" +
				  "6. Сопровождение при проведении тестирования, контроль результатов, указанных в протоколах;\n" +
				  "7. Контроль и сопровождение при погрузке продукции;\n" +
				  "8. Фотоотчет;\n" +
				  "9. Проверка и подписание сертификатов качества;\n" +
				  "10. Выпуск отчета об итоговой проверке.",
			"z13":"ПАО «АрселорМиттал» Кривой Рог",
			"z14":"Аудит производственного процесса:\n" +
				  "- Проверка документов\n" +
				  "- Проверка приобретенных компонентов и материалов\n" +
				  "- Контроль производства/мониторинг \n" +
				  "- Регламентные испытания\n" +
				  "- Обращение и хранение\n" +
				  "- Сертификация менеджмента",
			"z15":"Инспекция в портах\n" +
				  "\n" +
				  "Продукция:\n" +
				  "- чугун в чушках\n" +
				  "- горячекатаный, холоднокатаный лист\n" +
				  "- катанка в бунтах\n" +
				  "- квадратная заготовка\n" +
				  "- арматурный прокат\n" +
				  "\n" +
				  "Инспекционное задание:\n" +
				  "Идентификация груза при хранении в порту (проверка перед погрузкой)\n" +
				  "- определение мест хранения в порту;\n" +
				  "- визуальная идентификация груза по товаросопроводительным документам;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- учет количества груза;\n" +
				  "- визуальный осмотр состояния доступного груза;\n" +
				  "- контроль состояния ржавчины по АRS;\n" +
				  "- контролировать заводскую и цветовую маркировку, заводские этикетки, состояние упаковки;\n" +
				  "- выпуск итогового акта проверки хранения с приложениями и фотографиями.\n" +
				  "\n" +
				  "Инспекция при погрузке груза на борт судна (инспекция погрузки/стафировки)\n" +
				  "- идентификация груза по товаросопроводительным документам;\n" +
				  "- визуальный осмотр состояния груза;\n" +
				  "- контроль нерадиоактивности груза;\n" +
				  "- контроль состояния ржавчины по АРС;\n" +
				  "- контроль заводской и цветовой маркировки, заводских этикеток, состояния упаковки на портовом складе до и во время погрузки;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- проверка соответствия монтажной массы согласно ISPM 15;\n" +
				  "- вести учет груза при погрузке;\n" +
				  "- контроль погрузки грузов в трюмах судна согласно экспедиционным документам и грузовому плану;\n" +
				  "- визуальный контроль процесса обрезки и укладки груза в трюмах при погрузке;\n" +
				  "- проект освидетельствования веса загружаемого груза;\n" +
				  "- краткие ежедневные отчеты об этапах проверки;\n" +
				  "- выдача итогового отчета о проверке с приложением документов и фотографий.",
			"z16":"Николаевский морской торговый порт",
			"z17":"Мариупольский морской торговый порт",
			"z18":"Одесский морской торговый порт",

			// Turkey

			"x":"Производитель - YESILYURT DEMIR CELIK END. VE LIMAN ISL. A.S.\n" +
				  "Продукция – Квадратная заготовка\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"x2":"Производитель - ICDAS CELIK ENERJI TERSANE VE ULASIM SANAYI A.S., TURKEY\n" +
				  "Продукция – Квадратная заготовка\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"x3":"Производитель - KOC METALURJI A.S.\n" +
				  "Продукция – Квадратная заготовка\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"x4":"ICDAS PORT",
			"x5":"YEŞILYURT PORT",

			// USA and Canada

			"c":"MOBILE, AL, USA  \n" +
				  "\n" +
				  "Инспекционное задание - Инспекция во время выгрузки\n" +
				  "- наблюдение за процессом выгрузки\n" +
				  "- - проект освидетельствования веса выгружаемого груза судна / баржа\n" +
				  "- краткие ежедневные отчеты о проверках по этапам проверки\n" +
				  "- выдача проекта акта освидетельствования с указанием веса согласно проекту освидетельствования",
			"c2":"NEW ORLEANS, LA, USA",
			"c3":"CORPUS CHRISTI PORT, TX, USA ",
			"c4":"BROWNSVILLE PORT, TX, USA",
			"c5":"CONTRECOEUR PORT, CANADA",

			// Malaysia and Indonesia

			"v":"Производитель - EASTERN STEEL SDN.BHN, KEMAMAN, MALAYSIA\n" +
				  "Продукция – Стальные слябы\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"v2":"KEMAMAN PORT, MALAYSIA",
			"v3":"ПРОИЗВОДИТЕЛЬ - DEXIM STEEL INDONESIA\n" +
				  "Продукция – Стальные слябы\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"v4":"BAHODOPI PORT, INDONESIA",

			// China

			"b":"Продукция – Стальные слябы, арматура\n" +
				  "\n" +
				  "Инспекционное задание:\n" +
				  "Идентификация груза при хранении в порту (проверка перед погрузкой)\n" +
				  "- определение мест хранения в порту;\n" +
				  "- визуальная идентификация груза по товаросопроводительным документам;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- учет количества груза;\n" +
				  "- визуальный осмотр состояния доступного груза;\n" +
				  "- контроль состояния ржавчины по АRS;\n" +
				  "- контролировать заводскую и цветовую маркировку, заводские этикетки, состояние упаковки;\n" +
				  "- выпуск итогового акта проверки хранения с приложениями и фотографиями.",
			"b2":"Инспекция при погрузке груза на борт судна (инспекция погрузки/выгрузки)\n" +
				  "- идентификация груза по товаросопроводительным документам;\n" +
				  "- визуальный осмотр состояния груза;\n" +
				  "- контроль нерадиоактивности груза;\n" +
				  "- контроль состояния ржавчины по ARS;\n" +
				  "- контроль заводской и цветовой маркировки, заводских этикеток, состояния упаковки на портовом складе до и во время погрузки;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- проверка соответствия монтажной массы согласно ISPM 15;\n" +
				  "- вести учет груза при погрузке;\n" +
				  "- контроль погрузки грузов в трюмах судна согласно экспедиционным документам и грузовому плану;\n" +
				  "- визуальный контроль процесса обрезки и укладки груза в трюмах при погрузке;\n" +
				  "- проект освидетельствования веса загружаемого груза;\n" +
				  "- краткие ежедневные отчеты об этапах проверки;\n" +
				  "- выдача итогового отчета о проверке с приложением документов и фотографий.",
			"b3":"ZHANGJIAGANG PORT, CHINA",
			"b4":"ZHANJIANG, CHINA",
			"b5":"JIANGYIN PORT, CHINA",
			"b6":"SHANGHAI PORT, CHINA",
			"b7":"LIANYUNGANG PORT, CHINA",
			"b8":"RIO DE JANEIRO PORT, BRASIL",
			"b9":"HONG KONG PORT, CHINA",

			// Europe

			"n":"Продукция – Стальные слябы, квадратная заготовка\n" +
				  "\n" +
				  "Инспекционное задание:\n" +
				  "Идентификация груза при хранении в порту (проверка перед погрузкой)\n" +
				  "- определение мест хранения в порту;\n" +
				  "- визуальная идентификация груза по товаросопроводительным документам;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- учет количества груза;\n" +
				  "- визуальный осмотр состояния доступного груза;\n" +
				  "- контроль состояния ржавчины по АRS;\n" +
				  "- контролировать заводскую и цветовую маркировку, заводские этикетки, состояние упаковки;\n" +
				  "- выпуск итогового акта проверки хранения с приложениями и фотографиями.\n",
			"n2":"Инспекция при погрузке груза на борт судна (инспекция погрузки/выгрузки)\n" +
				  "- идентификация груза по товаросопроводительным документам;\n" +
				  "- визуальный осмотр состояния груза;\n" +
				  "- контроль нерадиоактивности груза;\n" +
				  "- контроль состояния ржавчины по ARS;\n" +
				  "- контроль заводской и цветовой маркировки, заводских этикеток, состояния упаковки на портовом складе до и во время погрузки;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- проверка соответствия монтажной массы согласно ISPM 15;\n" +
				  "- вести учет груза при погрузке;\n" +
				  "- контроль погрузки грузов в трюмах судна согласно экспедиционным документам и грузовому плану;\n" +
				  "- визуальный контроль процесса обрезки и укладки груза в трюмах при погрузке;\n" +
				  "- проект освидетельствования веса загружаемого груза;\n" +
				  "- краткие ежедневные отчеты об этапах проверки;\n" +
				  "- выдача итогового отчета о проверке с приложением документов и фотографий.",
			"n3":"GHENT PORT, BELGIUM",
			"n4":"ANTWERP PORT, BELGIUM",
			"n5":"GDYNIA PORT, POLAND",
			"n6":"SZCZECIN PORT, POLAND",
			"n7":"Инспекция складов / инвентаризация\n" +
				  "\n" +
				  "Место проведения инспекции - MOSTAR, BOSNIA AND HERZEGOVINA\n" +
				  "Продукция – Алюминиевая заготовка\n" +
				  "Инспекционное задание:\n" +
				  "- подсчет количества штук;\n" +
				  "- контроль общего состояния склада (состояние объекта, порядок, техническое состояние);\n" +
				  "- контроль помещений, где хранятся материалы, и техники безопасности;\n" +
				  "- проверка систем безопасности склада;\n" +
				  "- проверка систем видеонаблюдения на складе;\n" +
				  "- составление заполнения прилагаемой формы информацией, предоставленной складом.\n" +
				  "- издание финального отчета;\n" +
				  " - фотоотчет.",
			"n8":"Место проведения инспекции – TORNYOSPALCA, HUNGARY\n" +
				  "Продукция – Оцинкованная горячекатаная сталь в рулонах, лакокрасочная продукция\n" +
				  "Инспекционное задание:\n" +
				  "- подсчет количества штук;\n" +
				  "- контроль общего состояния склада (состояние объекта, порядок, техническое состояние);\n" +
				  "- контроль помещений, где хранятся материалы, и техники безопасности;\n" +
				  "- проверка систем безопасности склада;\n" +
				  "- проверка систем видеонаблюдения на складе;\n" +
				  "- составление заполнения прилагаемой формы информацией, предоставленной складом.\n" +
				  "- издание финального отчета;\n" +
				  " - фотоотчет.",
			"n9":"LITHUANIA, KLAIPEDA\n" +
				  "Продукция – стальной лом\n" +
				  "Инспекционное задание:\n" +
				  "1. Описание, проверка условий хранения, размещение продукции на складе;\n" +
				  "2. Проверка, определение количества продукции на складе по учетной документации;\n" +
				  "3. Описание поступления продукции, движения по складу и отгрузки продукции;\n" +
				  "4. Визуальный контроль загрязнения продукции;\n" +
				  "5. Визуальный контроль наличия взрывоопасных, легковоспламеняющихся частей;\n" +
				  "6. Контроль нерадиоактивности продукции;\n" +
				  "7. Круглосуточный контроль и мониторинг процесса погрузки;\n" +
				  "8. Выдача итогового отчета о проверке;\n" +
				  "9. Выдача проекта акта освидетельствования с указанием веса по проекту освидетельствования;\n" +
				  "10. Выдача сертификата качества.\n" +
				  "11. Фотоотчет.",

			// Brazil

			"m":"Производитель - GERDAU ACOMINAS, S.A., BRAZIL\n" +
				  "Продукция – Квадратная заготовка\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"m2":"Производитель - GERDAU ACOS LONGOS, S.A., BRAZIL\n" +
				  "Продукция – Квадратная заготовка\n" +
				  "Инспекционное задание:\n" +
				  "- контроль производственного процесса;\n" +
				  "- выборочный контроль и наблюдение в процессе измерений геометрических размеров и отклонений;\n" +
				  "- выборочный контроль качества поверхности груза, доступного для визуального осмотра;\n" +
				  "- выборочный контроль и наблюдение при определении химического состава;\n" +
				  "- проверка результатов по заводским документам о качестве;\n" +
				  "- контроль упаковки и информации на этикетках;\n" +
				  "- выборочная проверка веса;\n" +
				  "- проверка сертификатов качества;\n" +
				  "- предварительные отчеты о проверке (электронная почта, факс, телефон);\n" +
				  "- фотоотчеты;\n" +
				  "- выдача итогового отчета о проверке.",
			"m3":"SEPETIBA PORT, BRAZIL",
			"m4":"PRAIA MOLE PORT, BRAZIL",
			"m5":"ЧУГУН\n" +
				  "Инспекционное задание:\n" +
				  "\n" +
				  "1/ Идентификация груза при хранении в порту\n" +
				  "- определение места хранения в порту/оценка условий хранения;\n" +
				  "- проверка соответствия чугуна контрактным требованиям и стандартам;\n" +
				  "- визуальная оценка и выборочные измерения размеров отдельных изделий.\n" +
				  "2/ Досмотр при погрузке груза на борт судна.\n" +
				  "- контроль процесса погрузки;\n" +
				  "- отбор проб и подготовка проб\n" +
				  "- оценка процента отломанных частей;\n" +
				  "- оценка процентного содержания неметаллических, грязевых, пылевых примесей;\n" +
				  "- проект освидетельствования веса груженого груза;\n" +
				  "- радиационный контроль;\n" +
				  "- краткие ежедневные отчеты о проверках по этапам проверки.\n" +
				  "3/ Проверка во время разгрузки\n" +
				  "- наблюдение за процессом выгрузки;\n" +
				  "- проект освидетельствования веса выгружаемого груза;\n" +
				  "- краткие ежедневные отчеты о проверках по этапам проверки.\n" +
				  " \n" +
				  "- Выдача проекта акта освидетельствования с указанием веса согласно проекту освидетельствования.\n" +
				  "- Выдача сертификата анализа, выданного в порту погрузки, с указанием полного химического состава материала, веса слитка, процента осколков менее 50/100 граммов, а также процента неметаллических частиц, грязи и пыли.\n" +
				  "- Выдача сертификата нерадиоактивности",
			"m6":"TPS PORT, PRAIA MOLE, VITÓRIA ES, BRAZIL",
			"m7":"RIO DE JANEIRO PORT, BRASIL",
			"m8":"ITAQUI PORT, BRAZIL",


			// Algeria

			"l":"Производитель - ALGERIAN QATARI STEEL / AQS, Ageria\n" +
				  "Продукция – Квадратная заготовка, Арматурный прокат, катанка в бунтах\n" +
				  "Около 5000 тонн в месяц",
			"l2":"Производитель - TOSYALY FER et ACIER, Ageria\n" +
				  "Продукция – Квадратная заготовка, Арматурный прокат, катанка в бунтах\n" +
				  "Около 2000 тонн в месяц",
			"l3":"Порты \n" +
				  "Продукция – Квадратная заготовка, Арматурный прокат,  катанка в бунтах\n" +
				  "\n" +
				  "Инспекционное задание:\n" +
				  "Идентификация груза при хранении в порту (проверка перед погрузкой)\n" +
				  "- определение мест хранения в порту;\n" +
				  "- визуальная идентификация груза по товаросопроводительным документам;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- учет количества груза;\n" +
				  "- визуальный осмотр состояния доступного груза;\n" +
				  "- контроль состояния ржавчины по АRS;\n" +
				  "- контролировать заводскую и цветовую маркировку, заводские этикетки, состояние упаковки;\n" +
				  "- выпуск итогового акта проверки хранения с приложениями и фотографиями.\n" +
				  "\n" +
				  "Инспекция при погрузке груза на борт судна (инспекция погрузки)\n" +
				  "- идентификация груза по товаросопроводительным документам;\n" +
				  "- визуальный осмотр состояния груза;\n" +
				  "- контроль нерадиоактивности груза;\n" +
				  "- контроль состояния ржавчины по АRS;\n" +
				  "- контроль заводской и цветовой маркировки, заводских этикеток, состояния упаковки на портовом складе до и во время погрузки;\n" +
				  "- произвольный контроль геометрических размеров;\n" +
				  "- проверка соответствия монтажной массы согласно ISPM 15;\n" +
				  "- вести учет груза при погрузке;\n" +
				  "- контроль погрузки грузов в трюмах судна согласно экспедиционным документам и грузовому плану;\n" +
				  "- визуальный контроль процесса обрезки и укладки груза в трюмах при погрузке;\n" +
				  "- проект освидетельствования веса загружаемого груза;\n" +
				  "- краткие ежедневные отчеты об этапах проверки;\n" +
				  "- выдача итогового отчета о проверке с приложением документов и фотографий.",
			"l4":"ORAN PORT, ALGERIA",
			"l5":"DJEN DJEN PORT, ALGERIA",
			"l6":"MOSTAGANEM PORT, ALGERIA",
			"l7":"ARZEW PORT, ALGERIA",
			"l8":"SOHAR PORT, OMAN",
			"l9":"MINA ZAYED PORT, UAE",
			"l10":"GANGAVARAM PORT, INDIA",
			"l11":"GUAYAQUIL PORT, ECUADOR"




}
	}
};

i18n
	  .use(initReactI18next)
	  .init({
		  resources,
		  lng: 'en',
		  fallbackLng: 'en',
		  interpolation: {
			  escapeValue: false
		  }
	  });

export default i18n;
