import "./style.css";
import { Link } from "react-router-dom";
import DirectionButton from "../../component/direction-button";

export default function AboutUs() {
    //TODO: make the business hour text change depends on the time of day
	return (
		<div>
			<div className="display-6 m-3 border-bottom w-fit-content">About us</div>
			<div className="h3 text-center mt-5 border-bottom p-1">
				Lenwell Houston Location
			</div>
			<div className="text-center m-4">
				<div className="text-muted">5750 Bintliff Dr Ste 210</div>
				<div className="text-muted">Houston, Texas, 77036</div>
				<div className="text-muted">(832) 275-5999</div>
			</div>
			<div className="m-5"></div>
			<div className="d-flex justify-content-center">
				<DirectionButton/>
			</div>
			<div className="h3 text-center mt-5 border-bottom p-1">
				Business Hours
			</div>
			<div className="m-4"></div>
			<div className="h5 text-center fw-light">
				We are OPEN now, <br />
				We close at 7:00pm today
			</div>
			<div className="mx-auto w-fit-content">
				<table className="business-hour my-4">
					<tbody>
						<tr>
							<td>Monday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Tuesday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Wednesday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Thursday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Friday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Saturday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Sunday:</td>
							<td>Closed</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-center m-5">
				<div className="h6">Have a question?</div>
				<Link to="/contact-us" className="button button-primary">
					Contact us
				</Link>
			</div>
		</div>
	);
}
