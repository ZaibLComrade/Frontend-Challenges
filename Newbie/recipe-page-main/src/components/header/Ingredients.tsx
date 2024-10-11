const ing = [
	"2-3 large eggs",
	"Salt, to taste",
	"Pepper, to taste",
	"1 tablespoon of butter or oil",
	"Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

export default function Ingredients() {
	return (
		<section className="space-y-4">
			<h2 className="text-brown-800 text-3xl font-young-serif">
				Ingredients
			</h2>
			<ul className="list-outside list-disc pl-5 font-normal space-y-2 text-stone-600">
				{ing.map((instruction) => (
					<li className="pl-3">
						<p>{instruction}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
