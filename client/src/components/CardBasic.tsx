import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const CardBasic: FC<Props> = ({ children }) => {

    return (
        <section className='w-[90%] md:w-[70%] lg:w-[50%] bg-white border-lg rounded-xl p-7'>
            {children}
        </section>
    )

}
