import React from 'react'
import ima18 from '../../assets/Recurso 18.jpg'
import ima27 from '../../assets/Recurso 27.jpg'
import ima28 from '../../assets/Recurso 28.jpg'
import Slider from '../Slider'

const sectionUno = () => {

  let slides = [ima27, ima28]

  return (
    <div className='flex my-[5vw] mx-[10vw] gap-5'>
      <div>
        <img src={ima18} alt="Blusa satin" />
      </div>
      <div className=''>
        <div className='w-[35vw]'>
        <Slider slides={slides} />
        <h1 className='font-bold text-[35px] text-blue-700'>
          SATÍN AZUL COBALTO
        </h1>
        <h2 className='text-[40px] text-blue-700 mt-[-1vw]'>Con textura de cebra</h2>
        </div>        
      </div>
    </div>
  )
}

export default sectionUno