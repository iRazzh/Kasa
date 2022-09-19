import HomeBanner from './HomeBanner'
import HomeCard from './HomeCard'
import '../../styles/Homepage/HomeMain.css'
import { Component } from 'react'

import { Link } from "react-router-dom"


// useEffect
// fetch
// useState 
// Faire redescendre l'info 


export default function HomeMain() {
    return (
        <main>
            <HomeBanner />
            <Link to="/404"><p>404 layout</p></Link>
            <HomeCard />
            <Fetch />
        </main>
    );
}