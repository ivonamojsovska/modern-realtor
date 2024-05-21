import * as React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='w-full h-32 bg-[#4444f2] flex justify-center items-center'>
            <Image src='/images/modern-realtor-logo.png' alt='logo' width={500} height={200} />
        </div>
);}

export default Header;