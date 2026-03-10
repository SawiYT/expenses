'use client';

import Navbar from '@/components/Navbar/Navbar';
import Register from '@/components/Register/Register';
import { UserProvider } from '../user-context';

export default function Home() {
	return (
		<div className=' overflow-hidden'>
			<UserProvider>
				<Navbar />
				<Register />
			</UserProvider>
		</div>
	);
}
