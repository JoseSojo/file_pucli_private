//import { CardValores } from "../card/CardValores"
/*import IMG1 from '../../assets/img1.jpg';
import IMG2 from '../../assets/img2.jpg';
import IMG3 from '../../assets/img3.jpg';
import IMG4 from '../../assets/img4.jpg';*/

export const IndexValores = () => {

    return (
        <section className='flex flex-col justify-center items-center w-[90%] lg:w-[70%] place-items-center min-h-screen'>
            <h3 className='font-bebas text-6xl text-gray-700'>FODA</h3>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 rounded-xl'>
                <div className='bg-white p-7 rounded-xl lg:rounded-none lg:rounded-tl-2xl'>
                    <h1 className='font-bebas text-2xl text-amber-700 text-center'>Fortalezas</h1>
                    <ol className='font-bold text-md'>
                        <li>Una infraestructura satisfactoria.</li>
                        <li>La mayoría de los docentes son graduados y fijos.</li>
                        <li>Estudiantes inteligentes.</li>
                        <li>Apoyo del personal directivo a nuevas iniciativas.</li>
                        <li>El comedor funciona regularmente atendiendo a la población estudiantil.</li>
                    </ol>
                </div>

                <div className='bg-white p-7 rounded-xl lg:rounded-none lg:rounded-tr-2xl'>
                    <h1 className='font-bebas text-2xl text-amber-700 text-center'>Oportunidades</h1>
                    <ol className='font-bold text-md'>
                        <li>Apoyo del Municipio Escolar Nº 1, la Alcaldía, la Zona Educativa, Empresas Privadas, Consejo Comunal,   Consejo de Protección y del Poder Ciudadano.</li>
                        <li>Instituciones, Grupos Religiosos, Libros, Leyes y otros; que informan acerca de los valores y proyectos socio-productivos.</li>
                    </ol>
                </div>

                <div className='bg-white p-7 rounded-xl lg:rounded-none lg:rounded-bl-2xl'>
                    <h1 className='font-bebas text-2xl text-amber-700 text-center'>Debilidades</h1>
                    <ol className='font-bold text-md'>
                        <li>No hay seguimiento a las actividades planificadas.</li>
                        <li>Bajo sentido de pertenencia del personal y de los estudiantes.</li>
                        <li>Falta de integración con las instituciones vecinas.</li>
                        <li>Agresividad de los estudiantes.</li>
                        <li>Embarazo en adolescentes.</li>
                    </ol>
                </div>

                <div className='bg-white p-7 rounded-xl lg:rounded-none lg:rounded-br-2xl'>
                    <h1 className='font-bebas text-2xl text-amber-700 text-center'>Amenzas</h1>
                    <ol className='font-bold text-md'>
                        <li>Influencia negativa de los grupos sociales y medios de comunicación.</li>
                        <li>Poca estimulación a fortalecer los valores en el hogar.</li>
                    </ol>
                </div>
            </div>


        </section>
    )
}
