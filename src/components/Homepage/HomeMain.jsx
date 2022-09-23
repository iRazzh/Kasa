import '../../styles/Homepage/HomeMain.css'
import React, { useState, useEffect } from 'react'

import HomeBanner from './HomeBanner'
import HomeSingleCard from './HomeSingleCard'

import { Link } from "react-router-dom"

export default function HomeMain() {
  const [ logements , setLogements ] = useState([]);

  const getData = () => {
    fetch('logements.json', { 
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
          return response.json();
      })
      .then((datas) => {
        setLogements(datas)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
      <main>
          <HomeBanner />
          <Link to="/404"><p>404 layout</p></Link>
          <section className="cards">
            {logements 
            && logements.length > 0 
            && logements.map((logement) => <HomeSingleCard key={logement.id} logement={logement} />)}
          </section>
      </main>
  );
}