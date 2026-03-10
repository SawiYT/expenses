'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import config from '../../config/config.json';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useUserContext } from '../../app/user-context';

const formSchema = z.object({
	username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function Login() {
	const [message, setMessage] = useState('');
	const { setUserInfo } = useUserContext();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			await axios.post(`${config.host}/login`, data, { withCredentials: true });
			setUserInfo({ username: data.username });
			router.push('/dashboard'); 
		} catch (err) {
			setMessage('Login error. Please check your credentials.');
			console.error(err);
		}
	};

	return (
		<div className='flex justify-center items-center h-[100vh] flex-col clouds py-24 w-full mx-auto px-4 sm:px-6 md:px-8'>
			<div className=' max-w-7xl flex justify-center p-2 sm:p-4 md:p-6  rounded-2xl bg-pink-200 border-4 border-pink-300 shadow-lg'>
				<div className='w-full max-w-md'>
					<h2 className='text-4xl sm:text-5xl p-6 sm:p-10 text-black text-center leading-snug'>Login Page</h2>

					<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
						<div>
							<input
								{...register('username')}
								placeholder='Username'
								className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 ${
									errors.username ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.username && <p className='text-red-600 text-sm mt-1'>{errors.username.message}</p>}
						</div>

						<div>
							<input
								type='password'
								{...register('password')}
								placeholder='Password'
								className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400 ${
									errors.password ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.password && <p className='text-red-600 text-sm mt-1'>{errors.password.message}</p>}
						</div>

						{message && <p className='text-red-600 text-center'>{message}</p>}

						<div className='flex justify-center items-center gap-x-4'>
							<Link
								href='/register'
								className='px-5 py-2 rounded-xl bg-[#f9a8d4] text-white font-medium border border-pink-300 shadow-md hover:bg-pink-300 transition duration-20'>
								Register
							</Link>
							<button
								type='submit'
								className='px-5 py-2 rounded-xl bg-[#f9a8d4] text-white font-medium border border-pink-300 shadow-md hover:bg-pink-300 transition duration-20'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
