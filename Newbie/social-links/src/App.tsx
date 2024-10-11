import avatar from "./assets/images/avatar-jessica.jpeg";

const socials = [
	{
		provider: "Github",
	},
	{
		provider: "Frontend Mentor",
	},
	{
		provider: "Linkedin",
	},
	{
		provider: "Twitter",
	},
	{
		provider: "Instagram",
	},
];

export default function App() {
	return (
		<main className="flex items-center justify-center min-h-screen text-white font-inter bg-grey-900">
			<section className="p-10 bg-grey-800 w-[430px] rounded-2xl space-y-7">
				<div className="flex flex-col items-center w-full gap-8">
					<img
						src={avatar}
						alt="avatar"
						className="rounded-full w-[100px] h-[100px]"
					/>
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold">Jessica Randall</h2>
						<h3 className="font-semibold font-bold text-green">
							London, United Kingdom
						</h3>
					</div>
					<p>"Front-end developer and avid reader."</p>
				</div>
				<div className="flex flex-col gap-4">
					{socials.map(({ provider }) => (
						<button className="w-full py-3 font-bold rounded-lg bg-grey-700">{provider}</button>
					))}
				</div>
			</section>
		</main>
	);
}
