import cn from 'classnames';
import { ReactNode } from 'react';

export enum EColor {
	ORANGE = 'orange',
	PRIMARY = 'primary',
	TRANSPARENT = 'transparent',
}

interface IButton {
	color: EColor;
	children?: ReactNode;
}

export default function Button({ color, children = 'button' }: IButton) {
	return (
		<button
			className={cn(
				'px-[13px] py-[9px] rounded-lg text-code leading-[18px] duration-150 ease-in-out',
				{
					'bg-accent-orange text-primary-black border border-accent-orange hover:bg-[#FFAC6B]':
						color === 'orange',
					'bg-[#1C2B3A] text-secondary-white border border-[#1C2B3A] hover:bg-[#263B50]':
						color === 'primary',
					'bg-transparent text-primary-white border border-white hover:border-white/50':
						color === 'transparent',
				}
			)}
		>
			{children}
		</button>
	);
}
