import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <>
      <div className="services__wrapper">
        <h1>Djelatnosti</h1>
        <div className="tab">
          <div className="tab__item">Print</div>
          <div className="tab__item">Hidrografika</div>
          <div className="tab__item">Laser</div>
          <div className="tab__item">Suplementi</div>
        </div>
        <div>Content</div>
      </div>
    </>
  );
};
export default Services;
