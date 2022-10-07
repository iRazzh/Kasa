import '../../styles/Homepage/HomeMain.css'
import React, { useState, useEffect } from 'react'

import HomeBanner from './HomeBanner'
import HomeSingleCard from './HomeSingleCard'

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
          <section className="cards">
            {logements 
            && logements.length > 0 
            && logements.map((logement) => <HomeSingleCard key={logement.id} logement={logement} />)}
          </section>
      </main>
  );
}