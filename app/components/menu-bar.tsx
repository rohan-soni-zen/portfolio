import { motion } from "framer-motion";
import { Briefcase, Code, Globe, Mail } from "lucide-react";
import type * as React from "react";
import { useTheme } from "./theme-provider";

interface MenuItem {
	icon: React.ReactNode;
	label: string;
	href: string;
	gradient: string;
	iconColor: string;
}

const menuItems: MenuItem[] = [
	{
		icon: <Globe className="h-5 w-5" />, // About
		label: "About",
		href: "#about",
		gradient:
			"radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(14,165,233,0.06) 50%, rgba(2,132,199,0) 100%)",
		iconColor: "text-cyan-500",
	},
	{
		icon: <Briefcase className="h-5 w-5" />, // Projects
		label: "Projects",
		href: "#projects",
		gradient:
			"radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(139,92,246,0.06) 50%, rgba(109,40,217,0) 100%)",
		iconColor: "text-purple-500",
	},
	{
		icon: <Code className="h-5 w-5" />, // Skills
		label: "Skills",
		href: "#skills",
		gradient:
			"radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
		iconColor: "text-emerald-500",
	},
	{
		icon: <Mail className="h-5 w-5" />, // Contact
		label: "Contact",
		href: "#contact",
		gradient:
			"radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.06) 50%, rgba(202,138,4,0) 100%)",
		iconColor: "text-yellow-500",
	},
];

const itemVariants = {
	initial: { rotateX: 0, opacity: 1 },
	hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
	initial: { rotateX: 90, opacity: 0 },
	hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
	initial: { opacity: 0, scale: 0.8 },
	hover: {
		opacity: 1,
		scale: 2,
		transition: {
			duration: 0.5,
			ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
			type: "spring" as const,
			stiffness: 300,
			damping: 25,
		},
	},
};

const navGlowVariants = {
	initial: { opacity: 0 },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
		},
	},
};

const sharedTransition = {
	type: "spring" as const,
	stiffness: 100,
	damping: 20,
};

export function MenuBar() {
	const { theme } = useTheme();

	const isDarkTheme = theme === "dark";

	return (
		<motion.nav
			className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg relative overflow-hidden"
			initial="initial"
			whileHover="hover"
		>
			<motion.div
				className={`absolute -inset-2 bg-gradient-radial from-transparent ${
					isDarkTheme
						? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
						: "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
				} to-transparent rounded-3xl z-0 pointer-events-none`}
				variants={navGlowVariants}
			/>
			<ul className="flex items-center gap-2 relative z-10 overflow-scroll">
				{menuItems.map((item, index) => (
					<motion.li key={item.label} className="relative">
						<motion.div
							className="block rounded-xl group relative overflow-visible"
							style={{ perspective: "600px" }}
							whileHover="hover"
							initial="initial"
						>
							<motion.div
								className="absolute inset-0 z-0 pointer-events-none"
								variants={glowVariants}
								style={{
									background: item.gradient,
									opacity: 0,
									borderRadius: "16px",
								}}
							/>
							<motion.a
								href={item.href}
								className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
								variants={itemVariants}
								transition={sharedTransition}
								style={{
									transformStyle: "preserve-3d",
									transformOrigin: "center bottom",
								}}
							>
								<span
									className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
								>
									{item.icon}
								</span>
								<span>{item.label}</span>
							</motion.a>
							<motion.a
								href={item.href}
								className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
								variants={backVariants}
								transition={sharedTransition}
								style={{
									transformStyle: "preserve-3d",
									transformOrigin: "center top",
									rotateX: 90,
								}}
							>
								<span
									className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
								>
									{item.icon}
								</span>
								<span>{item.label}</span>
							</motion.a>
						</motion.div>
					</motion.li>
				))}
			</ul>
		</motion.nav>
	);
}
