import { Link } from "react-router-dom"
import '../../styles/404/NoResultMain.css'

export default function NoResultMain() {
    return (
        <main className="no-result-page">
            <h1 className="no-result-title">404</h1>
            <p className="no-result-oups">Oups ! La page que vous demandez n'existe pas.</p>
            <p><Link to="/">Retourner sur la page d'accueil</Link></p>
        </main>
    )
}