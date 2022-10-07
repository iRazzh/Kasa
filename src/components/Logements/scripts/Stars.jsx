import fullStar from '../../../img/full-star.png'
import emptyStar from '../../../img/empty-star.png'
import '../../../styles/Locations/scripts/Stars.css'

export default function Stars(props) {

    return(
        <div className="stars">
            {/* Array from permet de générer une séquences de nombres donc ça va donner pour 3 étoiles = [0, 1, 2]*/}
            {console.log(Array.from({length: props.rating}, (v, idx) => idx))}
            {Array.from({length: props.rating}, (v, idx) => <img key={'full-' + idx} src={fullStar} alt="" />)}
            {/* Condition pour éviter un effort de calcul (if != 5 étoiles donc ...) */}
            {Array.from({length: 5 - props.rating}, (v, idx) => <img key={'empty-' + idx} src={emptyStar} alt="" />)}
        </div>
    )
}