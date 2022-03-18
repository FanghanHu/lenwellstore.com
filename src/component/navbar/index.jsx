import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Lenwell-Digital-Logo-No-BG.png";
import "./style.css";

export default function NavBar() {
	const navRef = useRef();
	useEffect(() => {
		//hide scrollbar when scrolling down, show it when scrolling back up
		let lastScroll = window.pageYOffset;
		const handleScroll = () => {
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
            <a href="/">
                <img src={logo} alt="lenwell"/>
            </a>
			<div className="nav-link-list">
				<a href="/about-us">About us</a>
				<a href="/contact-us">Contact us</a>
				<a href="/lcd-swap-service">LCD Swap Service</a>
				<a href="/lcd-buyback">LCD Buyback</a>
			</div>
		</div>
	);
}
