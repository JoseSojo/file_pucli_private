import IMG3 from '../../assets/img3.jpg';
import IMG5 from '../../assets/img5.jpg';

export const IndexMisionAndVision = () => {

    return (
        <section className='flex flex-col justify-center items-center w-[90%] md:w-[70%] place-items-center min-h-screen'>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                
                <div className='bg-white rounded-xl grid'>
                    <img src={IMG5} className='object-cover rounded-t-xl w-full h-[400px]' />

                    <div className='py-5 px-10 flex justify-between items-center flex-col relative'>
                        <h3 className='font-bebas text-6xl text-gray-700'>Misión</h3>
                        <p className='font-mono text-md'>
                            Ofrecer una educación inspirada en el pensamiento de Juan Germán Roscio Nieves del 
                            ciudadano formado en la nueva espiritualidad basada en las ideas y la consciencia de 
                            libertad, justicia, democracia e independencia considerando los lineamientos del MPPE, 
                            y contribuyendo junto con la familia a que los estudiantes lleguen a ser personas respetuosas, 
                            socialmente comprometidos y con excelente formación académica.
                        </p>
                    </div>
                </div>

                <div className='bg-white rounded-xl grid'>
                    <img src={IMG3} className='object-cover rounded-t-xl w-full h-[400px]' />

                    <div className='py-5 px-10 flex justify-between items-center flex-col relative'>
                        <h3 className='font-bebas text-6xl text-gray-700'>Visión</h3>
                        <p className='font-mono text-lg'>
                            Ser modelo de educación por la alta calidad humana, excelente formación académico nuestros 
                            estudiantes y egresados; con un compromiso permanente con su familia, comunidad y país, 
                            en la búsqueda de un ciudadano integral preparado para este mundo globalizado y en 
                            permanente cambio.
                        </p>
                    </div>
                </div>

            </div>


        </section>
    )
}
