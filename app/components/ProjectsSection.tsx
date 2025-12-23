import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{[1].map((project) => (
						<div key={project} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-100 relative">
								<Image src={`/Screenshot 2025-12-22 224025.png`} alt={`Project ${project}`} fill className="object-cover" />
							</div>
							<div className="flex flex-wrap gap-4">
								{/* GitHub */}
								<a
									href="https://github.com/melissa-aoko/hireprep"
									target="_blank"
									rel="noopener noreferrer"
									className="text-grey-900 hover:text-blue-800 font-medium text-sm sm:text-base"
								>
									GitHub →
								</a>

								{/* Live Demo (future) */}
								<a
									href="#"
									className="text-gray-400 font-medium text-sm sm:text-base cursor-not-allowed"
								>
									Live Demo (Coming Soon)
								</a>
							</div>

						</div>
					))}
				</div>
			</div>
		</section>
	);
}
