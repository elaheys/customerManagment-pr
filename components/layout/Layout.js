import Link from 'next/link';
import React from 'react';

const Layout = ({children}) => {
    return (
        <>
            <header className='header'>
                <h2>boto</h2>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <div className='main'>{children}</div>
            <footer className='footer'>
                Next.js | CRM Project &copy;
            </footer>
        </>
    );
};

export default Layout;