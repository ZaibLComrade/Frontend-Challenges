import omeletteImage from "./assets/images/image-omelette.jpeg";

export default function App() {
	return (
		<main className="bg-rose-50 font-outfit min-h-screen p-10 flex items-center justify-center">
			<section className="bg-white max-w-[550px] p-7 rounded-2xl space-y-7">
				{/* header */}
				<section>
					<img
						src={omeletteImage}
						alt="omelette"
						className="rounded-xl"
					/>
					<div className="pt-7 space-y-4">
						<h1 className="font-young-serif text-stone-900 text-4xl">
							Simple Omelette Recipe
						</h1>
						<p className="text-base text-stone-600">
							An easy and quick dish, perfect for any meal. This
							classic omelette combines beaten eggs cooked to
							perfection, optionally filled with your choice of
							cheese, vegetables, or meats.
						</p>
					</div>
				</section>

				{/* recipe */}
				<section className="bg-rose-50 p-7 space-y-2 rounded-lg">
					<h2 className="text-rose-800 text-md font-bold">
						Preparation time
					</h2>
					<ul className="list-disc pl-5 text-sm text-stone-900 space-y-2 list-outside">
						<li className="pl-3">
							<b>Total:</b> Approximately 10 minutes
						</li>
						<li className="pl-3">
							<b>Preparation:</b> 5 minutes
						</li>
						<li className="pl-3">
							<b>Cooking:</b> 5 minutes
						</li>
					</ul>
				</section>
			</section>
		</main>
	);
}
