import { ServiceType } from "./services";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="services__item" key={data.id}>
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
      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="services__item__img"
          transition={{ type: "spring", bounce: 0.05 }}
        >
          {data.img.map((img, index) => {
            return (
              <img
                key={index}
                loading="eager"
                src={img}
                className="services__img"
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default TabContent;
