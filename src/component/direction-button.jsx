import tag from "../assets/google-maps.png";

export default function DirectionButton() {
	return (
		<a
			className="btn btn-dark direction-button"
			href={`https://goo.gl/maps/NYGrZTB8EGiRn8ug7`}
		>
			<img src={tag} alt="direction" />
			Direction
		</a>
	);
}
