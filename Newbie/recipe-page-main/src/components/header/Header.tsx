import omeletteImage from "../../assets/images/image-omelette.jpeg";

export default function Header() {
	return (
		<section>
			<img src={omeletteImage} alt="omelette" className="rounded-xl" />
			<div className="pt-7 space-y-4">
				<h1 className="font-young-serif text-stone-900 text-4xl ">
					Simple Omelette Recipe
				</h1>
				<p className="text-base text-stone-600">
					An easy and quick dish, perfect for any meal. This classic
					omelette combines beaten eggs cooked to perfection,
					optionally filled with your choice of cheese, vegetables, or
					meats.
				</p>
			</div>
		</section>
	);
}
