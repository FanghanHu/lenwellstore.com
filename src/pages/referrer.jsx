import { Link } from "react-router-dom";
import banner from "../assets/bg-home7.jpg";

export default function Referrer() {
	return (
		<div>
			<div
				className="background"
				style={{
					backgroundImage: `url(${banner})`,
					width: "100%",
					height: "350px",
				}}
			></div>
			<div className="container text-center">
				<div className="p-3">
					As a referrer, you can earn some extra money and enjoy a discounted
					price on all our services. The amount you can earn depends on your
					negotiation skills, the better you can bargain, the more you will
					earn.
				</div>
				<div className="h3 text-center mt-5 border-bottom p-1">
					How to start
				</div>
				<div className="p-3">
					Come to the store to set up your account and get an orientation.
				</div>
				<div
					className="mx-auto"
					style={{ height: "30px", width: "0", borderRight: "1px solid gray" }}
				></div>
				<div className="p-3">
					Go to the <Link to="/repair-service">price list</Link> and use your
					account number to figure out your costs
				</div>
				<div
					className="mx-auto"
					style={{ height: "30px", width: "0", borderRight: "1px solid gray" }}
				></div>
				<div className="p-3">
					Find customers and bargain for deals, the more customer you can find,
					the lower you cost will become
				</div>

				<div className="h5 mt-4">Direct a customer to the store</div>
				<div className="p-3">
					If you found a customer on the phone, or via internet, you may ask
					your customer to drop their device and pay us directly, you will get
					your earnings at the end of day via Paypal or CashApp.
				</div>
				<div className="p-3">
					To keep track of your customers you need to{" "}
					<Link to="/order-online">create a ticket</Link> for your customer,
					remember to enter your account, and the price your customer agreed on.
					give your customer the generated ticket number, and instruct them to
					show us the ticket number when they arrive at the store.
				</div>

				<div className="h5 mt-4">Deliver the device yourself</div>
				<div className="p-3">
					You can provide a better service by picking up the device from your
					customers and delivering it back after it is repaired.
				</div>
				<div className="p-3">
					In this case you do not need to create a ticket online, we will create
					the ticket for you when you drop off the device
				</div>
				<div className="text-center m-5">
					<div className="h5">Have a question?</div>
					<Link to="/contact-us" className="button button-primary px-3 py-1 h5">
						Contact us
					</Link>
				</div>
			</div>
		</div>
	);
}
