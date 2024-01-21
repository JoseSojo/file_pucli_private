import IMG1 from '../assets/img1.jpg';
import IMG2 from '../assets/img2.jpg';
import IMG3 from '../assets/img3.jpg';
import IMG4 from '../assets/img4.jpg';
import { CardValores } from '../components/card/CardValores';
import { Carrousel } from '../components/default/Carrousel';
import { TitleText } from '../components/text/TitleText';
import { Navigate } from '../hooks/useNavigate';


export const IndexPage = () => {

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

                <section className='grid w-[90%] md:w-[70%] place-items-center min-h-screen'>
                    <div className='grid grid-cols-1 lg:grid-cols-[.75fr_1fr] w-full'>
                        <img src={IMG1} className='w-full h-[450px] object-cover rounded-[50%_50%_0_0] lg:rounded-[50%_0_0_50%]' />
                        <div className='bg-white lg:rounded-r-xl shadow w-full min-h-[450px] p-5 lg:p-10 flex justify-center items-center flex-col'>
                            <TitleText text='Info de la institucion' />
                            <p className='text-md text-gray-800 mt-5'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolorem distinctio non 
                                quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facili
                                s quisquam numquam quam quae odio!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolorem distinctio non 
                                quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facili
                                s quisquam numquam quam quae odio!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolorem distinctio non 
                                quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facili
                                s quisquam numquam quam quae odio!
                            </p>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col justify-center items-center w-[90%] md:w-[70%] place-items-center min-h-screen'>
                    <h3 className='font-bebas text-6xl text-gray-700'>Galeria Interactiva De La Institución</h3>
                    <button className='bg-amber-500 hover:bg-amber-300 duration-200 px-8 py-2 rounded-md font-bold text-white my-5'>Ver más</button>
                    <Carrousel />
                </section>

                <section className='flex flex-col justify-center items-center w-[90%] md:w-[70%] place-items-center min-h-screen'>
                    <h3 className='font-bebas text-6xl text-gray-700'>Nuestros Valores</h3>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <CardValores 
                            description='quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facilis quisquam numquam quam quae odio!'
                            img={IMG1}
                            valor='Nombre Valor'
                            key={'Nombre_Valor'}
                            />

                        <CardValores 
                            description='quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facilis quisquam numquam quam quae odio!'
                            img={IMG2}
                            valor='Nombre Valor'
                            key={'Nombre_Valor'}
                            />

                        <CardValores 
                            description='quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facilis quisquam numquam quam quae odio!'
                            img={IMG3}
                            valor='Nombre Valor'
                            key={'Nombre_Valor'}
                            />

                        <CardValores 
                            description='quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facilis quisquam numquam quam quae odio!'
                            img={IMG4}
                            valor='Nombre Valor'
                            key={'Nombre_Valor'}
                            />
                    </div>


                </section>

                <section className='grid w-[90%] md:w-[70%] place-items-center min-h-screen'>
                    <div className='grid grid-cols-1 lg:grid-cols-[.75fr_1fr] w-full h-auto'>
                        <img src={IMG3} className='w-full h-[450px] object-cover rounded-[50%_50%_0_0] lg:rounded-[50%_0_0_50%]' />
                        <div className='bg-white lg:rounded-r-xl shadow w-full min-h-[450px] p-5 lg:p-10 flex justify-center items-center flex-col'>
                            <h3 className='font-bebas text-6xl text-gray-700'>Reseña Histórica</h3>
                            
                            <p className='text-md text-gray-800 mt-5'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolorem distinctio non 
                                quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facili
                                s quisquam numquam quam quae odio!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolorem distinctio non 
                                quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facili
                                s quisquam numquam quam quae odio!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolorem distinctio non 
                                quis dicta aliquid nisi, quod cumque similique aspernatur beatae deleniti quas vitae facili
                                s quisquam numquam quam quae odio!
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );

}
