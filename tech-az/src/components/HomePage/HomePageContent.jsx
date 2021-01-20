import React from 'react'
import Corporate from './HomePageMenu/Corporate'
import Events from './HomePageMenu/Event'
import Portfolio from './HomePageMenu/Portfolio'
import Media from './HomePageMenu/Media'
import InterPartners from './HomePageMenu/InterPartners'
import LocalPartners from './HomePageMenu/LocalPartners'
import Form from './HomePageMenu/Form'

const HomePageContent = () =>{
    return(
        <section className="home-page-content" >
            <Events/>
            <Media/>
            {/* <Portfolio/>
             <Corporate/> */}
            <InterPartners/>
            <LocalPartners/>
            <Form/>
       </section>
    )

}

export default HomePageContent