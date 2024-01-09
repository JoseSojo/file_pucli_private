// import { Dispatch, SetStateAction } from "react";

import { FC } from "react"

interface Props {
    change: any,
    type: 'email' | 'password' | 'text' | 'radio' | 'checkbox',
    placeholder: string,
    value: string | number,
    error: string | null,
    load?: string | null
}

export const InputDefine: FC<Props> = ({ change, type, placeholder, value, error, load }) => {
    return (
        <div className='w-full'>
            <input 
                type={type}
                onChange={(e)=> {
                    if(load) return;
                    change(e.target.value)}
                }
                placeholder={placeholder}
                value={value}
                className={`border rounded-lg w-full p-2 ${load ? 'cursor-progress' : 'cursor-normal'}`} 
                />
            { error && <p className='text-red-600 font-bold text-lg'>{error}</p> }
        </div>
    );
}
