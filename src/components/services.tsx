import { useState } from "react";
import serviceHydro from "../assets/jpeg/service-2.jpg";
import TabContent from "./service-tab";
import { AnimatePresence } from "framer-motion";
import print3d1 from "../assets/jpeg/3d print/3dprint-1.jpg";
import print3d2 from "../assets/jpeg/3d print/3dprint-2.jpg";
// import print3d3 from "../assets/jpeg/3d print/3dprint-3.jpg";
import print3d4 from "../assets/jpeg/3d print/3dprint-4.jpg";
import print3d5 from "../assets/jpeg/3d print/3dprint-5.jpg";
import hidro1 from "../assets/jpeg/hidrografika/hidro-1.jpg";
import hidro2 from "../assets/jpeg/hidrografika/hidro-2.jpg";
// import hidro3 from "../assets/jpeg/hidrografika/hidro-3.mp4";
// import hidro4 from "../assets/jpeg/hidrografika/hidro-4.mp4";
import hidro5 from "../assets/jpeg/hidrografika/hidro-5.jpg";
import hidro6 from "../assets/jpeg/hidrografika/hidro-6.jpg";
import hidro7 from "../assets/jpeg/hidrografika/hidro-7.jpg";
import hidro8 from "../assets/jpeg/hidrografika/hidro-8.jpg";
import hidro9 from "../assets/jpeg/hidrografika/hidro-9.jpg";
import hidro10 from "../assets/jpeg/hidrografika/hidro-10.jpg";
import hidro11 from "../assets/jpeg/hidrografika/hidro-11.jpg";
import print2 from "../assets/jpeg/print/print-2.jpg";
import print3 from "../assets/jpeg/print/print-3.jpg";
import print4 from "../assets/jpeg/print/print-4.jpg";
import print5 from "../assets/jpeg/print/print-5.jpg";
import print6 from "../assets/jpeg/print/print-6.jpg";
import print7 from "../assets/jpeg/print/print-7.jpg";
import print8 from "../assets/jpeg/print/print-8.jpg";
// import print9 from "../assets/jpeg/print/print-9.mp4";
import print10 from "../assets/jpeg/print/print-10.jpg";

import sub1 from "../assets/jpeg/sublimacije/sub-1.jpg";
import sub2 from "../assets/jpeg/sublimacije/sub-2.jpg";
import sub3 from "../assets/jpeg/sublimacije/sub-3.jpg";
import sub4 from "../assets/jpeg/sublimacije/sub-4.jpg";
import sub5 from "../assets/jpeg/sublimacije/sub-5.jpg";
import sub6 from "../assets/jpeg/sublimacije/sub-6.jpg";
import sub7 from "../assets/jpeg/sublimacije/sub-7.jpg";
// import sub8 from "../assets/jpeg/sublimacije/sub-8.mp4";

// import nalje1 from "../assets/jpeg/naljepnice/nalje-1.jpg";
import nalje2 from "../assets/jpeg/naljepnice/nalje-2.jpg";
import nalje3 from "../assets/jpeg/naljepnice/nalje-3.jpg";
import nalje4 from "../assets/jpeg/naljepnice/nalje-4.jpg";
import nalje5 from "../assets/jpeg/naljepnice/nalje-5.jpg";
import nalje6 from "../assets/jpeg/naljepnice/nalje-6.jpg";
import nalje7 from "../assets/jpeg/naljepnice/nalje-7.jpg";
import nalje8 from "../assets/jpeg/naljepnice/nalje-8.jpg";

export type ServiceType = {
  id: string;
  tab: string;
  title: string;
  description: string;
  img: string[];
};

const data: ServiceType[] = [
  {
    id: "hidrografika",
    tab: "HIDROGRAFIKA",
    img: [
      hidro1,
      hidro2,
      // hidro3,
      // hidro4,
      hidro5,
      hidro6,
      hidro7,
      hidro8,
      hidro9,
      hidro10,
      hidro11,
    ],
    title: "Hidrografika – transformacija površina u umjetnička djela!",
    description:
      "Hidrografika ili prijenos vode je tehnika koja omogućuje personalizaciju gotovo bilo koje površine. Bez obzira na to želite li unikatni dizajn za auto dijelove, kacige, kućanske predmete ili namještaj – mi smo tu da ispunimo vašu viziju!",
  },
  {
    id: "print",
    tab: "PRINT",
    img: [
      print2,
      print3,
      print4,
      print5,
      print6,
      print7,
      print8,
      // print9,
      print10,
    ],
    title: "Print koji privlači pažnju!",
    description:
      "Od tiskanih materijala za vaše poslovanje do personaliziranih proizvoda za posebne prilike, nudimo kvalitetan print koji se ističe. Uz najnoviju tehnologiju osiguravamo oštre boje i trajnost.",
  },
  {
    id: "sublimacije",
    tab: "SUBLIMACIJE",
    img: [sub1, sub2, sub3, sub4, sub5, sub6, sub7],
    title: "Sublimacija – personalizacija na novoj razini!",
    description:
      "Tehnologija sublimacije omogućuje trajni prijenos slike na predmete kao što su keramika, tekstil i metal. Idealno za personalizirane poklone, reklamne proizvode ili dekoracije!",
  },
  {
    id: "laser",
    tab: "LASER",
    img: [serviceHydro], // Replace with the appropriate image for LASER
    title: "Lasersko graviranje – preciznost na svakom materijalu!",
    description:
      "Lasersko graviranje omogućuje precizno i trajno graviranje na raznim materijalima kao što su drvo, metal, plastika i staklo. Idealan je za personalizirane poklone, oznake i dekoracije koje ostavljaju dojam.",
  },
  {
    id: "3d-print",
    tab: "3D PRINT",
    img: [print3d1, print3d2, print3d4, print3d5], // Replace with the appropriate image for 3D PRINT
    title: "3D print – od ideje do stvarnosti!",
    description:
      "Uz 3D print možete ostvariti svoje ideje i dizajne u stvarnosti. Idealno za prototipe, prilagođene dijelove i kreativne projekte. Kvalitetni materijali i precizna tehnologija osiguravaju izdržljivost i detalje.",
  },
  {
    id: "stickers",
    tab: "STICKERS",
    img: [nalje2, nalje3, nalje4, nalje5, nalje6, nalje7, nalje8],
    title: "Naljepnice – kreativnost koja se lijepi svuda!",
    description:
      "Naljepnice donose jedinstven način za izražavanje vašeg stila ili promociju brenda. Bilo da su za vozila, proizvode, ili dekoraciju prostora, nudimo izdržljive i živopisne naljepnice prilagođene vašim željama!",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>(data[0]);

  const handleActiveTab = (
    activeId: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const currentItem = data.find((item) => item.id === activeId);
    console.log(currentItem);
    if (currentItem) {
      setActiveTab(currentItem);
      // Scroll the clicked item into view
      const clickedElement = event.currentTarget;
      clickedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Ensure no vertical scrolling happens
        inline: "start", // Align to the start horizontally
      });
    } else {
      alert("Ovaj tab nije pronađen");
    }
  };

  return (
    <>
      <div className="tab">
        {data.map((service) => {
          return (
            <div
              key={service.id}
              className={`tab__item ${
                service.id === activeTab.id ? "active" : ""
              }`}
              onClick={(e) => handleActiveTab(service.id, e)}
            >
              {service.tab}
            </div>
          );
        })}
      </div>
      <div className="services__wrapper">
        <div className="tab__content">
          <AnimatePresence>
            <TabContent data={activeTab} />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Services;
