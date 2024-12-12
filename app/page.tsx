import React from "react";

export default function HomePage() {
	return (
		<main style={styles.main}>
			{/* Header Section */}
			<header style={styles.header}>
				<h1 style={styles.heading}>Welcome to My Portfolio</h1>
				<p style={styles.subheading}>
					I'm Flavian, a passionate web developer!
				</p>
			</header>

			{/* About Section */}
			<section style={styles.section}>
				<h2>About Me</h2>
				<p>
					I'm a web developer specializing in modern JavaScript frameworks like
					React and Next.js. I love creating beautiful, functional websites.
				</p>
			</section>

			{/* Projects Section */}
			<section style={styles.section}>
				<h2>Projects</h2>
				<ul style={styles.list}>
					<li>Project 1: A Kawaii to do list app</li>
					<li>Project 2: A portfolio website</li>
					<li>Project 3: Working on a budgeting app</li>
				</ul>
			</section>

			{/* Contact Section */}
			<section style={styles.section}>
				<h2>Contact</h2>
				<p>Email: flav@dev.com</p>
				<p>Phone: 123-777-204</p>
			</section>
		</main>
	);
}

const styles = {
	main: {
		fontFamily: "Arial, sans-serif",
		margin: "0 auto",
		padding: "20px",
		maxWidth: "800px",
		lineHeight: "1.6",
	},
	header: {
		textAlign: "center",
		marginBottom: "40px",
	},
	heading: {
		fontSize: "2.5rem",
		color: "#333",
	},
	subheading: {
		fontSize: "1.2rem",
		color: "#666",
	},
	section: {
		marginBottom: "30px",
	},
	list: {
		listStyleType: "circle",
		paddingLeft: "20px",
	},
};
