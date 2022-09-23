import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import '../../styles/Locations/LocationMain.css'

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
            console.log(datas)
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
                <h1>{logements.title}</h1>
                <p>{logements.location}</p>

                <ul>
                    {logements.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>

                <div>
                    <p>{logements.rating}</p>
                    <img src={logements.host.picture} alt="" />
                    <p>{logements.host.name}</p>
                </div>

                <div>
                    <article>
                        <h2>Description</h2>
                        <p>{logements.description}</p>
                    </article>
                    <article>
                        <h2>Équipements</h2>
                        <ul>
                        {logements.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                        </ul>
                    </article>
                </div>
            </section>
        </main>
    )
}