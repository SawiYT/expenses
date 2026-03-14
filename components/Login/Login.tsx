'use client';

import { signIn } from 'next-auth/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function AuthPage() {
	const { t } = useTranslation();
	const [loading, setLoading] = useState<string | null>(null);

	const handleSignIn = async (provider: string) => {
		setLoading(provider);
		await signIn(provider, { callbackUrl: '/dashboard' });
	};

	return (
		<div className='min-h-screen flex items-center justify-center px-4 clouds'>
			<div className='w-full max-w-md bg-card border shadow-xl rounded-2xl p-8'>
				<div className='flex flex-col items-center gap-3 mb-10'>
					<div className='p-3 bg-primary/10 rounded-full'>
						<Icon icon='solar:user-circle-bold-duotone' className='text-primary' width={48} />
					</div>
					<h1 className='text-2xl font-bold'>{t('sign_in.title')}</h1>
					<p className='text-sm text-muted-foreground text-center'>{t('sign_in.description')}</p>
				</div>

				<div className='space-y-4'>
					<button
						onClick={() => handleSignIn('google')}
						className='w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-medium border border-border bg-secondary/50 hover:bg-secondary transition-all active:scale-[0.98] disabled:opacity-50'>
						<Icon icon='logos:google-icon' width={20} />
						<span className='text-foreground'>{t('sign_in.google')}</span>
						{loading === 'google' && <Icon icon='solar:spinner-bold' className='animate-spin' width={18} />}
					</button>

					<button
						onClick={() => handleSignIn('github')}
						className='w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50'>
						<Icon icon='mdi:github' width={22} />
						<span>{t('sign_in.github')}</span>
						{loading === 'github' && <Icon icon='solar:spinner-bold' className='animate-spin' width={18} />}
					</button>
				</div>

				<div className='my-8 flex items-center gap-4'>
					<div className='h-[1px] flex-1 bg-border'></div>
					<span className='text-xs text-muted-foreground uppercase tracking-widest'>{t('sign_in.issue_title')}</span>
					<div className='h-[1px] flex-1 bg-border'></div>
				</div>

				<div className='text-center'>
					<p className='text-sm text-muted-foreground'>
						{t('sign_in.issue_description')}
						<button className='ml-2 text-primary font-medium hover:underline'>{t('sign_in.issue_solution')}</button>
					</p>
				</div>
			</div>
		</div>
	);
}
