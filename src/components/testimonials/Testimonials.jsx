import "./testimonials.scss";

const Testimonials = () => {
	const data = [
		{
			id: 1,
			name: "----- ------",
			title: "***********************",
			img: "assets/nouser.png",
			icon: "assets/twitter.png",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 1,
			name: "Iyappan Annamalai",
			title: "Founder - EduTricks & Learn",
			img: "assets/iyyps.jpg",
			icon: "assets/youtube.png",
			desc: "I liked how user-friendly the website is. I would recommend this website design to anyone who is looking for the same. Thanks a lot!",
			featured: true,
		},
		{
			id: 1,
			name: "----- ------",
			title: "***********************",
			img: "assets/nouser.png",
			icon: "assets/linkedin.png",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	];

	return (
		<div id="testimonials" className="testimonial">
			<h1>Testimonials</h1>
			<div className="container">
				{data.map((d) => (
					<div className={d.featured ? "card featured" : "card"}>
						<div className="top">
							<img src="assets/right-arrow.png" alt="" className="left" />
							<img src={d.img} alt="" className="user" />
							<img src={d.icon} alt="" className="right" />
						</div>
						<div className="center">{d.desc}</div>
						<div className="bottom">
							<h3>{d.name}</h3>
							<h4>{d.title}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
