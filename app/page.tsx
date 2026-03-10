'use client';

import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import { UserProvider } from './user-context';

export default function Home() {
	return (
		<div className=' overflow-hidden'>
			<UserProvider>
				<Navbar />
				<Header />
			</UserProvider>
		</div>
	);
}
