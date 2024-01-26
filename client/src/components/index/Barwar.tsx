import IMG1 from '../../assets/img1.jpg';

export const IndexBarwar = () => {

    return (
        <section className='grid w-[90%] md:w-[70%] place-items-center min-h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-[.75fr_1fr] w-full'>
                <img src={IMG1} className='w-full h-[450px] object-cover rounded-[50%_50%_0_0] lg:rounded-[50%_0_0_50%]' />
                <div className='bg-white lg:rounded-r-xl shadow w-full min-h-[450px] p-5 lg:p-10 flex justify-center items-center flex-col'>
                    <p className='text-xl font-semibold text-gray-800 mt-5'>
                        El Liceo Nacional "Juan Germán Roscio" inició sus actividades educativas en 1938,
                        auspiciado por el Ejecutivo Regional y posteriormente absorbido por el Ministerio
                        de Educación. A lo largo de los años, ha experimentado cambios en su estructura y 
                        programas educativos, convirtiéndose en un Liceo Bolivariano en 2005-2006. Ha contado
                        con excelentes docentes y ha sido una institución educativa que atiende al ser humano
                        en sus etapas de adolescencia y juventud para el Desarrollo Endógeno y Soberano.
                    </p>
                </div>
            </div>
        </section>
    )
}
