import { useEffect, useRef } from 'react';
import IMG1 from '../../assets/img1.jpg';
import IMG2 from '../../assets/img2.jpg';
import IMG3 from '../../assets/img3.jpg';
import IMG4 from '../../assets/img4.jpg';

export const Carrousel = () => {

    const refCarrouse = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        if(refCarrouse.current) refCarrouse.current.scrollLeft = 0;
        
        setInterval(() => {
            if(refCarrouse.current != null) refCarrouse.current.scrollLeft += 10;

            
        }, 100);
    }, [])

    // const previous = () => {if(refCarrouse.current) refCarrouse.current.scrollLeft -= 350}
    // const next = () => {if(refCarrouse.current) refCarrouse.current.scrollLeft += 350}

    return (
        <section className='w-full h-auto flex items-center'>

            <div className='w-full flex overflow-x-hidden scroll-smooth' ref={refCarrouse}>
                <img src={IMG1} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG2} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG3} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG4} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG1} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG2} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG3} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG4} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG1} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG2} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG3} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG4} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG1} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG2} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG3} className='h-[350px] w-[500px] object-cover' />
                <img src={IMG4} className='h-[350px] w-[500px] object-cover' />
            </div>


        </section>
    )
}
