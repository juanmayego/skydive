'use client';

import tandentImg from '../assets/img/tandem-smile.jpg';

export default function DefaultCarousel() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">sobre</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nosotros</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Somos una escuela de paracaidismo que se dedica a la formación de paracaidistas y a proporcionar la mejor experiencia para aquellos que deseen realizar un salto en paracaídas.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Nuestra pasión es compartir contigo este emocionante deporte que amamos profundamente. Nuestra filosofía se basa en la libertad de experimentar este deporte junto a una comunidad diversa, aprovechando todas las zonas de salto disponibles y colaborando con escuelas tanto nacionales como internacionales.</p>
            </div>
        </div>
            <img src={tandentImg} alt="Tandent" className="w-[48rem] max-w-600 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="600" height="342"></img>
        </div>
    </div>
    </div>
  )
}


