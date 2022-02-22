export default function ScrollButton({ scrollTo, color }) {
	return (
		<a href={`#${scrollTo}`} style={{
            position: "absolute",
            bottom: "2rem",
            left: "calc(50% - 22px)"
        }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="44"
				height="9"
				viewBox="0 0 44.292 9.266"
			>
				<g
					id="Chevon_1"
					data-name="Chevon 1"
					transform="translate(1.266 1.266)"
				>
					<path
						id="Chevon_1-2"
						data-name="Chevon 1"
						d="M46.76,9,25.88,16,5,9"
						transform="translate(-5 -9)"
						fill="none"
						stroke={color}
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					/>
				</g>
			</svg>
		</a>
	);
}
