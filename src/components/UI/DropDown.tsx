'use client';

import { ArrowIcon } from '@/assets/icons';
import React from 'react';

interface IDropDown {
	title: string;
}

export default function DropDown({ title }: IDropDown) {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	return (
		<div className='flex flex-col'>
			<div
				className='flex gap-[11.08px] cursor-pointer select-none shadow-[0px_0px_0px_2px_#1E2D3D] py-2 pl-3'
				onClick={() => setIsOpen(!isOpen)}
			>
				<ArrowIcon className={!isOpen ? '-rotate-90' : ''} />
				<p>{title}</p>
			</div>
			<div className={`flex pl-5 pt-4 pb-7 ${isOpen ? 'block' : 'hidden'}`}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
					veniam accusantium
				</p>
			</div>
		</div>
	);
}
