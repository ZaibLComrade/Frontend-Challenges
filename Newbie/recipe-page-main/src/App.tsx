import Header from "./components/header/Header";
import Ingredients from "./components/header/Ingredients";
import Instructions from "./components/header/Instructions";
import Nutritions from "./components/header/Nutritions";
import Recipe from "./components/header/Recipe";

export default function App() {
	return (
		<main className="bg-rose-50 font-outfit min-h-screen md:py-[100px] flex items-center justify-center">
			<section className="bg-white max-w-[700px] p-9 rounded-2xl space-y-7">
				<Header />
				<Recipe />
				<Ingredients />
				<hr />
				<Instructions />
				<hr />
				<Nutritions />
			</section>
		</main>
	);
}
