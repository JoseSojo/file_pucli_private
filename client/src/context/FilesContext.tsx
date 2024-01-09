import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface FilesContextInterface {
    files: string[]
    setFiles: Dispatch<SetStateAction<string[]>>
}

const DefaultContext: FilesContextInterface = {
    files: [],
    setFiles: ()=>{}
}

export const FilesContext = createContext(DefaultContext);

export const FilesProvider = ({children}: {children: ReactNode}) => {

    const [files, setFiles] = useState<string[]>([]);

    return (
        <FilesContext.Provider value={{
            files,
            setFiles
        }}>
            {children}
        </FilesContext.Provider>
    )
}

export const useFiles = () => useContext(FilesContext);
