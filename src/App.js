import "./App.css";
import "./dynamic-font-size.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us";
import Footer from "./component/footer";
import NavBar from "./component/navbar";
import NotFound from "./pages/not-found";
import ContactUs from "./pages/contact-us";
import LcdSwap from "./pages/lcd-swap";
import ScrollToTop from "./component/scroll-to-top";
import RepairService from "./pages/repair-service";
import ModelList from "./pages/model-list";

function App() {
	return (
		<div className="d-flex flex-column justify-content-between" style={{minHeight: "100vh"}}>
			<NavBar />
			<ScrollToTop/>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="contact-us" element={<ContactUs />} />
				<Route path="lcd-swap" element={<LcdSwap />} />
				<Route path="repair-service" element={<RepairService />}/>
				<Route path="repair-service/:deviceType" element={<ModelList />}/>
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
