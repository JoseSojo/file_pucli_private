
export const HeaderOnLogin = () => {

    return (
        <header className='w-full px-10 bg-amber-300 hidden justify-between items-center'>
            <h1 className='text-2xl font-bold'>Juan German Roscio</h1>

            <ul className='flex'>
                <li className='font-bold text-sm font-mono list-none p-6 hover:bg-amber-500 duration-200'>inicio</li>
                <li className='font-bold text-sm font-mono list-none p-6 hover:bg-amber-500 duration-200'>archivos</li>
                <li className='font-bold text-sm font-mono list-none p-6 hover:bg-amber-500 duration-200'>salir</li>
            </ul>
        </header>
    )
}
