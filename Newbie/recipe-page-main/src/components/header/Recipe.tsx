export default function Recipe() {
	return (
		<section className="bg-rose-50 p-7 space-y-2 rounded-lg">
			<h2 className="text-rose-800 font-bold text-lg font-bold">
				Preparation time
			</h2>
			<ul className="list-disc pl-6 text-stone-600 space-y-2 list-outside">
				<li className="pl-3">
					<p>
						<b>Total:</b> Approximately 10 minutes
					</p>
				</li>
				<li className="pl-3">
					<p>
						<b>Preparation:</b> 5 minutes
					</p>
				</li>
				<li className="pl-3">
					<p>
						<b>Cooking:</b> 5 minutes
					</p>
				</li>
			</ul>
		</section>
	);
}
