import '../../styles/Homepage/HomeSingleCard.css'
import React from 'react';
import { Link } from "react-router-dom"

export default function HomeSingleCard(props) {
    return (
        <Link to={"/logements/" + props.logement.id}>
            <article className="card" style={{backgroundImage:`url(${props.logement.pictures[0]})`}}>
                <div className="card-img-loca" ></div>
                <h2>{props.logement.title}</h2>
            </article>
        </Link>
    );
}