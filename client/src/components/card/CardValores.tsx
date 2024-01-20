import { FC } from "react"

interface Props {
    valor: string,
    description: string,
    img: any
}

export const CardValores: FC<Props> = ({ valor, description, img }) => {

    return (
        <aside className='bg-white rounded-t-3xl rounded-b-xl shadow'>
            <header>
                <img src={img} className='w-full h-[200px] rounded-t-3xl object-cover' />
            </header>
            <div className='p-5 '>
                <h3 className='font-bebas text-3xl text-gray-800'>{valor}</h3>
                <p className='font-semibold text-sm text-gray-800'>{description}</p>
            </div>
        </aside>
    )
}
