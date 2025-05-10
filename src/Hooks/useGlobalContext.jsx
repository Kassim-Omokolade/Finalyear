import { AppContext } from "../context";
import { useContext } from "react";

export const useGlobalContext = () => useContext(AppContext)