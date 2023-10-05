import React from 'react'
import ima20 from '../../assets/Recurso 20.jpg'
import ima21 from '../../assets/Recurso 21.jpg'
import ima22 from '../../assets/Recurso 22.jpg'
import ima23 from '../../assets/Recurso 23.jpg'

const DosSection = () => {
  return (
    <div className='flex gap-12'>
      <div>
        <img src={ima20} alt="Blanco y negro" />
      </div>
      <div className='flex flex-col gap-12'>
        <img src={ima21} alt="Accesorios" />
        <img src={ima22} alt="Zapatos" />
      </div>
      <div>
        <img src={ima23} alt="Detalle Blanco y Negro" />
      </div>
    </div>
  )
}

export default DosSection