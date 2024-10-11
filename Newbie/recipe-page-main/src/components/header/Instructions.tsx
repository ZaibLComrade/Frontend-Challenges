const instructions = [
	{
		title: "Beat the eggs",
		text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
	},
	{
		title: "Heat the pan",
		text: "Place a non-stick frying pan over medium heat and add butter or oil.",
	},
	{
		title: "Cook the omelette",
		text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
	},
	{
		title: "Add fillings (optional)",
		text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
	},
	{
		title: "Fold and serve",
		text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
	},
	{
		title: "Enjoy",
		text: "Serve hot, with additional salt and pepper if needed.",
	},
];

export default function Instructions() {
	return (
		<section className="space-y-4">
			<h2 className="text-brown-800 text-3xl font-young-serif">
				Instructions
			</h2>

			<ol className="space-y-2 list-decimal ml-6 list-outside text-brown-800">
				{instructions.map(({ text, title }) => (
					<li className="font-bold pl-5">
						<article className="text-stone-600">
							<span>
								<b>{title}: </b>
							</span>

							<span className="font-normal">{text}</span>
						</article>
					</li>
				))}
			</ol>
		</section>
	);
}
