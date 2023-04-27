import {SearchContext} from "../context/contexts";
import {FC, useState} from "react";

interface ChildrenProps {
    children: JSX.Element | JSX.Element[] | null
}

const SearchContextLayout: FC<ChildrenProps> = ({children}) => {

    const [isOpened, setOpened] = useState(false)

    return (
        <>
            <SearchContext.Provider
                value={{
                    isOpened: isOpened,
                    setOpened: () => {setOpened(true)},
                    setClosed: () => {setOpened(false)}
                }}
            >
                {children}
            </SearchContext.Provider>
        </>
    );
};

export default SearchContextLayout;
