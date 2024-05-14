import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			"History": "History",
			"Work Experience": "Work Experience",
			"Geography": "Geography",
			"Activities": "Activities",

			'HistoryT':"Engineering Bureau Franke International LLC has been successfully working in the field of inspection services for more than 40 years. It was founded as an independent company in 1973 in Germany. In 2006, within the framework of a business expansion strategy, it was decided to establish a subsidiary, Engineering Bureau Franke International (EBFI). This decision was based on an analysis of the growing demand for highly professional inspection services in the CIS and Asian steel market. Between 2008 and 2020, the owners of the company developed offices on all continents. At this point, we can say that we have offices, branches and our representatives in such countries as China, Uzbekistan, India, Germany, Italy, USA, Brazil, Algeria, UAE and others.",

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





		         // Audits
					"r2":"Audits",
					"r":"Here's your text with line breaks added for better readability:\n" +
						  "\n" +
						  "\n" +
						  "When planning to supply materials, equipment or components, it is necessary to ensure that the supplier has real production facilities, equipment, qualified personnel, measuring and control equipment, certificates and licenses, and that the quality of the products complies with the regulatory requirements.  \n" +
						  "Improper selection of a supplier leads to supply interruptions, project delays and business process failures.  \n" +
						  "In order to eliminate the risk of supply failure, we offer a technical audit of the production process by our specialists before concluding supply contracts.  \n" +
						  "The complex verifications and analyses carried out by our experts provide reliable information on the technical availability of the supplier to produce materials, equipment or components in accordance with the established requirements.  \n" +
						  "\n" +
						  "Pre-production Audit  \n" +
						  "As one of the stages of work prior to inspections, we perform pre-production audits of manufacturers of metal products and equipment for various industries. Such audits allow the client to obtain a detailed analysis of the entire manufacturing and testing facilities of the vendor, to identify key points affecting the loss of quality or failure of delivery deadlines of goods and equipment before submitting an order for production. At present technical auditors of our company have performed audits of more than 2000 enterprises all over the world.  \n" +
						  "\n" +
						  "Approval audits of manufactures  \n" +
						  "These activities are performed by our employees (in agreement with our company, these employees are included in the register of supervisory and state authorities) in recognized state supervisory bodies. In addition, as part of the work on approval of manufacturers for compliance with the requirements of Maritime Classification Societies (Italian RINA, Korean KRS etc.), Boiler Registers, Lloyd Turkey, and German Railways DB, our auditors prepare companies for certification and technical audits in the above organizations. Furthermore, we have more than 160 accreditations in the European Union for the right to certify companies according to European regulations and directives such as PED and CPD.\n" +
						  "\n" ,
			// Quality control during manufacturing and testing

			"y":"Quality control during manufacturing and testing",
			"y2":"We provide services for the following industries:\n" +
				  "\n" +
				  "oil and gas field;\n" +
				  "mining;\n" +
				  "metallurgy;\n" +
				  "chemical;\n" +
				  "transporting;\n" +
				  "energy.\n" +
				  "Depending on the type of equipment, EBFI can offer the following scope of inspection:\n" +
				  "\n" +
				  "Input control of materials and components;\n" +
				  "Control of manufacturing of equipment and its components at all stages of production (cutting, welding, machining, assembly, etc.);\n" +
				  "Visual and dimensional inspection, laboratory testing and non-destructive testing;\n" +
				  "Observation during the factory acceptance tests;\n" +
				  "Control of labelling, packing and shipping.\n" +
				  "In each case, we develop an inspection program based on product specifications and other customer-specific requirements.\n" +
				  "\n" +
				  "EBFI offers independent non-destructive testing services for the customer's material:\n" +
				  "\n" +
				  "ultrasonic test;\n" +
				  "visual inspection;\n" +
				  "magnetic powder control;\n" +
				  "thickness measurement;\n" +
				  "capillary control method;\n" +
				  "dielectric method.\n" +
				  "Non-destructive testing is carried out by specialists who have received special training in the international center and have the second level of certification according to ISO 9712. Testing is carried out on mobile equipment owned by the Company, which allows to determine the location of testing at the request of the Customer.\n" +
				  "\n" +
				  "Typical materials: hot-rolled heavy plate steel, forgings, parts after machining (shafts for power equipment, axles of rollers, tie rods, rolls of rolling mills, shafts for shipbuilding), billets, welds, steel structures, welded pipes and pipelines, railway wheels, axles, anti-corrosion polyethylene coating, anti-corrosion polypropylene coating, anti-corrosion epoxy coating.",
			// Preshipment Inspections

			"pre":"Preshipment Inspections",
			"pre2":"This type of our service includes inspection of all parameters of the finished product:\n" +
				  "\n" +
				  "Visual inspection: during this activity, a qualified inspector checks the items visually and can confirm the item is brand new and hasn’t any defects. Also, it can be control of coating and surface.\n" +
				  "Dimensional inspection: during this activity, an inspector will control parameters according to drawings or other technical requirements which consist of size information about the item. During this type of control, the inspector will use only verified measurement equipment. Control of calibration of measuring equipment will also be reflected in the report.\n" +
				  "Vendor personnel qualification control: during this type of inspection, the inspector may receive (if the inspection takes place in a production facility) all documents on the qualifications of the personnel of the manufacturer involved in the QCD.\n" +
				  "Marking inspection: during it, an inspector can control written or hot stamp markings on the body of the item. It will be compared with standards for marking. Remarks will be shown in the report.\n" +
				  "Packing inspection: this type of control includes witness of the quality of packaging and preservation of the good. Also, the quantity of materials will be strictly checked as per packing lists or purchase order. All stages will follow the requirements of the client and international standards.\n" +
				  "Sealing: based on the requirements we can provide additional sealing of cargo with identification of each loading place.\n" +
				  "Quality certificate review: an inspector will review MTC for products based on the international standards. If some parameters are out of range, it will be immediately reflected in the report.",
			// Marine survey

			"mar":"Marine survey",
			"mar2":"For the defense of our clients, we are prepared to provide any type of marine survey service, such as the following:\n" +
				  "\n" +
				  "Cargo identification at the port terminal;\n" +
				  "Inspection of cargo storage conditions;\n" +
				  "Inspection of readiness of holds before loading;\n" +
				  "Control of fastenings in the ship's holds;\n" +
				  "Draft survey;\n" +
				  "Weighing control;\n" +
				  "Pre-shipment inspection;\n" +
				  "Inspection of containers;\n" +
				  "Sealing containers;\n" +
				  "Conducting Silver test (for the presence of salts on the surface of the cargo);\n" +
				  "Determination of the level of radioactivity of the cargo;\n" +
				  "Ultrasonic testing of the hatch covers;\n" +
				  "Control of storage conditions;\n" +
				  "Visual inspection of packaging, marking, damage detection, corrosion level;\n" +
				  "Check dimensions for identification;\n" +
				  "Control during unloading operation from the vessel;\n" +
				  "Control during loading on wagons;\n" +
				  "Tallying cargo in the process of unloading / loading;\n" +
				  "Putting an additional marking (if required, according to the written request of the customer);\n" +
				  "Determination of the content of K2O or NaCl cargo during loading on the vessel;\n" +
				  "Photographing;\n" +
				  "Daily and final report.\n"

		}

	},
	ru: {
		translation: {
			"History": "История",
			"Work Experience": "Опыт работы",
			"Geography": "География",
			"Activities": "Виды деятельности",


			'HistoryT':"Engineering Bureau Franke International LLC успешно работает в области инспекционных услуг более 40 лет. Оно было основано как независимая компания в 1973 году в Германии. В 2006 году, в рамках стратегии расширения бизнеса, было принято решение о создании филиала - Engineering Bureau Franke International (EBFI). Основой для этого решения послужил анализ тенденций роста спроса на предоставление высокопрофессиональных инспекционных услуг на сталелитейных рынках СНГ и Азии. В период с 2008 по 2024 год владельцы компании развивали офисы на всех континентах, в связи с этим мы можем сказать, что наши офисы, филиалы и представители присутствуют в таких странах, как Китай, Узбекистан, Индия, Германия, Италия, США, Бразилия, Алжир, ОАЭ и другие.\n",
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
			"l11":"GUAYAQUIL PORT, ECUADOR",





// Audits
"r2":"Аудиты",
"r":"При планировании поставок материалов, оборудования или компонентов необходимо быть уверенным, что поставщик располагает реальными производственными мощностями, оборудованием, специалистами, измерительным и контрольным оборудованием, сертификатами и лицензиями, качество продукции соответствует нормативным требованиям.\n" +
	  "Неправильный выбор поставщика приводит к нарушениям в поставках, задержкам проектов и сбоям в бизнес-процессах.\n" +
	  "Для устранения рисков нарушения поставок мы предлагаем услуги наших специалистов по проведению технического аудита производственного процесса перед заключением соглашений о поставке.\n" +
	  "Комплексная проверка и анализ нашими специалистами обеспечивают надежную информацию о технической готовности поставщика к производству материалов, оборудования или компонентов в соответствии с установленными требованиями.\n" +
	  "\n" +
	  "Предпроизводственный аудит\n" +
	  "Одним из этапов работы, предшествующих проверкам, является предпроизводственный аудит производителей металлопродукции и оборудования для различных отраслей. Эти аудиты позволяют клиенту получить подробный анализ всей производственной и испытательной базы производителя, выявить ключевые моменты, влияющие на потерю качества или задержку в поставке товаров и оборудования до размещения заказа на производство. На сегодняшний день технические аудиторы нашей компании провели аудиты более чем 2000 предприятий по всему миру.\n" +
	  "\n" +
	  "Аудиты по утверждению производителей\n" +
	  "Эти виды работ выполняются нашими сотрудниками (по согласованию с нашей компанией, эти сотрудники включены в реестр надзорных и государственных органов) признанными государственными надзорными органами. Также в рамках работ по утверждению производителей на соответствие требованиям Морских классификационных обществ (итальянское RINA, корейское KRS и т.д.), Регистров котлов, Lloyd Turkey и немецких железных дорог DB наши аудиторы готовят компании к сертификации и техническим аудитам в вышеуказанных организациях. Кроме того, у нас есть более 160 аккредитаций в Европейском союзе на право сертификации компаний согласно Европейским нормам и директивам, таким как PED и CPD.",
// Qualitycontrol during manufacturing and testing
"y":"Контроль качества во время производства и испытаний",
"y2":"Мы предоставляем услуги для следующих отраслей:- нефтегазовая отрасль;- горнодобывающая отрасль;- металлургия;- химическая промышленность;- транспортная промышленность;- энергетика.В зависимости от типа оборудования, EBFI может предложить следующий объем инспекции:- Входной контроль материалов и компонентов;- Контроль за производством оборудования и его компонентов на всех этапах производства (резка, сварка, мехобработка, сборка и т.д.);- Визуальный осмотр, измерения, лабораторные испытания и неразрушающий контроль;- Наблюдение во время приемочных испытаний;- Контроль маркировки, упаковки и отправки.В каждом случае мы разрабатываем программу инспекции на основе спецификации продукции и других требований заказчика.EBFI предлагает независимые услуги неразрушающего контроля материалов заказчика следующими методами:- ультразвуковое исследование;- визуальный осмотр;- магнитопорошковый контроль;- толщинометрия;- капиллярный метод контроля;- диэлектрический метод.Неразрушающий контроль проводится специалистами, прошедшими специальное обучение в международном центре и имеющими второй уровень сертификации по ISO 9712. Испытания проводятся на мобильном оборудовании, принадлежащем компании, что позволяет определить место проведения испытаний по запросу заказчика.\n" +
	  "\n" +
	  "укажи перенос строк у текста \n" +
	  "ChatGPT\n" +
	  "Конечно! Вот ваш текст с указанием переносов строк для лучшей ясности:\n" +
	  "\n" +
	  "Мы предоставляем услуги для следующих отраслей:\n" +
	  "\n" +
	  "нефтегазовая отрасль;\n" +
	  "горнодобывающая отрасль;\n" +
	  "металлургия;\n" +
	  "химическая промышленность;\n" +
	  "транспортная промышленность;\n" +
	  "энергетика.\n" +
	  "В зависимости от типа оборудования, EBFI может предложить следующий объем инспекции:\n" +
	  "\n" +
	  "Входной контроль материалов и компонентов;\n" +
	  "Контроль за производством оборудования и его компонентов на всех этапах производства (резка, сварка, мехобработка, сборка и т.д.);\n" +
	  "Визуальный осмотр, измерения, лабораторные испытания и неразрушающий контроль;\n" +
	  "Наблюдение во время приемочных испытаний;\n" +
	  "Контроль маркировки, упаковки и отправки.\n" +
	  "В каждом случае мы разрабатываем программу инспекции на основе спецификации продукции и других требований заказчика.\n" +
	  "\n" +
	  "EBFI предлагает независимые услуги неразрушающего контроля материалов заказчика следующими методами:\n" +
	  "\n" +
	  "ультразвуковое исследование;\n" +
	  "визуальный осмотр;\n" +
	  "магнитопорошковый контроль;\n" +
	  "толщинометрия;\n" +
	  "капиллярный метод контроля;\n" +
	  "диэлектрический метод.\n" +
	  "Неразрушающий контроль проводится специалистами, прошедшими специальное обучение в международном центре и имеющими второй уровень сертификации по ISO 9712. Испытания проводятся на мобильном оборудовании, принадлежащем компании, что позволяет определить место проведения испытаний по запросу заказчика.",

// Preshipment Inspections
"pre":"Предварительные инспекции",
"pre2":"Этот вид наших услуг включает в себя проверку всех параметров товара на готовность к отправке Клиенту:\n" +
	  "\n" +
	  "Визуальный контроль: во время этой работы квалифицированный инспектор проверяет изделия визуально и может подтвердить, что изделие является новым и не имеет никаких дефектов. Также может быть проведен контроль покрытия и поверхности.\n" +
	  "\n" +
	  "Контроль размеров: во время этого вида деятельности инспектор будет контролировать параметры в соответствии с чертежами или другими техническими требованиями, которые состоят из информации о размерах изделия. Во время этого вида контроля инспектор будет использовать только поверенное измерительное оборудование. Контроль калибровки измерительного оборудования также будет отражен в отчете.\n" +
	  "\n" +
	  "Контроль квалификации персонала поставщика: во время этого вида контроля инспектор может собрать (если инспекция проходит на производстве) все квалификационные документы на персонал производства, который участвует в ОКК.\n" +
	  "\n" +
	  "Контроль маркировки: во время него инспектор может контролировать письменную или горячую маркировку на корпусе изделия. Она будет сравниваться со стандартами на маркировку. Замечания будут отражены в отчете.\n" +
	  "\n" +
	  "Инспекция упаковки: этот вид контроля включает в себя проверку качества упаковки и сохранности товара. Также будет строго проверяться количество материалов в соответствии с упаковочными листами или заказом на поставку. Все этапы будут соответствовать правилам клиента и международным стандартам.\n" +
	  "\n" +
	  "Пломбирование: в соответствии с требованиями мы можем обеспечить дополнительное пломбирование груза с идентификацией каждого грузового места.\n" +
	  "\n" +
	  "Проверка сертификата качества: инспектор проведет проверку MTC на продукцию, основанную на международных стандартах. Если какие-то параметры будут выходить за пределы нормы, это будет немедленно отражено в отчете.\n" +
	  "\n",
// Marine survey
"mar":"Морской обследование",
"mar2":"Для защиты товаров наших клиентов мы готовы предоставить любой вид сюрвейерских услуг, примерный объем которых приведен ниже:\n" +
	  "\n" +
	  "Идентификация груза на портовом терминале;\n" +
	  "Инспекция условий хранения груза;\n" +
	  "Инспекция готовности трюмов перед загрузкой;\n" +
	  "Контроль креплений в трюмах судна;\n" +
	  "Опрос по черновику;\n" +
	  "Контроль взвешивания;\n" +
	  "Предварительная инспекция;\n" +
	  "Инспекция контейнеров;\n" +
	  "Запечатывание контейнеров;\n" +
	  "Проведение Silver test (на наличие солей на поверхности груза);\n" +
	  "Определение уровня радиоактивности груза;\n" +
	  "Ультразвуковое испытание крышек люков;\n" +
	  "Контроль условий хранения;\n" +
	  "Визуальный осмотр упаковки, маркировки, обнаружение повреждений, уровень коррозии;\n" +
	  "Проверка размеров для идентификации;\n" +
	  "Контроль во время разгрузочных работ с судна;\n" +
	  "Контроль во время погрузки на вагоны;\n" +
	  "Подсчет груза в процессе разгрузки/погрузки;\n" +
	  "Нанесение дополнительной маркировки (по требованию, согласно письменному запросу заказчика);\n" +
	  "Определение содержания K2O или NaCl в грузе во время погрузки на судно;\n" +
	  "Фотографирование;\n" +
	  "Ежедневный и итоговый отчет."



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
