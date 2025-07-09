import { useContext } from "react";
import { PoolContext } from "./PoolContext";

const usePool = () => {
  const context = useContext(PoolContext);
  if (!context) {
    throw new Error("usePool must be used within a PoolProvider");
  }
  return context;
};

export default usePool;