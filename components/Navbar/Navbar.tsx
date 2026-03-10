'use client';

import Link from 'next/link';
import config from '../../config/config.json';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PulseLoader } from 'react-spinners';

// import { useUserContext } from '../../app/user-context';

export default function Navbar() {
	// const { userInfo, setUserInfo } = useUserContext();
	// const [loading, setLoading] = useState(true);

	// const fetchUserInfo = async () => {
	// 	try {
	// 		const response = await axios.get(`${config.host}/userData`, { withCredentials: true });
	// 		if (response.data?.user) {
	// 			setUserInfo({ username: response.data.user.username });
	// 		} else {
	// 			setUserInfo(null);
	// 		}
	// 	} catch (error) {
	// 		setUserInfo(null);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchUserInfo();
	// }, []);

	return (
		<nav className='fixed w-full bg-pink-200 border-b-2 border-pink-300 shadow-md'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
						<p className='text-2xl font-bold uppercase bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent'>
							{config.name}
						</p>
					</div>
					<div className='flex space-x-4 items-center'>
						<Link href='/rooms' className='text-pink-400 hover:text-pink-600 font-medium'>
							Rooms
						</Link>

						{/* {loading ? (
							<PulseLoader size={8} color='#ec4899' />
						) : userInfo ? (
							<>
								<Link href='/dashboard' className='text-pink-400 hover:text-pink-600 font-medium'>
									Dashboard
								</Link>
							</>
						) : (
							<Link href='/login' className='text-pink-400 hover:text-pink-600 font-medium'>
								Login
							</Link>
						)} */}
					</div>
				</div>
			</div>
		</nav>
	);
}
