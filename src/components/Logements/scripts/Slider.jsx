import chevronDroite from '../../../img/chevron-droite.png'
import chevronGauche from '../../../img/chevron-gauche.png'
import '../../../styles/Locations/scripts/Slider.css'
import { useState } from 'react'

export default function Slider(props) {
    const [slideIdx, setSlideIdx] = useState(0);
    const sliderLength = props.slider.length;

    const imgSize = () => {
        const slideshowImg = document.querySelector('.slider-container-img img');
        const noMoreImg = slideshowImg === null;
        const returnToStart = noMoreImg ? 0 : slideshowImg.width;
        return returnToStart;
    }

    const onNext = () => {
        const lastImg = slideIdx === sliderLength - 1;
        const thisIndex = lastImg ? 0 : slideIdx + 1;
        setSlideIdx(thisIndex);
    }

    const onPrev = () => {
        const firstImg = slideIdx === 0;
        const thisIndex = firstImg ? sliderLength - 1 : slideIdx - 1;
        setSlideIdx(thisIndex);
    }

    return(
        <section className="slider">
            {sliderLength === 1 ? null : <img src={chevronGauche} className="chevron-gauche" alt="Chevron pour slider à gauche" onClick={onPrev}/>}
            <div className="slider-container-img" style={{transform: `translateX(-${slideIdx * imgSize()}px)`}}>
                {props.slider.map((picture) => <img src={picture} key={picture} alt={picture}/>)}
            </div>
            {sliderLength === 1 ? null : <img src={chevronDroite} className="chevron-droite" alt="Chevron pour slider à droite" onClick={onNext}/>}
        </section>
    )

}