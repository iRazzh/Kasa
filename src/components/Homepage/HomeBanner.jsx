import imgBanner from '../../img/img-banner.jpg'
import '../../styles/Homepage/HomeBanner.css'

export default function Banner() {
    return (
        <section className="banner">
            <div>
                <img src={imgBanner} alt="Représentation d'une falaise" />
            </div>

            <p>Chez vous, partout et ailleurs</p>
        </section>
    );
}
  