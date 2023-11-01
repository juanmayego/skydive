'use client';
import { Card } from 'flowbite-react';
import staff01 from '../assets/img/staff/staff-00.jpg'
import staff02 from '../assets/img/staff/staff-01.jpg'
import staff03 from '../assets/img/staff/staff-02.png'
import staff04 from '../assets/img/staff/staff-03.webp'
import staff05 from '../assets/img/staff/staff-04.webp'
import staff06 from '../assets/img/staff/staff-05.jpg'


export default function DefaultCarousel() {

  const staffs = [
    {
      img: staff01,
      name: 'Juan P. Montaña',
      description: 'Instructor de Paracaidismo',
    },
    {
      img: staff02,
      name: 'Rafael Yegros',
      description: 'Instructor de Paracaidismo',
    },
    {
      img: staff03,
      name: 'Ernesto Nuñez',
      description: 'Instructor de Paracaidismo',
    },
    {
      img: staff04,
      name: 'Ronald Gonzalez',
      description: 'Instructor de Paracaidismo',
    },
    {
      img: staff05,
      name: 'Lucas Cáceres',
      description: 'Instructor de Paracaidismo',
    },
    {
      img: staff06,
      name: 'Fernando Gonzalez',
      description: 'Instructor de Paracaidismo',
    }
  ]

  return (
    <div className="overflow-hidden bg-white py-14 sm:py-22 max-w-7xl m-auto">
        <p className="w-full text-center m-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Staff</p>
        <p className="m-6 text-lg text-justify leading-8 text-gray-600">Descubre a los miembros del equipo de la Escuela Free Spirit: un grupo altamente calificado, con certificaciones tanto nacionales como internacionales, y un profundo compromiso por acompañarte en esta experiencia única en tu vida.</p>
        <div className='grid gap-4 grid-cols-1 grid-rows-1  sm:grid-cols-3 sm:grid-rows-2'>
          { staffs.map((staff) =>{
                return (
                <>
                  <Card
                    className="max-w-md mx-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={staff.img}
                    >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {staff.name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {staff.description}
                    </p>
                  </Card>
                </>)
              })
            }
        </div>
    </div>
  )
}


