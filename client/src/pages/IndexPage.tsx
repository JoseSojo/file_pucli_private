import { useState } from 'react';
import IMG3 from '../assets/img3.jpg';
import { Navigate } from '../hooks/useNavigate';
import { IndexPreviwGallery } from '../components/index/PreviewGallery';
import { IndexValores } from '../components/index/Valores';
import { IndexMisionAndVision } from '../components/index/MisionAndVision';
import { IndexGallery } from '../components/index/Gallery';
import { IndexBarwar } from '../components/index/Barwar';


export const IndexPage = () => {
    const [gallery, setGallery] = useState(false);

    return (
        <>
            <header 
                className='grid grid-cols-1 lg:grid-cols-2 place-items-center h-screen p-5 lg:p-10' 
                style={{
                    backgroundImage: `url(${IMG3})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundOrigin: 'bottom'
                }}
            >
                <h1 style={{textShadow: '2px 2px 0 rgb(245 158 11), -2px -2px 0 rgb(245 158 11)'}} className='font-bebas text-white text-8xl'>Juan German Roscios</h1>
                
                <aside className='p-16 bg-gray-950 rounded-xl bg-opacity-50 max-w-[450px] text-center'>
                    <h2 className='font-bebas text-white text-xl'>El liceo N°1 de San Juan de los Morros</h2>    
                    <p className='text-gray-100 text-md mt-5'>Profesores, administradores y personal directivo de la institución</p>
                    <button 
                        className='mt-5 px-8 py-3 font-bold text-white bg-amber-500 hover:bg-amber-300 rounded-xl'
                        onClick={()=>Navigate('/login')}
                    >
                        Iniciar Sesión
                    </button>
                </aside>
            </header>
            <main className='flex flex-col gap-y-5 justify-center items-center'>

                {
                    gallery
                    ? <IndexGallery change={setGallery} />
                    : <>
                        <IndexBarwar />
                        <IndexPreviwGallery change={setGallery} />
                        <IndexValores />
                        <IndexMisionAndVision />
                    </>
                }

            </main>
        </>
    );

}
