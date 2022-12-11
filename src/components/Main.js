import React from 'react';
import ContactMe from './Contact';
import Experience from './Experience';
import NavBar from './Navbar';
import Education from './Education';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Experience/>
            <Education />
            <ContactMe/>
        </div>
    )
}

export default Main;