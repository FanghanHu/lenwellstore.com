import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Lenwell-Digital-Logo-No-BG.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavBar() {
	const navRef = useRef();
	useEffect(() => {
		//hide scrollbar when scrolling down, show it when scrolling back up
		let lastScroll = window.pageYOffset;
		const handleScroll = () => {
			console.log("scrolling??", scroll, lastScroll);
			const scroll = window.pageYOffset;

			if(lastScroll > scroll) {
				navRef.current.style.top="0";
			} else {
				navRef.current.style.top=  `-${navRef.current.clientHeight}px`;
			}

			lastScroll = scroll;
		};
		window.addEventListener("scroll", handleScroll);

		return window.removeEventListener("scroll", handleScroll);
	}, [])

	return (
		<div className="nav-bar" ref={navRef}>
            <Link to={{pathname: "/"}}>
                <img src={logo} alt="lenwell"/>
            </Link>
			<div className="nav-link-list">
				<Link to={{pathname: "/Repair Service"}}>Repair Service</Link>
				<Link to={{pathname: "/lcd-swap-service"}}>LCD Swap Service</Link>
				<Link to={{pathname: "/lcd-buyback"}}>LCD Buyback</Link>
				<Link to={{pathname: "/about-us"}}>About us</Link>
				<Link to={{pathname: "/contact-us"}}>Contact us</Link>
			</div>
		</div>
	);
}
