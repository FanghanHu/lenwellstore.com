import homeBackGround from "../../assets/bg-home.jpg";
import logo from "../../assets/Lenwell-Digital-Logo-No-BG.png";
import Counter from "../../component/counter";
import ScrollButton from "../../component/scroll-button";

export default function Page1() {
    return (
        <div
				className="vh-100 background position-relative text-center segoe"
				style={{ backgroundImage: `url(${homeBackGround})` }}
			>
				<div className="d-flex flex-column justify-content-around h-100">
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img className="my-5 logo-white" src={logo} alt="lenwell" />
						<div>
							<div className="text-white text-shadow header3">
								Cellphone, Tablets, Smart Watch
							</div>
							<div className="text-white text-shadow header2">
								Repair Service and Parts Provider
							</div>
						</div>
					</div>

					<div className="text-white">
						<div className="header1">
							<Counter startNumber={10000} endNumber={35000} duration={3000} />+
						</div>
						<div className="header3 mt-1">
							<div>Devices Serviced</div>
							<div>Since 2015</div>
						</div>
					</div>
				</div>
				<ScrollButton scrollTo="page2" color="#fff" />
			</div>
    );
}