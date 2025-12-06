import { createContext, useContext } from "react";

export type GlobalType = {
    flag: string;
    setFlag: (c: string) => void;
};

export const MyGlobalContext = createContext<GlobalType>({
    flag: "hello, world",
    setFlag: () => {},
});

export const useGlobalContent = () => useContext(MyGlobalContext);
