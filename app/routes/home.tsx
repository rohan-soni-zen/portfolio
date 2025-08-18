import { Mail, MoveRight } from "lucide-react";
import { MenuBar } from "~/components/menu-bar";
import { ThemeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import { ProjectCarousel } from "~/components/project-carousel";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Rohan Sony" },
		{ name: "description", content: "Welcome to my page!" },
	];
}

export default function Home() {
	return (
		<div className="w-screen min-h-screen bg-background px-8 pb-52">
			<div
				id="#"
				className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-md"
			>
				<div className="flex flex-row items-center justify-around lg:justify-between h-16 px-8">
					<a className="text-2xl font-extralight" href="/">
						rohan sony
					</a>
					<div className="hidden lg:block">
						<MenuBar />
					</div>
					<ThemeToggle />
				</div>
				<div className="flex justify-center items-center lg:hidden border-t border-border/30 bg-white/80 dark:bg-background/80 backdrop-blur-md">
					<MenuBar />
				</div>
			</div>
			<div className="pt-40 lg:pt-24 px-8 h-dvh flex flex-col justify-center">
				<div className="text-4xl md:text-6xl lg:text-9xl font-extrabold">
					Rohan Sony
				</div>
				<div>Mathematics and Computing, M.Tech.</div>
				<div>
					<a
						href="https://www.iitism.ac.in/"
						target="_blank"
						rel="noopener noreferrer"
						className="group"
					>
						IIT (ISM) Dhanbad
						<MoveRight className="hidden group-hover:inline-block ml-2 align-middle" />
					</a>
				</div>
				<div className="mt-8 flex gap-4">
					<Button variant={"outline"}>View Resume</Button>
					<Button variant={"link"} asChild>
						<a href="#contact">Contact Me</a>
					</Button>
				</div>
				<div className="mt-2 flex gap-2">
					<Button size={"icon"} variant={"ghost"} asChild>
						<a
							href="https://github.com/rohan-soni-zen"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub Profile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="lucide lucide-github-icon lucide-github"
							>
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
								<path d="M9 18c-4.51 2-5-2-7-2" />
							</svg>
						</a>
					</Button>
					<Button size={"icon"} variant={"ghost"} asChild>
						<a
							href="https://www.linkedin.com/in/rohan-kumar-sony-8526a6255/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn Profile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="lucide lucide-linkedin-icon lucide-linkedin"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect width="4" height="12" x="2" y="9" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</a>
					</Button>
					<Button size={"icon"} variant={"ghost"} asChild>
						<a
							href="mailto:22je0818@iitism.ac.in"
							aria-label="Send Email"
						>
							<Mail />
						</a>
					</Button>
				</div>
			</div>
			<div id="about" className="scroll-mt-24">
				<div className="text-3xl">About Me</div>
				<div>
					I'm Rohan Sony, a 4th year undergraduate student at IIT
					(ISM) Dhanbad, pursuing my major in Mathematics and
					Computing. My passion lies in programming, with a particular
					focus on problem solving and building innovative solutions.
					I love tackling complex challenges and creating software
					that makes a difference.
				</div>
			</div>
			<div id="projects" className="mt-16 scroll-mt-24">
				<div className="text-3xl mb-8">Projects</div>
				<ProjectCarousel
					projects={[
						{
							id: "short-url",
							title: "Short URL Service",
							description:
								"A modern, production-ready URL shortening service featuring real-time analytics, user authentication, and a beautiful dashboard. Built with React 19, Node.js, and TypeORM for scalable URL management.",
							features: [
								"Custom alias support with automatic generation",
								"JWT-based user authentication & registration",
								"Real-time click analytics & statistics",
								"Interactive dashboard with charts & tables",
								"TypeORM with SQLite database",
								"Responsive design with dark/light themes",
								"React Query for state management",
								"Form validation with React Hook Form & Zod",
							],
							techStack: [
								"React 19",
								"TypeScript",
								"Node.js",
								"Express",
								"TypeORM",
								"SQLite",
								"Tailwind CSS",
								"Recharts",
								"React Query",
							],
							githubUrl:
								"https://github.com/rohan-soni-zen/short-url",
							liveUrl: "https://rohan-sony-short-url.vercel.app/",
						},
						{
							id: "self-driving-car-ann",
							title: "Self-Driving Car AI Simulation",
							description:
								"An interactive neural network simulation where 100 AI cars learn to drive autonomously using genetic algorithms and sensor-based navigation. Features real-time neural network visualization and evolutionary learning.",
							features: [
								"100 AI cars learning simultaneously",
								"Neural network with 4-layer architecture",
								"Ray-based sensor system for obstacle detection",
								"Genetic algorithm with mutation-based evolution",
								"Real-time neural network visualization",
								"Interactive save/load brain functionality",
								"Traffic simulation with obstacle avoidance",
								"Canvas-based 2D driving simulation",
							],
							techStack: [
								"JavaScript (ES6+)",
								"HTML5 Canvas",
								"CSS3",
								"Neural Networks",
								"Genetic Algorithms",
								"Computer Vision",
								"Game Physics",
								"Object-Oriented Programming",
							],
							githubUrl:
								"https://github.com/rohan-soni-zen/self-driving-car-ann",
							liveUrl: "https://self-driving-car-ann.vercel.app/",
						},
						{
							id: "weather-app-expo",
							title: "Weather App (React Native)",
							description:
								"A feature-rich cross-platform weather application built with React Native and Expo. Features real-time weather data, location management, time-based themes, and comprehensive weather analytics with a modern mobile-first design.",
							features: [
								"Real-time weather data from OpenWeatherMap API",
								"GPS location detection with permission handling",
								"Multiple location management & search",
								"Time-based dynamic themes (day/night)",
								"Comprehensive weather metrics (UV, humidity, wind)",
								"Cross-platform (iOS, Android, Web)",
								"Offline location storage with AsyncStorage",
								"Responsive design with React Native Paper UI",
								"Unit conversion (Celsius/Fahrenheit)",
								"24-hour weather forecasting",
							],
							techStack: [
								"React Native",
								"Expo",
								"TypeScript",
								"React Query",
								"React Native Paper",
								"AsyncStorage",
								"Expo Location",
								"OpenWeatherMap API",
							],
							githubUrl:
								"https://github.com/rohan-soni-zen/weather-app-expo",
							liveUrl:
								"https://rohan-soni-zen-weather-app.vercel.app",
						},
					]}
				/>
			</div>
			<div id="skills" className="mt-16 scroll-mt-24">
				<div className="text-3xl mb-8">Skills</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Frontend Development */}
					<div className="space-y-4">
						<h4 className="text-xl font-semibold text-foreground">
							Frontend Development
						</h4>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>React 19 & React Native</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>TypeScript</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>HTML5 Canvas & Web APIs</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Responsive Design</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Tailwind CSS</span>
							</div>
						</div>
					</div>

					{/* Backend & Database */}
					<div className="space-y-4">
						<h4 className="text-xl font-semibold text-foreground">
							Backend & Database
						</h4>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Node.js & Express</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>TypeORM & SQLite</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>JWT Authentication</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>RESTful APIs</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Data Validation</span>
							</div>
						</div>
					</div>

					{/* AI & Machine Learning */}
					<div className="space-y-4">
						<h4 className="text-xl font-semibold text-foreground">
							AI & Machine Learning
						</h4>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Neural Networks</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Genetic Algorithms</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Computer Vision</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Game Physics</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Algorithm Design</span>
							</div>
						</div>
					</div>

					{/* Mobile Development */}
					<div className="space-y-4">
						<h4 className="text-xl font-semibold text-foreground">
							Mobile Development
						</h4>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Expo Framework</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Cross-platform Apps</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Location Services</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Native APIs Integration</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Offline Storage</span>
							</div>
						</div>
					</div>

					{/* State Management & Tools */}
					<div className="space-y-4">
						<h4 className="text-xl font-semibold text-foreground">
							State Management & Tools
						</h4>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>React Query</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Context API</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>AsyncStorage</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Form Validation</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Git & Version Control</span>
							</div>
						</div>
					</div>

					{/* Deployment & DevOps */}
					<div className="space-y-4">
						<h4 className="text-xl font-semibold text-foreground">
							Deployment & DevOps
						</h4>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Vercel Deployment</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Docker</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>CI/CD Pipelines</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Environment Management</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-primary rounded-full"></span>
								<span>Performance Optimization</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="contact" className="mt-16 scroll-mt-24">
				<div className="text-3xl mb-8">Contact</div>
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-8">
						<p className="text-lg text-muted-foreground mb-6">
							Feel free to reach out to me for collaborations,
							project discussions, or just a friendly hello! I'm
							always open to new opportunities and interesting
							conversations.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Contact Information */}
						<div className="space-y-6">
							<h4 className="text-xl font-semibold text-foreground">
								Get in Touch
							</h4>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Mail className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">Email</p>
										<a
											href="mailto:22je0818@iitism.ac.in"
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											22je0818@iitism.ac.in
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-primary"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
										<path d="M9 18c-4.51 2-5-2-7-2" />
									</svg>
									<div>
										<p className="font-medium">GitHub</p>
										<a
											href="https://github.com/rohan-soni-zen"
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											@rohan-soni-zen
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-primary"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
										<rect
											width="4"
											height="12"
											x="2"
											y="9"
										/>
										<circle cx="4" cy="4" r="2" />
									</svg>
									<div>
										<p className="font-medium">LinkedIn</p>
										<a
											href="https://www.linkedin.com/in/rohan-kumar-sony-8526a6255/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											Rohan Kumar Sony
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-primary"
									>
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
									</svg>
									<div>
										<p className="font-medium">Education</p>
										<a
											href="https://www.iitism.ac.in/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											IIT (ISM) Dhanbad
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="space-y-6">
							<h4 className="text-xl font-semibold text-foreground">
								Quick Actions
							</h4>

							<div className="space-y-4">
								<Button
									variant="outline"
									className="w-full justify-start"
									asChild
								>
									<a
										href="mailto:22je0818@iitism.ac.in?subject=Portfolio%20Inquiry"
										className="flex items-center gap-2"
									>
										<Mail className="h-4 w-4" />
										Send Email
									</a>
								</Button>

								<Button
									variant="outline"
									className="w-full justify-start"
									asChild
								>
									<a
										href="https://github.com/rohan-soni-zen"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
											<path d="M9 18c-4.51 2-5-2-7-2" />
										</svg>
										View GitHub Profile
									</a>
								</Button>

								<Button
									variant="outline"
									className="w-full justify-start"
									asChild
								>
									<a
										href="https://www.linkedin.com/in/rohan-kumar-sony-8526a6255/"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
											<rect
												width="4"
												height="12"
												x="2"
												y="9"
											/>
											<circle cx="4" cy="4" r="2" />
										</svg>
										Connect on LinkedIn
									</a>
								</Button>

								<Button
									variant="outline"
									className="w-full justify-start"
									asChild
								>
									<a
										href="#projects"
										className="flex items-center gap-2"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M9 11H1l8-8v6a4 4 0 0 0 4 4h6l-8 8v-6a4 4 0 0 0-4-4z" />
										</svg>
										View Projects
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<p className="text-sm text-muted-foreground">
							I'm currently open to new opportunities and
							collaborations. Feel free to reach out for any
							inquiries!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
