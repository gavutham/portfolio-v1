import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

const Topbar = ({ setMenuOpen, menuOpen }) => {
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Dev.{"{"}G{"}"}
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+91 9789137382</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>dev.tonyrogers@gmailcom</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
