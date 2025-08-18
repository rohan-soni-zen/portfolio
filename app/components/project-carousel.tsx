import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "~/components/ui/button";

interface Project {
	id: string;
	title: string;
	description: string;
	features: string[];
	techStack: string[];
	githubUrl: string;
	liveUrl?: string;
	image?: string;
}

interface ProjectCarouselProps {
	projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextProject = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === projects.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevProject = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	};

	const currentProject = projects[currentIndex];

	return (
		<div className="relative w-full max-w-4xl mx-auto">
			{/* Project Card */}
			<div className="bg-card border rounded-lg p-6 shadow-lg">
				<div className="flex items-start justify-between mb-4">
					<h3 className="text-2xl font-bold text-foreground">
						{currentProject.title}
					</h3>
					<div className="flex gap-2">
						<Button size="sm" variant="outline" asChild>
							<a
								href={currentProject.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2"
							>
								<Github className="h-4 w-4" />
								Code
							</a>
						</Button>
						{currentProject.liveUrl && (
							<Button size="sm" variant="outline" asChild>
								<a
									href={currentProject.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									<ExternalLink className="h-4 w-4" />
									Live
								</a>
							</Button>
						)}
					</div>
				</div>

				<p className="text-muted-foreground mb-6">
					{currentProject.description}
				</p>

				<div className="grid md:grid-cols-2 gap-6">
					<div>
						<h4 className="font-semibold text-foreground mb-3">
							Key Features
						</h4>
						<ul className="space-y-2">
							{currentProject.features.map((feature, index) => (
								<li
									key={index}
									className="flex items-start gap-2"
								>
									<span className="text-primary mt-1">•</span>
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-3">
							Tech Stack
						</h4>
						<div className="flex flex-wrap gap-2">
							{currentProject.techStack.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Navigation */}
			<div className="flex items-center justify-center gap-4 mt-6">
				<Button
					variant="outline"
					size="icon"
					onClick={prevProject}
					className="h-10 w-10"
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>

				<div className="flex gap-2">
					{projects.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 w-2 rounded-full transition-colors ${
								index === currentIndex
									? "bg-primary"
									: "bg-muted hover:bg-muted-foreground"
							}`}
						/>
					))}
				</div>

				<Button
					variant="outline"
					size="icon"
					onClick={nextProject}
					className="h-10 w-10"
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>

			{/* Project Counter */}
			<div className="text-center mt-4 text-sm text-muted-foreground">
				{currentIndex + 1} of {projects.length}
			</div>
		</div>
	);
}
