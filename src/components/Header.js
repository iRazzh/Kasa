import logo from '../img/logo.png'
import '../styles/Header.css';

export default function Header() {
    return(
        <header>
            <img src={logo} alt="Logo de Kasa" />
            <nav>
                <p>Accueil</p>
                <p>A propos</p>
            </nav>
        </header>
    )
}