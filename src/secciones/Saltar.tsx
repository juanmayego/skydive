
'use client';
import { Accordion, Carousel, Tabs } from 'flowbite-react';
import { GiParachute, GiCarpetBombing } from 'react-icons/gi';
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
                <p className="mb-2">INCLUYE</p>
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
                <p className="mb-2">COSTO</p>
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
                
                <Tabs aria-label="Tabs with underline" style="underline">
                  <Tabs.Item active title="CURSO ASL / IAD" icon={GiParachute}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Con este método, durante los primeros saltos, tu equipo se abrirá de forma asistida por el 
                    instructor o mediante una línea anclada a la aeronave en el momento de la salida.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Esta técnica permite que tu mente se relaje y se abra a la experiencia del salto, 
                    facilitando una transición gradual y emocionante a la caída libre.
                    </p> 
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Es el punto de partida perfecto para iniciar tu trayectoria como paracaidista profesional. 
                    Aprenderás a ser responsable de cada fase del salto, desde la salida de la aeronave hasta la caída 
                    libre y la navegación, con la asistencia constante de un instructor mediante radio para garantizar 
                    una experiencia segura y emocionante.
                    </p> 
                    <p className="mb-2 text-gray-500 dark:text-gray-400">¡Descubre la libertad del cielo mientras aprendes con los 
                    mejores!
                    </p>
                    <p className="mb-2">INCLUYE</p>
                    <li>
                    <span className="font-medium text-gray-800 dark:text-white">Inscripción en la Asociación Paraguaya de Paracaidismo</span>
                    </li>
                    
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Asegúrate de unirte oficialmente a la comunidad de paracaidistas del Paraguay con nuestra 
                    asistencia en el proceso de inscripción.
                    </p>
                    
                    <li>
                    Curso Teórico Personalizado (Duración: 8 a 10 horas)
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Sumérgete en un curso teórico personalizado, diseñado para proporcionarte conocimientos 
                    detallados y esenciales para tu seguridad y éxito como paracaidista.
                    </p>

                    <li>
                    Prácticas y Capacitación Continua
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Disfruta de sesiones prácticas intensivas y capacitación continua, 
                    donde mejorarás tus habilidades y ganarás confianza en cada salto.
                    </p>

                    <li>
                    Equipo Completo para la Práctica
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Proporcionamos un equipo completo y de alta calidad para tus prácticas, 
                    asegurando que estés equipado con lo mejor en tecnología y seguridad.
                    </p>

                    <li>
                    Paseo Escénico en Avión (Duración: Aproximadamente 20 minutos)
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Embárcate en un emocionante paseo en avión que te ofrecerá vistas panorámicas 
                    impresionantes, mientras te preparas para tu salto.
                    </p>

                    <li>
                    Navegación en Paracaídas (Duración: Aproximadamente 7 minutos)
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Experimenta la libertad del cielo con aproximadamente 7 minutos de navegación 
                    en paracaídas, guiado por la suave brisa mientras te deslizas hacia tierra firme.
                    </p>

                    <li>
                    Video de la Salida y el Salto
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Capturamos cada momento emocionante, desde tu salida del avión hasta tu 
                    aterrizaje, para que puedas revivir tu increíble aventura una y otra vez.
                    </p>
                    <p className="mb-2">¡Haz Realidad una Experiencia Única en Tu Vida!</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Descubre la emoción del paracaidismo a partir de solo 150 USD. Tu aventura inolvidable está a 
                    solo un salto de distancia. ¡No dudes en consultarnos para confirmar el precio exacto y 
                    descubrir nuestras increíbles promociones!
                    </p>
                  </Tabs.Item>
                  <Tabs.Item title="CURSO AFF" icon={GiCarpetBombing}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Esta modalidad te ofrece la entrada más rápida al mundo del paracaidismo. Desde tu primer salto, 
                  te sumergirás en ejercicios de caída libre, manteniendo tu enfoque en las técnicas y 
                  responsabilidades del salto.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Perfecto para los amantes de la adrenalina, esta opción te permite experimentar la emoción en su 
                    máxima expresión. Durante todo el proceso, serás guiado por dos instructores expertos que volarán 
                    junto a ti, brindándote asistencia desde la salida hasta el aterrizaje. Aprenderás a manejar cada 
                    fase del salto, desde la salida del avión hasta la apertura del paracaídas, mientras recibes 
                    orientación constante a través de una radio.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    ¡Prepárate para una experiencia intensa y emocionante que te llevará al límite y más allá en 
                    cada salto!
                    </p>

                    <p className="mb-2">INCLUYE</p>
                    <li>
                    <span className="font-medium text-gray-800 dark:text-white">Inscripción en la Asociación Paraguaya de Paracaidismo</span>
                    </li>
                    
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Asegúrate de ser parte 
                    oficial de la comunidad de paracaidistas del Paraguay con nuestra asistencia en el proceso de 
                    inscripción.
                    </p>
                    
                    <li>
                    Curso Teórico Personalizado (Duración: 8 a 10 horas)
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Sumérgete en un curso 
                    teórico detallado y personalizado, diseñado para brindarte conocimientos esenciales para tu 
                    seguridad y éxito como paracaidista.
                    </p>

                    <li>
                    Prácticas Intensivas y Capacitación Continua
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Disfruta de sesiones 
                    prácticas intensivas y entrenamiento continuo, donde mejorarás tus habilidades y ganarás 
                    confianza en cada salto.
                    </p>

                    <li>
                    Equipo Completo para la Práctica
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Proporcionamos un equipo 
                    completo y de alta calidad para tus prácticas, asegurando que estés equipado con lo mejor en 
                    tecnología y seguridad.
                    </p>

                    <li>
                    Paseo Escénico en Avión (Duración: Aproximadamente 35 minutos)
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Disfruta de un emocionante 
                    paseo en avión que te brindará vistas panorámicas espectaculares, mientras te preparas para tu 
                    salto.
                    </p>

                    <li>
                    Navegación en Paracaídas (Duración: Aproximadamente 7 minutos)
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Experimenta la libertad 
                    del cielo con aproximadamente 7 minutos de navegación en paracaídas, guiado por la suave brisa 
                    mientras te deslizas hacia tierra firme.
                    </p>

                    <li>
                    Video de la Salida y el Salto
                    </li>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">&emsp;&nbsp;&nbsp;Capturamos cada momento 
                    emocionante, desde tu salida del avión hasta tu aterrizaje, para que puedas revivir tu increíble 
                    aventura una y otra vez.
                    </p>
                    <p className="mb-2">¡Explora las alturas y descubre el paracaidismo en su máxima expresión con 
                    nuestra experiencia única y emocionante!</p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Descubre una experiencia única en tu vida a partir de tan solo 380 USD. Estamos aquí para hacer 
                    realidad tu sueño de volar. ¡Consúltanos para confirmar el precio y descubrir nuestras 
                    promociones exclusivas!
                    </p>
                  </Tabs.Item>
                </Tabs>

              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
      
    </div>
  );
}

export default Saltar