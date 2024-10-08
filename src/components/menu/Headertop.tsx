

import React from 'react';

const Headertop: React.FC = () => {
    return (
        <header>
            <nav className='w-full h-[57px] justify-center flex bg-[#6A6A6A] max-lg:hidden'>
                <div className="flex text-white w-[90%] justify-between items-center max-2xl:text-base   text-2xl">                                            
                    <p className='flex gap-2 items-center'>ADRESEE: Monastir, Tunisie</p>                    
                    <div className="flex gap-16 items-center ">                                                    
                        <p className='flex gap-2 items-center'>TELE: 33 111 222</p>                                                                        
                        <p className='flex gap-2 items-center'>EMAIL: support@rezilla.com</p>                                                
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Headertop;
