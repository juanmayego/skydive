
'use client';

import { Card } from 'flowbite-react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import.meta.env.VITE_GOOGLE_MAPS_API_KEY



function Contacto() {

  const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
  
  const mapStyles = {
    height: '400px',
    width: '100%'
  };
  
  const defaultCenter = {
    lat: -25.433313521460036,
    lng: -57.253311868108845
  };

  const marker = {
    position: defaultCenter,
    title: 'Free Spirit'
  };


  return (
    <div className="bg-white py-14 sm:py-22 max-w-7xl m-auto">
      <p className="w-full text-center m-2 pb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contacto </p>
      <Card>
      <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <MarkerF
      position={marker.position}
    >
      
    </MarkerF>
      </GoogleMap>
    </LoadScript>
    </Card>
    </div>
  );
}

export default Contacto