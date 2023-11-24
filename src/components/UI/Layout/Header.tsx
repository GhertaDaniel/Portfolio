'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IHeader {}

export default function Header({}: IHeader) {
	const pathname = usePathname();

	return (
		<header className='h-14'>
			<ul className='h-14 grid grid-cols-header items-center border-lines text-lable text-secondary-gray'>
				<li className='flex items-center border-lines border-r-2 h-full pl-5 border-b-2'>
					gherta-daniel
				</li>
				<Link
					href='/'
					className={`flex items-center justify-center border-r-lines border-r-2 h-full text-center border-b-2 ${
						pathname === '/'
							? 'text-white border-b-2 border-accent-orange'
							: 'border-b-lines'
					}`}
				>
					_hello
				</Link>
				<Link
					href='/about'
					className={`flex items-center justify-center border-r-lines border-r-2 h-full text-center border-b-2 ${
						pathname === '/about'
							? 'text-white border-b-2 border-accent-orange'
							: 'border-b-lines'
					}`}
				>
					_about-me
				</Link>
				<Link
					href='/projects'
					className={`flex items-center justify-center border-r-lines border-r-2 h-full text-center border-b-2 ${
						pathname === '/projects'
							? 'text-white border-b-2 border-accent-orange'
							: 'border-b-lines'
					}`}
				>
					_projects
				</Link>
				<li className='border-b-2 border-lines h-full'></li>
				<Link
					href='/contact-me'
					className={`flex items-center justify-center border-l-lines border-l-2 h-full pl-[23px] border-b-2 ${
						pathname === '/contact-me'
							? 'text-white border-b-2 border-accent-orange'
							: 'border-b-lines'
					}`}
				>
					_contact-me
				</Link>
			</ul>
		</header>
	);
}
