'use client';

import Link from 'next/link';
import React from 'react';

import { Prism as SyntaxHighliter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ITypeWriter {
	text: string;
	linkText: string;
	linkTo: string;
}

const Typewriter = ({ text, linkText, linkTo }: ITypeWriter) => {
	const [displayText, setDisplayText] = React.useState('');
	const [linkDisplayText, setLinkDisplayText] = React.useState('');
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const animateLinkText = () => {
		let linkIndex = 0;
		const linkIntervalId = setInterval(() => {
			if (linkIndex < linkText.length) {
				setLinkDisplayText(linkText.slice(0, linkIndex + 1));
				linkIndex++;
			} else {
				clearInterval(linkIntervalId);
			}
		}, 50);
	};

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			if (currentIndex < text.length) {
				setDisplayText(text.slice(0, currentIndex + 1));
				setCurrentIndex(currentIndex + 1);
			} else {
				clearInterval(intervalId);
				animateLinkText();
			}
		}, 50); // Adjust typing speed (in milliseconds) as needed

		return () => clearInterval(intervalId);
	}, [currentIndex, text]);

	const codeString = displayText + linkDisplayText;
	return (
		<div className='bg-transparent'>
			<Link href={'https://github.com/GhertaDaniel'}>
				<SyntaxHighliter language='javascript' style={atomDark}>
					{codeString}
				</SyntaxHighliter>
			</Link>
		</div>
	);
};

export default Typewriter;
