import logo from '../img/logo.png'
import '../styles/Header.css';
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <Link to="/"><img src={logo} alt="Logo de Kasa" /></Link>
            <nav>
                <Link to="/"><p>Accueil</p></Link>
                <Link to="/about"><p>A propos</p></Link>
            </nav>
        </header>
    )
}