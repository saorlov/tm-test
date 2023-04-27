import {useEffect} from "react";

export const useOutsideClickDetector = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback()
            }
        }

        const handleKeyDownEvent = (e) => {
            if (ref.current && !ref.current.contains(e.target) && e.key === 'Escape') {
                callback()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDownEvent)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDownEvent)
        };
    }, [ref]);
}
