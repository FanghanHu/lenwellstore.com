import ipads from "../../assets/iPads.jpg";
import samsung from "../../assets/samsung.jpg";
import ebay from "../../assets/ebay.png";
import amazon from "../../assets/amazon.png";

export default function Page3() {
	return (
		<div className="segoe">
			<div className="text-center my-5">
				<div className="display-6 fw-bold mb-3">Original Replacement Parts</div>
				<div className="h6 fw-light m-1">iPhone, iPad, Apple Watch LCD</div>
				<div className="h6 fw-light m-1 mt-0">Samsung LCD</div>
			</div>
			<div className="container" style={{ marginBottom: "-10px", zIndex: -1}}>
				<div className="row justify-content-between align-items-end">
					<div className="col-7 col-lg-6">
						<img src={ipads} alt="ipads" width="100%" />
					</div>
					<div className="col-4 col-lg-3">
						<img src={samsung} alt="samsung" width="100%" />
					</div>
				</div>
			</div>
			<div className="py-5 px-2 text-white position-relative" style={{ backgroundColor: "#4778FF"}}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 d-flex flex-column justify-content-center">
							<div className="display-5 text-center my-3 fw-bold">Quality OEM Parts</div>
						</div>
						<div className="col-12 col-md-6 my-3">
							<ul className="list-unstyled h4 md-h1 fw-light text-nowrap">
								<li>✓ Genuine screen</li>
								<li>✓ Ship from Texas</li>
								<li>✓ 2 to 3 days to most US city</li>
								<li>✓ Thoroughly tested</li>
								<li>✓ 30 days satisfaction guarantee</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center m-4">
				<div className="display-6 fw-bold me-4">Shop Online:</div>
				<div>
					<img className="ecommerce-icon" src={ebay} alt="eBay" />
					<hr/>
					<img className="ecommerce-icon" src={amazon} alt="amazon" />
				</div>
			</div>
		</div>
	);
}
