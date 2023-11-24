import React from 'react';
import Image from 'next/image';
import ReactFillIcon from 'remixicon-react/ReactjsFillIcon';

import Button, { EColor } from './Button';
import exampleImg from '@/assets/preview/example.png';
import ProjectIcon, { EProjectIcon } from './ProjectIcon';

interface ICard {}

// bg-[#86E1F9] rounded-[2px] z-10 right-[17px] top-[17px] px-[3.7px] py-[3.7px] w-7 h-7 flex justify-center items-center

export default function Card({}: ICard) {
	return (
		<div className='rounded-lg w-[291px] sm:w-[370px] bg-primary-darker-blue overflow-hidden relative'>
			<ProjectIcon
				className='absolute rounded-[2px] right-[17px] top-[17px] px-[3.7px] py-[3.7px] flex justify-center items-center'
				technology={EProjectIcon.REACT}
			/>
			<div className='overflow-hidden h-[145px]'>
				<Image
					src={exampleImg}
					alt='img'
					className='w-full h-full origin-center object-cover object-[0%_-20px] sm:object-[0%_-65px]'
				/>
			</div>

			<div className='text-secondary-gray pl-[31px] mt-[29px] sm:mt-[24px] pb-[31.5px]'>
				<p className='text-lable sm:text-paragraph mb-[22px] max-w-[230px] sm:max-w-[305px] leading-[21px] sm:leading-[27px]'>
					Duis aute irure dolor in velit esse cillum dolore.
				</p>
				<Button color={EColor.PRIMARY}>view-project</Button>
			</div>
		</div>
	);
}
