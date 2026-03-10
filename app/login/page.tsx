'use client';

import Login from '@/components/Login/Login';
import Navbar from '@/components/Navbar/Navbar';
import { UserProvider } from '../user-context';

export default function Home() {
	return (
		<div className=' overflow-hidden'>
			<UserProvider>
				<Navbar />
				<Login />
			</UserProvider>
		</div>
	);
}
