import { ReactjsIcon, CssIcon, HtmlIcon, VuejsIcon } from '@/assets/icons';
import cn from 'classnames';
import React from 'react';

export enum EProjectIcon {
	REACT = 'react',
	CSS = 'css',
	HTML = 'html',
	VUE = 'vue',
}

interface IProjectIcon {
	technology: EProjectIcon;
	className?: string;
}

export default function ProjectIcon({ technology, className }: IProjectIcon) {
	const simulateSwitch = (type: EProjectIcon) => {
		switch (technology) {
			case EProjectIcon.REACT:
				return (
					<ReactjsIcon className='text-primary-darker-blue w-[20px] h-[20px]' />
				);
			case EProjectIcon.VUE:
				return (
					<VuejsIcon className='text-primary-darker-blue w-[20px] h-[20px]' />
				);
			case EProjectIcon.CSS:
				return (
					<CssIcon className='text-primary-darker-blue w-[20px] h-[20px]' />
				);
			case EProjectIcon.HTML:
				return (
					<HtmlIcon className='text-primary-darker-blue w-[20px] h-[20px]' />
				);
		}
	};
	return (
		<div
			className={cn(className, {
				'bg-[#86E1F9]': technology === 'react',
				'bg-[#81D4AF]': technology === 'vue',
				'bg-[#95D6F0]': technology === 'css',
				'bg-[#FFA67E]': technology === 'html',
			})}
		>
			{simulateSwitch(technology)}
		</div>
	);
}
