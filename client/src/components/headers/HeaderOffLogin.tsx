import { Navigate } from "../../hooks/useNavigate"

export const HeaderOffLogin = () => {

    return (
        <header className='w-full py-5 px-10 bg-amber-300'>
            <h1 className='text-2xl font-bold'>Juan German Roscio</h1>
            <button className='font-bold text-blue-600' onClick={()=> Navigate('/login')}>Iniciar sesión</button>
        </header>
    )
}
