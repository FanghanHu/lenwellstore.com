import "./style.css";
import tile from "../../assets/tile.png"
import logo from "../../assets/Lenwell-Digital-Logo-No-BG.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="p-3" style={{backgroundImage: `url(${tile})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center d-flex flex-column justify-content-center" style={{borderRight:"1px solid gray"}}>
                        <Link to="/"><img src={logo} alt="lenwell" style={{width: "min(300px, 100%)"}} /></Link>
                        <div className="text-muted" style={{fontSize: "0.8em"}}>© All rights reserved</div>
                    </div>
                    <div className="col-6 py-4 px-3 px-md-5">
                        <ul className="list-unstyled">
                            <li><Link className="footer-link" to="/referrer">become a referrer</Link></li>
                            <li><Link className="footer-link" to="/contact-us">Contact us</Link></li>
                            <li><Link className="footer-link" to="/about-us">About us</Link></li>
                            <li><Link className="footer-link" to="/repair-service">Repair Service</Link></li>
                            <li><Link className="footer-link" to="/trademark-disclaimer">Trademark Disclaimer</Link></li>
                            <li><Link className="footer-link" to="/return-policy">Return Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-white h7 mt-3">
                    <div>5750 Bintliff Dr Ste 210, Houston, TX, 77036</div>
                    <div>(832) 275-5999 | online@lenwellscreen.com</div>
                </div>
            </div>
        </footer>
    )
}