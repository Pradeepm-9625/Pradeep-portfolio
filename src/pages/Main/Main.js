import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Education, Experience, Contacts, Projects, Achievement } from '../../components'
// headerData import removed (not used in this file)

function Main() {
    return (
        <div>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Achievement />
            {/* <Blog /> */}
            <Contacts />
            {/* <Footer /> */}
        </div>
    )
}

export default Main
