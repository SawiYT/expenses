'use client';

import React from 'react';
import config from '../../config/config.json';

function Header() {
	return (
		<div className='flex justify-center items-center min-h-screen w-full px-6'>
			<div className='flex justify-center items-center w-screen h-screen '>
				<div className='flex flex-col justify-center items-center '>
					<h1>Welcome to {config.name}</h1>
					<p>best tic-tac-toe game </p>
				</div>
				<div></div>
			</div>
		</div>
	);
}

export default Header;
