import starIcon from "./assets/images/icon-star.svg";
import Accordion from "./components/Accordion";
import faqs from "./constants/faq";

export default function App() {


	return (
		<main className="bg-light-pink bg-[url('./assets/images/background-pattern-desktop.svg')] bg-no-repeat bg-top min-h-screen font-worksans flex justify-center items-center">
			<section className="w-[600px] p-10 bg-white space-y-8 rounded-3xl">
				<div className="flex items-center gap-6">
					<img
						src={starIcon}
						height={50}
						width={50}
						alt="Star Icon"
					/>
					<h1 className="text-6xl font-bold text-dark-purple">FAQs</h1>
				</div>
				<div>
					<Accordion items={ faqs }/>
				</div>
			</section>
		</main>
	);
}
