import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import '../../styles/Locations/LocationMain.css'

import Descriptions from './scripts/Descriptions'
import Tags from './scripts/Tags'
import Toggle from './scripts/Toggle'
import Stars from './scripts/Stars'
import Slider from './scripts/Slider'
import NoResultMain from '../404/NoResultMain'

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
    
    // S'il n'y a pas d'images = pas de logements donc 404
    if (logements.pictures.length === 0) {
        return <NoResultMain />
    }

    return(
        <main>
            <Slider slider={logements.pictures}/>

            <Descriptions logements={logements}/>
            
            <section className="details">

                <ul className="details-tags">{logements.tags.map((tag) => <Tags key={tag} tag={tag} />)}</ul>

                <div className="details-profile">
                    <Stars rating={logements.rating} key={logements.id} />
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