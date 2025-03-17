import { useState } from "react";
import servicePrint from "../assets/jpeg/service-1.jpg";
import serviceHydro from "../assets/jpeg/service-2.jpg";
import serviceMerch from "../assets/jpeg/service-3.jpg";
import TabContent from "./service-tab";
import { AnimatePresence } from "framer-motion";

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
    img: [serviceHydro, serviceMerch, servicePrint],
    title: "Hidrografika – transformacija površina u umjetnička djela!",
    description:
      "Hidrografika ili prijenos vode je tehnika koja omogućuje personalizaciju gotovo bilo koje površine. Bez obzira na to želite li unikatni dizajn za auto dijelove, kacige, kućanske predmete ili namještaj – mi smo tu da ispunimo vašu viziju!",
  },
  {
    id: "print",
    tab: "PRINT",
    img: [serviceMerch, servicePrint],
    title: "Print koji privlači pažnju!",
    description:
      "Od tiskanih materijala za vaše poslovanje do personaliziranih proizvoda za posebne prilike, nudimo kvalitetan print koji se ističe. Uz najnoviju tehnologiju osiguravamo oštre boje i trajnost.",
  },
  {
    id: "sublimacije",
    tab: "SUBLIMACIJE",
    img: [servicePrint],
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
    img: [serviceMerch], // Replace with the appropriate image for 3D PRINT
    title: "3D print – od ideje do stvarnosti!",
    description:
      "Uz 3D print možete ostvariti svoje ideje i dizajne u stvarnosti. Idealno za prototipe, prilagođene dijelove i kreativne projekte. Kvalitetni materijali i precizna tehnologija osiguravaju izdržljivost i detalje.",
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
