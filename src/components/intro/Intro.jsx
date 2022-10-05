import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			strings: ["Developer", "Designer", "Programmer"],
			backDelay: 1500,
			backSpeed: 60,
		});
	}, []);

	return (
		<div id="intro" className="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/profile.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hola! It's</h2>
					<h1>Gavutham</h1>
					<h3>
						Freelance <span ref={textRef}></span>
					</h3>
					<a href="#portfolio">
						<img src="assets/down.png" alt="" className="portfolioButton" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
