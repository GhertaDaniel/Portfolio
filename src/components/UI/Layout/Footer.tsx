'use client';

import { FacebookIcon, InstagramIcon, GithubIcon } from '@/assets/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
	const router = useRouter();

	const clickHandle = () => {
		document.location.href = 'instagram.com';
	};

	return (
		<footer className='mt-auto h-[50px]'>
			<ul className='h-[50px] grid grid-cols-footer items-center border-t-2 border-lines text-lable text-secondary-gray'>
				<li className='flex items-center border-r-2 border-lines h-full pl-5'>
					find me in:
				</li>
				<li className='flex items-center justify-center border-lines border-r-2 h-full'>
					<InstagramIcon className='hover:text-secondary-gray' />
				</li>
				<li className='flex items-center justify-center border-lines border-r-2 h-full'>
					<FacebookIcon />
				</li>
				<li></li>
				<li className='flex items-center justify-center border-lines border-l-2 h-full'>
					<Link
						className='flex items-center gap-1'
						href='https://github.com/GhertaDaniel'
					>
						@ghertadaniel
						<GithubIcon className='w-6 h-6' />
					</Link>
					{/* <a href='github.com'>github</a> */}
				</li>
			</ul>
		</footer>
	);
}
