import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import '../../styles/Locations/LocationMain.css'

import Tags from './scripts/Tags'
import Toggle from './scripts/Toggle'

export default function LogementsMain() {
    const [logements, setLogements] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

    // Le hook useParams return un objet de key des paramètres de manière dynamique de l'URL actuelle
    // Les childs routes héritent de tous les paramètres de leurs parents routes
    let { id } = useParams();

    useEffect (() => {
        fetch('/logements.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
        })
        .then((response) => {
            return response.json()
        })
        .then((datas) => {
            for (let i = 0; i < datas.length; i++){
                if (datas[i].id === id){
                    setLogements(datas[i])
                }
            }
        })
    },[id]);

    return(
        <main>
            <section className="slider">
                <img src={logements.pictures[0]} alt="" />
            </section>

            <section className="details">
                <h1 className="details-title">{logements.title}</h1>
                <p className="details-location">{logements.location}</p>

                <ul className="details-tags">{logements.tags.map((tag) => <Tags key={tag} tag={tag} />)}</ul>

                <div className="details-profile">
                    <p>{logements.rating}</p>
                    <div className="details-profile-host">
                        <p className="details-host-name">{logements.host.name}</p>
                        <img className="details-host-picture" src={logements.host.picture} alt="" />
                    </div>
                </div>

                <Toggle title="Description" content={<p>{logements.description}</p>} />
                <Toggle title="Équipements" content={<ul>{logements.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}</ul>} />
            </section>
        </main>
    )
}