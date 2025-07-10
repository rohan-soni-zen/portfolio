import { Mail, MoveRight } from "lucide-react";
import { MenuBar } from "~/components/menu-bar";
import { ThemeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
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
					<Button variant={"link"}>Contact Me</Button>
				</div>
				<div className="mt-2 flex gap-2">
					<Button size={"icon"} variant={"ghost"}>
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
					</Button>
					<Button size={"icon"} variant={"ghost"}>
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
					</Button>
					<Button size={"icon"} variant={"ghost"}>
						<Mail />
					</Button>
				</div>
			</div>
			<div id="about">
				<div className="text-3xl">About Me</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					euismod, urna eu tincidunt consectetur, nisi nisl aliquam
					enim, eget facilisis quam felis id mauris. Pellentesque
					habitant morbi tristique senectus et netus et malesuada
					fames ac turpis egestas.
				</div>
			</div>
			<div id="projects" className="mt-16">
				<div className="text-3xl">Projects</div>
				<div>
					Here are some of the projects I have worked on. Integer nec
					odio. Praesent libero. Sed cursus ante dapibus diam.
					Suspendisse potenti. Morbi mattis ullamcorper velit.
					Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae.
				</div>
			</div>
			<div id="skills" className="mt-16">
				<div className="text-3xl">Skills</div>
				<div>
					Here are some of the skills I have acquired. Proin gravida
					dolor sit amet lacus accumsan et viverra justo commodo.
					Proin sodales pulvinar tempor. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus.
				</div>
			</div>
			<div id="contact" className="mt-16">
				<div className="text-3xl">Contact</div>
				<div>
					Feel free to reach out to me for collaborations or just a
					friendly hello! Phasellus viverra nulla ut metus varius
					laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
					nisi vel augue.
				</div>
			</div>
		</div>
	);
}
