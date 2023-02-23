import React, { useEffect } from 'react'
import PageHead from './PageHead';
import {useParams} from "react-router-dom"
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';

export default function SpecialPage({setActivePage}) {

  const {page} = useParams();

  useEffect(() => {
    setActivePage(page);
  },[page])

  return (
    <div className='container px-12 pt-8 flex flex-col gap-8'>
      <PageHead/>
      {page === "destination" && <Destination />}
      {page === "crew" && <Crew />}
      {page === "technology" && <Technology />}
    </div>
  )
}
