import Image from 'next/image';

export default function ProjectsSection() {
	// Projects array
	const projects = [
		{
			id: 1,
			title: "HirePrep",
			image: "/Screenshot 2025-12-22 224025.png",
			github: "https://github.com/melissa-aoko/hireprep",
			live: null,
			tech: "React, Next.js, AI, Voice",
			description: "AI-powered voice interview assistant that simulates real technical and behavioral interviews. Provides feedback to improve communication clarity and confidence."
		},
		{
			id: 2,
			title: "Tetris Game",
			image: "/tetris.jpg", // add your Tetris screenshot in /public
			github: "https://github.com/melissa-aoko/Tetris-game",
			live: null,
			tech: "Python, Pygame, Game Logic",
			description: "Classic Tetris game built in Python using Pygame. Features random block generation, scoring, and collision detection."
		},
		{
			id: 3,
			title: "Java Calculator",
			image: "/calculator.jpg", // add a screenshot of your calculator in /public
			github: "https://github.com/melissa-aoko/JavaCalculator",
			live: null,
			tech: "Java, OOP, Console App",
			description: "A console-based Java calculator demonstrating object-oriented programming, user input handling, and basic arithmetic operations."
		},
		{
  			id: 4,
  			title: "Medical Chatbot",
  			image: "/medibot.png",
  			github: "https://github.com/melissa-aoko/Medical-Chatbot",
  			live: "https://www.youtube.com/watch?v=ydnj-iznw7c", // <-- link to your demo video
  			tech: "Python, LangChain, AI, NLP",
  			description: "A chatbot that answers medical questions using AI. Features conversation history and context-aware responses."
		}


	];

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							{/* Project Image */}
							<div className="aspect-video bg-gray-100 relative">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
								/>
							</div>

							{/* Project Content */}
							<div className="p-4">
								<h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
								<p className="text-sm text-gray-600 mt-1">{project.tech}</p>
								<p className="text-sm text-gray-600 mt-2">{project.description}</p>

								<div className="flex flex-wrap gap-4 mt-4">
									{/* GitHub */}
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-900 hover:text-blue-800 font-medium text-sm sm:text-base"
									>
										GitHub →
									</a>

									{/* Live Demo */}
									{project.live ? (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-900 hover:text-green-700 font-medium text-sm sm:text-base"
										>
											Live Demo →
										</a>
									) : (
										<span className="text-gray-400 font-medium text-sm sm:text-base cursor-not-allowed">
                      Live Demo (Coming Soon)
                    </span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
