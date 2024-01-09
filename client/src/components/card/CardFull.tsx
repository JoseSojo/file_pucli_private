import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const CardFull: FC<Props> = ({ children }) => {

    return (
        <section className='w-full h-full border border-amber-500 bg-white border-lg rounded-xl p-7'>
            {children}
        </section>
    )

}
