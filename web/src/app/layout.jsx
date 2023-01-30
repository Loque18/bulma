'use client';

import { useState } from 'react';
import 'styles/bulma2.css';

const themes = {
	dark: 'dark',
	light: 'light',
};

export default function RootLayout({ children }) {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(theme === themes.dark ? themes.light : themes.dark);
	};

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={theme}>
				<button className="button" onClick={toggleTheme}>
					<span className="icon">
						{theme === themes.dark ? (
							<i className="fad fa-sun" />
						) : (
							<i className="fad fa-moon" />
						)}
					</span>
				</button>
				{children}
			</body>
		</html>
	);
}
