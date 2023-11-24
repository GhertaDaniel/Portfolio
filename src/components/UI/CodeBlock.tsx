'use client';
import { ReactNode } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ICodeBlock {
	codestring: string;
}

export default function CodeBlock({ codestring }: ICodeBlock) {
	return (
		<SyntaxHighlighter
			language='javascript'
			style={github}
			customStyle={{ backgroundColor: 'transparent' }}
			CodeTag={'code'}
		>
			{codestring}
		</SyntaxHighlighter>
	);
}
