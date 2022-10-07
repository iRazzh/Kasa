import '../../../styles/Locations/scripts/Descriptions.css'

export default function Descriptions(props) {
    return(
        <section>
            <h1 className="details-title">{props.logements.title}</h1>
            <p className="details-location">{props.logements.location}</p>
        </section>
    )
}