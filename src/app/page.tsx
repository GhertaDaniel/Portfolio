'use client';

import React, { useState } from 'react';
import TypeWriter from '@/utilities/TypeWriter';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

import CodeTemplate from '@/components/UI/CodeTemplate';

export default function Home() {
	const [swiper, setSwiper] = useState<SwiperType | null>();

	const code = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
	const value: T = parseModel(chunk._response, chunk._value);
	const initializedChunk: InitializedChunk<T> = (chunk: any);
	initializedChunk.status = INITIALIZED;
	initializedChunk._value = value;
	return value;
}`;
	const slideStyles =
		'bg-primary-darker-blue h-max rounded-lg border-lines border-[1px] flex justify-center items-center transform duration-300 ease will-change-transform';

	return (
		<main className='h-full flex justify-center items-center gap-8 md:gap-20'>
			<div className='h-max text-left'>
				<p className='text-paragraph'>Hi all. I am</p>
				<h1 className='text-heading'>Gherța Daniel</h1>
				<h2 className='text-subheading text-secondary-purple'>
					&gt; Front-end Developer
				</h2>
				<div className='mt-20 leading-8'>
					<p className='text-secondary-gray text-lable'>
						// portfolio site
						<br />
						// you can also see on my github
					</p>
					<TypeWriter
						text='const githubLink = '
						linkText='"https://github.com/GhertaDaniel"'
						linkTo='/github'
					/>
				</div>
			</div>
			<div className='min-w-[560px] max-h-[500px] flex items-center justify-center'>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					autoplay={{
						delay: 1,
						disableOnInteraction: false,
						// reverseDirection: true,
					}}
					loop
					modules={[Autoplay]}
					direction='vertical'
					speed={1800}
					onSwiper={(swiper) => setSwiper(swiper)}
					className='template-swiper w-full h-full md:h-[580px] 2xl:h-[835px] 3xl:h-[760px]'
				>
					{[...new Array(6)].map((_, idx) => (
						<SwiperSlide className={slideStyles} key={idx}>
							<CodeTemplate language='typescript' code={code} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</main>
	);
}
