import logoFooter from '../img/logo-footer.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="Logo de Kasa pour le pied de page" />
            <p>© 2022 Kasa. All rights reserved</p>
        </footer>
    );
}