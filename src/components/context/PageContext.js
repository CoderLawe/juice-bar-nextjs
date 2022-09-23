import { createContext, useEffect, useState } from "react";

export const ImageContext = createContext();
export const OpenContext = createContext();

export const PageProvider = ({children}) => {
    
    const [path, setPath] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("path", path)
    },[path])
    return(
        <ImageContext.Provider value={[path, setPath]}>
            <OpenContext.Provider value={[open, setOpen]}>
                {children}
            </OpenContext.Provider>
        </ImageContext.Provider>
    )
}