import { ServiceType } from "./services";
import { motion } from "framer-motion";

type Props = {
  data: ServiceType;
};

const TabContent = ({ data }: Props) => {
  const variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? -200 : 200,
    }),
    visible: { opacity: 1, x: 0 },
  };
  const variantsText = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction !== 1 ? -200 : 200,
    }),
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="services__item">
      <motion.div
        key={data.title}
        variants={variantsText}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: "spring", bounce: 0.05 }}
      >
        <h1 className="services__title">{data.title}</h1>
        <div className="services__description">{data.description}</div>
      </motion.div>
      <div className="services__item__img">
        <motion.img
          loading="eager"
          key={data.id}
          src={data.img}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="services__img"
          transition={{ type: "spring", bounce: 0.05 }}
        />
      </div>
    </div>
  );
};
export default TabContent;
