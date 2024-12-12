export default function ProjectCard({
	project,
}: {
	project: { title: string; description: string };
}) {
	return (
		<div>
			<h2>{project.title}</h2>
			<p>{project.description}</p>
		</div>
	);
}
