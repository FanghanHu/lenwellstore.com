import "./style.css";
import tile from "../../assets/tile.png"
import logo from "../../assets/Lenwell-Digital-Logo-No-BG.png";

export default function Footer() {
    return (
        <footer className="p-3" style={{backgroundImage: `url(${tile})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center d-flex flex-column justify-content-center" style={{borderRight:"1px solid gray"}}>
                        <a href="/"><img src={logo} alt="lenwell" style={{width: "min(300px, 100%)"}} /></a>
                        <div className="text-muted" style={{fontSize: "0.8em"}}>© All rights reserved</div>
                    </div>
                    <div className="col-6 py-4 px-3 px-md-5">
                        <ul className="list-unstyled">
                            <li><a className="footer-link" href="/contact-us">Contact us</a></li>
                            <li><a className="footer-link" href="/about-us">About us</a></li>
                            <li><a className="footer-link" href="/repair-service">Repair Service</a></li>
                            <li><a className="footer-link" href="/trademark-disclaimer">Trademark Disclaimer</a></li>
                            <li><a className="footer-link" href="/return-policy">Return Policy</a></li>
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