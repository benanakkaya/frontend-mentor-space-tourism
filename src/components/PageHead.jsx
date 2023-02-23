import React from 'react';
import { useParams } from 'react-router-dom';

export default function PageHead() {

    const { page } = useParams();

    const heads = {
        destination: {
            id: "01",
            title: "PICK YOUR DESTINATION"
        },
        crew: {
            id: "02",
            title: "MEET YOUR CREW"
        },
        technology: {
            id: "03",
            title: "SPACE LAUNCH 101"
        }

    }



    return (
        <h5 className='text-hed5 tracking-hed5letter text-secondary font-bold' >{heads[page]?.id} <span className='text-customWhite font-normal'>{heads[page]?.title}</span></h5>
    )
}
