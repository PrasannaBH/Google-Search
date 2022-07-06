import React from 'react'
import {Bars} from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className='flex justify center items-center'>
      <h1>ABC</h1>
        <Bars type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  )
}
