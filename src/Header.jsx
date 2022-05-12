import React from 'react';

function Header() {
    return ( 
        <header className='h-18 bg-blue-900 flex justify-center'>
            <img src={localStorage.getItem("profilePic")} />
            <span className='self-center text-white text-bold text-2xl'>&nbsp; Translate Mails for your Foreign Friends!</span>
        </header>
     );
}

export default Header;