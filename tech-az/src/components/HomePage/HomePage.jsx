import React from 'react'
import Header from '../Header/Header'
import HomePageContent from './HomePageContent'

const HomePage = (props) => {
    return(
        <>
        <Header />
        <HomePageContent data={props.data}/>
        </>
    )
}

export default HomePage;