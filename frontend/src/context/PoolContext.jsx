import { createContext, useContext } from "react";

export const PoolContext = createContext();
export const usePool = () => { 
    const context = useContext(PoolContext);
    if (context === undefined) {
        throw new Error("usePool must be used within a PoolProvider");
    }
    return context;
};