import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:3001" });

export const findOrCreatePool = (userData) => {
  console.log("Sending user data to backend:", userData);
  return new Promise(resolve => {
    setTimeout(() => {
        resolve({ data: { success: true, poolId: "pool_123xyz" } });
    }, 500);
  });
};
