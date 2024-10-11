import cardImage from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

export default function App() {
	return (
		<main className="flex items-center justify-center px-6 font-figtree py-[50px] min-h-screen bg-yellow">
			<section className="bg-white shadow-custom p-6 border border-gray-950 space-y-6 rounded-[20px] w-[384px]">
				<div>
					<img
						src={cardImage}
						alt="card image"
						className="w-full rounded-[10px]"
					/>
				</div>
				<div className="space-y-3 text-gray-950">
					<p className="px-3 py-1 font-extrabold rounded w-max bg-yellow">
						Learning
					</p>
					<p>Published 21 Dec 2023</p>
					<h2 className="text-2xl font-extrabold hover:text-yellow">
						HTML & CSS foundations
					</h2>
					<p className="text-gray-500">
						These languages are the backbone of every website,
						defining structure, content, and presentation.
					</p>
				</div>
				<div className="flex items-center gap-3">
					<div>
						<img src={avatar} alt="avatar" className="w-8 h-8" />
					</div>
					<h3 className="font-extrabold">Greg Hooper</h3>
				</div>
			</section>
		</main>
	);
}
