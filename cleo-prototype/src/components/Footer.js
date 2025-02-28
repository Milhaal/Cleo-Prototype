import "./Footer.css";
import "./Root.css";

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <img className="footer-top-logo" src="/images/logo-cleo.png"></img>
                {/* <p className="footer-top-text"><b>Rejoignez les 1,5K abonnés</b> qui restent informés sur l'IA grâce à notre newsletter hebdomadaire gratuite.</p>
                <div className="footer-top-nl-box">
                    <input className="footer-top-nl-input" placeholder="Entrez votre email"></input>
                    <button className="footer-top-nl-button">S'inscrire</button>
                </div> */}
            </div>
            <div className="footer-bot">
                <p className="footer-bot-text">© 2025 Cleo. Tous droits réservés.</p>
                <div className="footer-bot-box">
                    <a className="footer-bot-link">Politique de confidentialité</a>
                    <a className="footer-bot-link">Condition Générale d’utilisation</a>

                </div>
            </div>
        </div>
    );
}

export default Footer;