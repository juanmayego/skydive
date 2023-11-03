
'use client';
import { Accordion, Carousel } from 'flowbite-react';
import img1 from '../assets/img/modulos/modulos-06.jpg';
import img2 from '../assets/img/modulos/modulos-02.webp';
import img3 from '../assets/img/modulos/modulos-03.jpg';
import img4 from '../assets/img/modulos/modulos-05.jpg';


function Saltar() {
  
  return (
    <div className="bg-white py-14 sm:py-22 max-w-7xl m-auto">
      <p className="w-full text-center m-2 pb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salta con nosotros </p>
      <p className="max-w-2xl m-auto lg:m-6 lg:max-w-full text-lg text-justify leading-8 text-gray-600">Nos llena de alegría ser parte de tu emocionante travesía en el mundo del paracaidismo y estamos comprometidos a garantizar que vivas cada momento al máximo. Te presentamos nuestras exclusivas opciones diseñadas especialmente para ti, con el propósito de proporcionarte la más excepcional experiencia en paracaidismo.</p>
      <p className="w-full text-center m-2 pb-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Nuestros modulos</p>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="grid h-56 gap-4 sm:h-64 xl:h-80 2xl:h-96 sm:pt-4">
          <Carousel indicators={false}>
            <img src={img1} className="object-contain" width="500" height="342"/>
            <img src={img2} className="object-contain" width="500" height="342"/>
            <img src={img3} className="object-contain" width="500" height="342"/>
            <img src={img4} className="object-contain" width="500" height="342"/>
          </Carousel>
        </div>
        {/* <img src={imgSrc} alt="Tandent" className="w-[28rem] max-w-400 rounded-md shadow-md ring-1 ring-gray-400/10 m-auto sm:m-5 sm:w-[38rem]" width="500" height="342"></img> */}
        <div className="lg:pr-8 lg:pt-4">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Sáltate a la Aventura</Accordion.Title>
              <Accordion.Content >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                ¡Felicidades por tu fascinación por el paracaidismo!
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                Estamos encantados de acompañarte en esta emocionante aventura y queremos asegurarnos de que disfrutes de la experiencia al máximo. Por eso, te presentamos nuestras opciones especialmente diseñadas para ti, con el objetivo de ofrecerte la mejor experiencia en paracaidismo.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Salto Tandem</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Para los verdaderos buscadores de emociones que desean vivir una experiencia inolvidable sin complicaciones, te presentamos nuestra opción más directa: el SALTO TÁNDEM.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                Al llegar, después de unas breves indicaciones que duran entre 5 y 10 minutos, estarás listo para experimentar un emocionante salto en paracaídas. 
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Serás acompañado por un instructor experto, quien se encargará de todas las fases del salto, desde la salida hasta el aterrizaje, brindándote una experiencia segura e inolvidable.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">INCLUYE</p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                      Un pintoresco paseo en avión de aproximadamente 25 minutos, donde podrás disfrutar del impresionante paisaje de nuestras ciudades, sus majestuosos cerros y serenos lagos.
                  </li>
                  <li>  
                      La completa experiencia del salto y la emocionante navegación por el cielo.
                  </li>
                  <li>
                      Un emocionante video capturado de la mano de tu experimentado instructor para revivir cada momento.
                  </li>
                </ul>
                <p className="mb-2 text-gray-500 dark:text-gray-400">COSTO</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Esta experiencia única en tu vida está disponible a partir de tan solo 1.350.000 Gs.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  ¡No dudes en consultarnos para confirmar el precio y descubrir las increíbles promociones que tenemos para ti!
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Cursos de paracaidismo</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Para los verdaderos amantes de la adrenalina que aspiran a convertirse en paracaidistas profesionales e independientes, presentamos nuestros emocionantes cursos en sus dos modalidades.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                ¡Prepárate para volar alto y alcanzar tus sueños en el cielo!
                </p>
                
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Saltar