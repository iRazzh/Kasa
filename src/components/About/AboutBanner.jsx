import imgAboutBanner from '../../img/img-montagne.png'
import '../../styles/About/AboutBanner.css'

export default function AboutBanner() {

    return(
        <section className="about-banner">
            <div>
                <img src={imgAboutBanner} alt="Représentation d'une montagne" />
            </div>
        </section>
    )

}