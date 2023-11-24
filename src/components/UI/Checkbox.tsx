'use client';
import React, { useState } from 'react';
import { CheckIcon } from '@/assets/icons';
import cn from 'classnames';

interface ICheckbox {}

export default function Checkbox({}: ICheckbox) {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleToggle = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className={`block relative h-5 w-max ${isChecked ? 'checked' : ''} `}>
			<label className='cursor-pointer'>
				<input
					type='checkbox'
					className='w-[19px] h-[19px] bg-primary-dark-blue invisible'
					checked={isChecked}
					onChange={handleToggle}
				/>
				<span
					className={cn(
						'absolute top-0 left-0 h-[19px] w-[19px] border-[1px] rounded-sm border-secondary-gray accent-secondary-gray focus:outline-blue-500 focus:ring-blue-500',
						{
							'bg-secondary-gray': isChecked,
						}
					)}
				>
					{isChecked && <CheckIcon className='w-[18px] -mt-1' />}
				</span>
				{/* <p>{isChecked && <CheckIcon />}</p> */}
			</label>
		</div>
	);

	// return <button className='focus:ring-2 focus:ring-blue-500'>text</button>;
}

{
	/* <label htmlFor='' className='main'>
	<input type='text' />
	<span className='greekmark'></span>
</label>; */
}
