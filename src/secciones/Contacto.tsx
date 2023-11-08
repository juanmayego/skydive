
'use client';
import { GoogleMap, LoadScript, MarkerF, MarkerProps } from '@react-google-maps/api';
// import.meta.env.VITE_GOOGLE_MAPS_API_KEY



function Contacto() {

  const apiKey = '' //process.env.VITE_GOOGLE_MAPS_API_KEY;
  
  const mapStyles = {
    height: '400px',
    width: '100%'
  };
  
  const defaultCenter = {
    lat: -25.433313521460036,
    lng: -57.253311868108845
  };

  const marker: MarkerProps = {
    position: defaultCenter,
    title: '     Free Spirit',
    // label: '     Free Spirit',
    // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  };


  return (
    <div className="bg-white pt-14 sm:py-22 max-w-7xl m-auto">
      <p className="w-full text-center m-2 pb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contacto </p>
      <div className='max-w-5/1'>

      </div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        >
          <MarkerF {...marker} ></MarkerF>
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default Contacto