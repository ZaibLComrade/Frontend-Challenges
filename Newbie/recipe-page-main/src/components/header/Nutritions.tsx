const nutritions = [
	{
		component: "Calories",
		value: "277kcal",
	},
	{
		component: "Carbs",
		value: "0g",
	},
	{
		component: "Protein",
		value: "20g",
	},
	{
		component: "Fat",
		value: "22g",
	},
];

export default function Nutritions() {
	return (
		<section className="space-y-4">
			<h2 className="text-3xl text-brown-800 font-young-serif">
				Nutrition
			</h2>
			<h3 className="text-stone-600">
				The table below shows nutritional values per serving without the
				additional fillings.
			</h3>

			<table className="w-full">
				{nutritions.map(({ component, value }, idx) => (
					<tr
						className={`${
							idx !== nutritions.length - 1 && "border-b"
						}`}
					>
						<td className="pl-7 text-stone-600 py-3">{component}</td>
						<td className="text-brown-800 font-bold pl-7">{value}</td>
					</tr>
				))}
			</table>
		</section>
	);
}
