
'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsTiktok, BsInstagram, BsWhatsapp } from 'react-icons/bs';

function Info() {
  return (
    <Footer container>
      <>
        <a href='https://wa.me/+595976892830' target='_blank' className="fixed bottom-20 right-5 z-10 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          <BsWhatsapp />
          <span className="sr-only">Contacta con nostoros</span>
        </a>
      </>
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://purecode.dev" by="PureCode" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/freespiritparacaidismo" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/freespiritpy/" icon={BsInstagram} />
            <Footer.Icon href="https://www.tiktok.com/@freespirit_py" icon={BsTiktok} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Info