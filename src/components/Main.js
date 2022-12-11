import React from 'react';
import ContactMe from './Contact';
import Experience from './Experience';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Experience/>
            <ContactMe/>
        </div>
    )
}

export default Main;