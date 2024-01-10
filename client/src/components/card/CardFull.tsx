import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode,
    scrol?: boolean
}

export const CardFull: FC<Props> = ({ children, scrol }) => {

    return (
        <section className={`w-full h-full border border-amber-500 bg-white border-lg rounded-xl p-7 ${scrol ? 'overflow-y-scroll' : ''}`}>
            {children}
        </section>
    )

}
