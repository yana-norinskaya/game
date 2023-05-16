import { FC } from "react";
import { motion } from "framer-motion";

export const Skeleton: FC = () => (
  <motion.div
    initial={{
      opacity: 0.5,
      width: "250px",
      height: "250px",
      background: "rgba(166,160,160,0.14)",
      borderRadius: "50%",
    }}
    animate={{ opacity: 0.5, background: "rgba(166,160,160,0.64)" }}
    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
  ></motion.div>
);
