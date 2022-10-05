import "./portfolioList.scss";

const PortfolioList = ({ id, title, setSelected, active }) => {
	return (
		<li
			className={"portfolioList " + (active && "active")}
			onClick={() => setSelected(id)}
		>
			{title}
		</li>
	);
};

export default PortfolioList;
