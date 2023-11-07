
'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsTiktok, BsInstagram } from 'react-icons/bs';

function Info() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-1 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/freespiritparacaidismo">Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/freespiritpy/">Instagram</Footer.Link>
                <Footer.Link href="https://www.tiktok.com/@freespirit_py">Tik Tok</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="PureCode" year={2023} />
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