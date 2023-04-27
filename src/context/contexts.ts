import {createContext} from "react";
import {ISearchContextInitials} from "../model/product";


export const SearchContext = createContext<ISearchContextInitials>({
    isOpened: false,
    setOpened: () => {},
    setClosed: () => {},
})
