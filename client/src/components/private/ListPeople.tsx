
import { useEffect, useState } from 'react';
import ServiceUser from '../../service/ServiceUser';
import { User } from '../../types/user';
import { TitleText } from '../text/TitleText';
import { CardUser } from '../card/CardUser';

export const ListPeople = () => {
    const [peoples, setPeoples] = useState<User[] | null>(null);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const Get = async () => {
            const response = await ServiceUser.GetAllUsers();
            if(response === 'error') {
                setError(true);
                setLoad(false);
                return
            }

            const allPeoples = response.body as User[];
            setPeoples(allPeoples);
            setError(false);
            setLoad(false);
        }
        Get();
    }, []);

    return (
        <>
            { error && <TitleText text='Error al obtener el personal' /> } 
            { load && <TitleText text='Obteniendo personal' /> }{
                peoples && <section className='grid gap-5 my-3 grid-cols-1 lg:grid-cols-2'>
                    {
                        peoples.map((user) => ( <CardUser key={user._id} user={user} /> ))
                    }
                </section>
            }
        </>
    )
}
