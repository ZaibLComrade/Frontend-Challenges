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
			{items.map(({ title, content }, idx) => (
				<Fragment>
					<div
						className={`${
							idx === items.length - 1 && "pb-0"
						} group py-6`}
						onClick={() => setActiveItem(idx)}
					>
						<div className="flex items-center justify-between">
							<h2
								className={`text-lg font-bold text-dark-purple group-hover:text-active-pink`}
							>
								{title}
							</h2>
							<div>
								<img
									src={
										idx === activeItem
											? closeIcon
											: openIcon
									}
								/>
							</div>
						</div>
						<p
							className={`${
								idx !== activeItem && "hidden"
							} text-grayish-purple`}
						>
							{content}
						</p>
					</div>
					{idx !== items.length - 1 && <hr />}
				</Fragment>
			))}
		</div>
	);
}
