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
  img: string;
};

const data: ServiceType[] = [
  {
    id: "hidrografika",
    tab: "HIDROGRAFIKA",
    img: serviceHydro,
    title: "Hidrografika – transformacija površina u umjetnička djela!",
    description:
      "Hidrografika ili prijenos vode je tehnika koja omogućuje personalizaciju gotovo bilo koje površine. Bez obzira na to želite li unikatni dizajn za auto dijelove, kacige, kućanske predmete ili namještaj – mi smo tu da ispunimo vašu viziju!",
  },
  {
    id: "print",
    tab: "PRINT",
    img: serviceMerch,
    title: "Print koji privlači pažnju!",
    description:
      "Od tiskanih materijala za vaše poslovanje do personaliziranih proizvoda za posebne prilike, nudimo kvalitetan print koji se ističe. Uz najnoviju tehnologiju osiguravamo oštre boje i trajnost.",
  },
  {
    id: "sublimacije",
    tab: "SUBLIMACIJE",
    img: servicePrint,
    title: "Sublimacija – personalizacija na novoj razini!",
    description:
      "Tehnologija sublimacije omogućuje trajni prijenos slike na predmete kao što su keramika, tekstil i metal. Idealno za personalizirane poklone, reklamne proizvode ili dekoracije!",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>(data[0]);

  const handleActiveTab = (activeId: string) => {
    const currentItem = data.find((item) => item.id === activeId);
    console.log(currentItem);
    if (currentItem) {
      setActiveTab(currentItem);
    } else {
      alert("Ovaj tab nije pronađen");
    }
  };

  return (
    <>
      <div className="tab">
        {data.map((service) => {
          return (
            <>
              <div
                className={`tab__item ${
                  service.id === activeTab.id ? "active" : ""
                }`}
                onClick={() => handleActiveTab(service.id)}
              >
                {service.tab}
              </div>
            </>
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
