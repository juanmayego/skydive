
'use client';
import { Accordion } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import { GiParachute, GiCarpetBombing } from 'react-icons/gi';

function Saltar() {
  
  return (
    <div className="bg-white py-14 sm:py-22 max-w-7xl m-auto">
      <p className="w-full text-center m-2 pb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Salta con nosotros </p>
      <p className="m-6 text-lg text-justify leading-8 text-gray-600">Nos llena de alegría ser parte de tu emocionante travesía en el mundo del paracaidismo y estamos comprometidos a garantizar que vivas cada momento al máximo. Te presentamos nuestras exclusivas opciones diseñadas especialmente para ti, con el propósito de proporcionarte la más excepcional experiencia en paracaidismo.</p>
      <p className="w-full text-center m-2 pb-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Nuestros modulos</p>
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
            
            <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="CURSO ASL / IAD" icon={GiParachute}>
      <p className="mb-2">Con este método, durante los primeros saltos, tu equipo se abrirá de forma asistida por el 
        instructor o mediante una línea anclada a la aeronave en el momento de la salida.
        </p>
        <p className="mb-2">Esta técnica permite que tu mente se relaje y se abra a la experiencia del salto, 
        facilitando una transición gradual y emocionante a la caída libre.
        </p> 
        <p className="mb-2">Es el punto de partida perfecto para iniciar tu trayectoria como paracaidista profesional. 
        Aprenderás a ser responsable de cada fase del salto, desde la salida de la aeronave hasta la caída 
        libre y la navegación, con la asistencia constante de un instructor mediante radio para garantizar 
        una experiencia segura y emocionante.
        </p> 
        <p className="mb-2">¡Descubre la libertad del cielo mientras aprendes con los 
        mejores!
        </p>
        <p className="mb-2">INCLUYE</p>
        <li>
        <span className="font-medium text-gray-800 dark:text-white">Inscripción en la Asociación Paraguaya de Paracaidismo</span>
        </li>
        
        &emsp;&nbsp;&nbsp;Asegúrate de unirte oficialmente a la comunidad de paracaidistas del Paraguay con nuestra 
        asistencia en el proceso de inscripción.
        
        <li>
        Curso Teórico Personalizado (Duración: 8 a 10 horas)
        </li>
        &emsp;&nbsp;&nbsp;Sumérgete en un curso teórico personalizado, diseñado para proporcionarte conocimientos 
        detallados y esenciales para tu seguridad y éxito como paracaidista.

        <li>
        Prácticas y Capacitación Continua
        </li>
        &emsp;&nbsp;&nbsp;Disfruta de sesiones prácticas intensivas y capacitación continua, 
        donde mejorarás tus habilidades y ganarás confianza en cada salto.

        <li>
        Equipo Completo para la Práctica
        </li>
        &emsp;&nbsp;&nbsp;Proporcionamos un equipo completo y de alta calidad para tus prácticas, 
        asegurando que estés equipado con lo mejor en tecnología y seguridad.

        <li>
        Paseo Escénico en Avión (Duración: Aproximadamente 20 minutos)
        </li>
        &emsp;&nbsp;&nbsp;Embárcate en un emocionante paseo en avión que te ofrecerá vistas panorámicas 
        impresionantes, mientras te preparas para tu salto.

        <li>
        Navegación en Paracaídas (Duración: Aproximadamente 7 minutos)
        </li>
        &emsp;&nbsp;&nbsp;Experimenta la libertad del cielo con aproximadamente 7 minutos de navegación 
        en paracaídas, guiado por la suave brisa mientras te deslizas hacia tierra firme.

        <li>
        Video de la Salida y el Salto
        </li>
        &emsp;&nbsp;&nbsp;Capturamos cada momento emocionante, desde tu salida del avión hasta tu 
        aterrizaje, para que puedas revivir tu increíble aventura una y otra vez.
      </Tabs.Item>
      <Tabs.Item title="CURSO AFF" icon={GiCarpetBombing}>
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
    </Tabs>

          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default Saltar