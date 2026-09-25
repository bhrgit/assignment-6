import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        // <div>
        //     <div>
        //         <div>
        //             <Image src={logo} className='w-2 h-2' alt="logo"/>
        //             <p>FITLOG</p>

        //         </div>
        //         <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        //     </div>




<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <Image src={logo} className='w-4 h-4' alt="logo"/>
    <p>FITLOG</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p> © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
  </nav>
</footer>

        
        
    );
};

export default Footer;