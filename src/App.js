import "./App.css";
import "./dynamic-font-size.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us";
import Footer from "./component/footer";
import NavBar from "./component/navbar";
import NotFound from "./pages/not-found";

function App() {
	return (
		<div className="d-flex flex-column justify-content-between" style={{minHeight: "100vh"}}>
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
