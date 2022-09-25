import { useState } from "react";
import chevronHaut from '../../../img/chevron-haut.png'
import chevronBas from '../../../img/chevron-bas.png'

export default function Toggle(props) {
    const [ setToggle, setToggleState ] = useState("");
    const [ setChevron, setChevronState ] = useState({chevronBas})

    function toggleActivation() {
        setToggleState(setToggle === "" ? "active" : "");

        setChevronState(setToggle === "active" ? {chevronBas} : {chevronHaut})
    }
    return(
        <section className={`details-toggle ${setToggle}`} onClick={toggleActivation}>
            <h2>{props.title} <span><img src={Object.values(setChevron)} alt={Object.values(setChevron)} /></span></h2>
            {props.content}
        </section>
    )
}