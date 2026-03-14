'use client';

import React from 'react';
import config from '../../config/config.json';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

function Header() {
	const { t } = useTranslation();

	return (
		<div className='flex justify-center flex-col bg-background items-center min-h-[calc(100vh-64px)] w-full px-6'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-4xl font-bold text-foreground'>
					{t('header.title')} {config.name}
				</h1>
				<p className='text-muted-foreground'>{t('header.description')}</p>
			</div>
			<div className=' p-3 space-x-4'>
				<Link href='/login' className='text-primary  font-medium'>
					{t('sign_in.submit')}
				</Link>
				<Link href='/dashboard' className=' font-medium'>
					{t('nav.dashboard')}
				</Link>
			</div>
		</div>
	);
}

export default Header;
