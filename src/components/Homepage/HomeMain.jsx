import HomeBanner from './HomeBanner'
import HomeCard from './HomeCard'
import '../../styles/Homepage/HomeMain.css'
import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom"


// useEffect
// fetch
// useState 
// Faire redescendre l'info 

export function FetchData() {
    const [ logements , setLogements ] = useState([]);
    const getData = () => {
      fetch('logements.json', { 
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then(function(response){
            return response.json();
        })
        .then(function(datas) {
          console.log(datas);
          setLogements(datas)
        });
    }
    useEffect(() => {
      getData()
    }, [])
    return (
        <div className="App">
         {
           logements && logements.length > 0 && logements.map((logement)=>
            <ul key={logement.id}>
                <li>{logement.id} 
                <br /> {logement.title} 
                <br />{logement.cover} 
                <br /> {logement.pictures}
                <br /> {logement.description}
                <br /> {logement.host.name}
                <br /> {logement.host.picture}
                <br /> {logement.rating}
                <br /> {logement.location}
                <br /> {logement.equipements}
                <br /> {logement.tags}
                </li>
            </ul>
           )
         }
        </div>
      );
    }

export default function HomeMain() {
    return (
        <main>
            <HomeBanner />
            <Link to="/404"><p>404 layout</p></Link>
            <HomeCard />
            <FetchData />
        </main>
    );
}