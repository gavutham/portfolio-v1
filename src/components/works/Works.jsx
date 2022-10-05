import { useState } from "react";
import "./works.scss";

const Works = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const data = [
		{
			id: 1,
			icon: "./assets/mobile.png",
			title: "Web Design",
			desc: "I can create awesome websites for your business with latest frameworks.",
			img: "./assets/edutricks.png",
		},
		{
			id: 2,
			icon: "./assets/writing.png",
			title: "App Development",
			desc: "I can even do small scale pc software development with python.",
			img: "./assets/pass.png",
		},
	];

	const handleClick = (side) => {
		if (side === "l") {
			setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1);
		} else if (side === "r") {
			setCurrentSlide(currentSlide < 1 ? currentSlide + 1 : 0);
		}
	};

	return (
		<div id="works" className="works">
			<div
				className="slider"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{data.map((d) => (
					<div key={d.id} className="container">
						<div className="item">
							<div className="left">
								<div className="leftContainer">
									<div className="imgContainer">
										<img src={d.icon} alt="" />
									</div>
									<h2>{d.title}</h2>
									<p>{d.desc}</p>
									<span>Projects</span>
								</div>
							</div>
							<div className="right">
								<img src={d.img} alt="" />
							</div>
						</div>
					</div>
				))}
			</div>
			<img
				src="assets/arrow.png"
				alt=""
				className="arrow left"
				onClick={() => handleClick("l")}
			/>
			<img
				src="assets/arrow.png"
				alt=""
				className="arrow right"
				onClick={() => handleClick("r")}
			/>
		</div>
	);
};

export default Works;
