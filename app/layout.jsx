import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '800'] });

export const metadata = {
	title: 'Age Calculator App',
	description: 'Frontend Mentor',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} bg-lightGrey`}>
				{children}
			</body>
		</html>
	);
}
