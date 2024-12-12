import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
	const projects = [
		{ title: "Kawaii to do list app", description: "To do list app" },
		{ title: "Budget app", description: "Fintech app" },
	];

	return (
		<div>
			<Header />
			<main>
				<h1>My Projects</h1>
				<div>
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}
