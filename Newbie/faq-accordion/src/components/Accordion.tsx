import { Fragment, useState } from "react";
import openIcon from "../assets/images/icon-plus.svg";
import closeIcon from "../assets/images/icon-minus.svg";
import { IFaq } from "../constants/faq";

type Props = {
	items: IFaq[];
};

export default function Accordion({ items = [] }: Props) {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<div className="">
			{items.map(({ title, content, id }, idx) => (
				<Fragment key={id}>
					<div
						className={`${
							idx === items.length - 1 && "pb-0"
						} group py-6`}
						onClick={() => setActiveItem(idx)}
					>
						<div className="flex items-center justify-between gap-4">
							<h2
								className={`text-lg font-bold text-dark-purple group-hover:text-active-pink`}
							>
								{title}
							</h2>
							<div className="min-w-[30px]">
								<img
									src={
										idx === activeItem
											? closeIcon
											: openIcon
									}
									height={30}
									width={30}
								/>
							</div>
						</div>
						<div
							className={`${
								idx !== activeItem
									? "opacity-0 grid-rows-[0fr]"
									: "opacity-100 pb-1 pt-3 grid-rows-[1fr]"
							} text-grayish-purple grid overflow-hidden transition-all duration-300`}
						>
							<p className="overflow-hidden">{content}</p>
						</div>
					</div>
					{idx !== items.length - 1 && <hr />}
				</Fragment>
			))}
		</div>
	);
}
