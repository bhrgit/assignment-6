import React from 'react';
import logo from "../../assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-black'>
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className='flex items-center gap-2'>
                    <Image src={logo} className="w-10 h-10" alt="logo" /> 
                    <h1 className='text-2xl font-bold text-amber-100'>FITLOG</h1>
                </div>                
                <ul className='flex items-center gap-4 text-amber-50'>
                    <li> <Link href="/">Workouts</Link></li>
                    <li> <Link href="/my-Plan/">My Plan</Link></li>
                </ul>
                <div className='flex items-center gap-4 text-amber-50'>
                    <button>Plan</button>
                    <button>Saved</button>
                </div>
            </nav> 
                         
                             
        </div>
    );
};

export default Navbar;