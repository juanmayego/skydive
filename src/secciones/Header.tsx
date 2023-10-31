'use client';
import skyDive from '../assets/img/skydive_1.jpg'
import logo from '../assets/free_spirit_logo.png'

export default function DefaultCarousel() {
  return (
    <div className="h-screen w-full bg-fixed bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${skyDive})` }}>
      <div className='bg-gradient-to-bl from-transparent to-slate-100 h-screen w-full flex'>
        <img src={logo} className='object-contain self-center m-auto  max-w-lg p-2'></img>
      </div>  
    </div>
  )
}


