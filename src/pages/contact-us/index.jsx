import "./style.css";
import banner from "../../assets/bg-home5.jpg";
import GlassPanel from "../../component/glass-panel";
import DirectionButton from "../../component/direction-button";

export default function ContactUs() {
    return (
        <div>
            <div className="display-6 m-3 border-bottom w-fit-content">Contact Us</div>
            <div className="background w-100 px-1 pt-3 pb-4 p-md-5" style={{backgroundImage: `url(${banner})`}}>
                <GlassPanel className="text-white w-fit-content p-2 px-4 mx-auto my-3" style={{background: "rgba(0,0,0,0.2)"}}>
                    <div className="fw-bold">Houston Service Center:</div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="fw-light fs-sm">
                            (832) 275-5999 <br/>
                            5750 Bintliff Dr #210 <br/>
                            Houston, TX, 77036 <br/>
                        </div>
                        <div className="mx-3">
                            <DirectionButton/>
                        </div>
                    </div>
                </GlassPanel>
                <div className="d-flex w-100 justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13860.093175610526!2d-95.5114637!3d29.7190845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70f078b1578fd46e!2sLenwell%20Digital!5e0!3m2!1sen!2sus!4v1647637205096!5m2!1sen!2sus" height="300" style={{border:0, width: "max(350px, min(60%, 700px))"}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="text-center h5 pt-5">Leave a message:</div>
            <div className="mx-auto mb-4" style={{width: "max(350px, min(60%, 700px))"}}>
                <div className="mb-3">
                    <label className="form-label fw-light">Email:</label>
                    <input type="email" className="form-control" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message: </label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="button button-primary">Send</div>
                </div>
            </div>
        </div>
    );
} 