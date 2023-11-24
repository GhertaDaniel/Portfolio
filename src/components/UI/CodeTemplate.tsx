'use client';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css';
import '@/assets/styles/prism-style.css';
import 'prismjs/components/prism-typescript';
import Link from 'next/link';
import React from 'react';

interface ICodeTemplate {
	code: string;
	language: string;
}

export default function CodeTemplate({ code, language }: ICodeTemplate) {
	React.useEffect(() => {
		Prism.highlightAll();
	});
	return (
		<pre className='!bg-transparent !leading-[1.32rem] !m-0 !pt-5 !text-code'>
			<code className={`language-${language} !leading-3 !text-secondary-gray`}>
				{code}
			</code>
		</pre>
	);
}
