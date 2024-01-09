import { FC } from "react"

interface Porps {
    text: string
}

export const OpacityText: FC<Porps> = ({ text }) => {

    return (
        <p className='text-md font-semibold text-center text-gray-500'>
            {text}
        </p>
    );
} 
