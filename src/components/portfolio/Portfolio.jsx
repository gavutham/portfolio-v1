import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, webPortfolio } from "../../data";

const Portfolio = () => {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	const list = [
		{ id: "featured", title: "Featured" },
		{ id: "web", title: "Web Apps" },
	];

	useEffect(() => {
		switch (selected) {
			case "featured":
				setData(featuredPortfolio);
				break;
			case "web":
				setData(webPortfolio);
				break;
			default:
				setData(webPortfolio);
		}
	}, [selected]);

	const redirect = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div id="portfolio" className="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map((i) => (
					<PortfolioList
						title={i.title}
						active={selected === i.id}
						setSelected={setSelected}
						id={i.id}
						key={i.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((d) => (
					<div
						className="item"
						key={d.id}
						onClick={() => d.link && redirect(d.link)}
					>
						<img src={d.img} alt="" />
						<h3>{d.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
