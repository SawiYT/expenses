'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';
import { useSession } from 'next-auth/react';
import { useTranslation } from '@/lib/i18n';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function Profile() {
	const { data: session, status } = useSession();
	const { t } = useTranslation();

	const user = session?.user;

	const handleCopyId = (id: string) => {
		navigator.clipboard.writeText(id);
		toast.success(t('profile.id_copied'), {
			description: id,
			icon: <Icon icon='solar:copy-bold' width={16} />,
		});
	};

	if (status === 'loading') return <div className='p-8 text-center'>Loading...</div>;
	if (!user) return <div className='p-8 text-center'>{t('common.not_logged_in')}</div>;

	const profile = {
		username: user.name,
		email: user.email,
		id: user.id,
		createdAt: user.createdAt,
		isAdmin: user.isAdmin,
	};

	return (
		<div className='p-4 max-w-2xl mx-auto'>
			<Card>
				<CardHeader className='flex flex-row items-center gap-2 font-semibold text-lg'>
					<Icon icon='solar:user-id-bold-duotone' className='text-primary select-none' width={24} />
					<CardTitle>{t('profile.user_info')}</CardTitle>
				</CardHeader>
				<CardContent className='space-y-6'>
					<div className='flex items-center gap-4'>
						<div className='relative w-20 h-20 rounded-full bg-primary/10 overflow-hidden flex-shrink-0'>
							<img
								src={user.image || '/default-avatar.png'}
								alt={user.name || 'Avatar'}
								className='w-full h-full object-cover select-none pointer-events-none'
							/>
						</div>
						<div className='select-none'>
							<p className='text-xl font-bold'>{profile.username}</p>
							<div className='flex items-center gap-2 mt-1'>
								{profile.isAdmin && (
									<Badge variant='secondary' className='bg-yellow-500/10 text-yellow-600 border-yellow-500/20'>
										{t('profile.admin')}
									</Badge>
								)}
							</div>
						</div>
					</div>

					<Separator />

					<div className='space-y-4 text-sm'>
						<div className='flex items-center gap-2'>
							<Icon icon='solar:user-bold' width={16} className='text-muted-foreground select-none' />
							<span className='text-muted-foreground'>{t('profile.username')}:</span>
							<span className='font-medium'>{profile.username}</span>
						</div>

						<div className='flex items-center gap-2'>
							<Icon icon='solar:archive-up-minimlistic-bold' width={16} className='text-muted-foreground select-none' />
							<span className='text-muted-foreground'>{t('profile.email')}:</span>
							<span className='font-medium'>{profile.email}</span>
						</div>

						<div
							className='flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors'
							onClick={() => handleCopyId(profile.id)}>
							<Icon icon='solar:user-id-bold-duotone' width={16} className='text-muted-foreground select-none' />
							<span className='text-muted-foreground'>{t('profile.user_id')}:</span>
							<span className='font-mono text-xs bg-muted p-1 rounded group-hover:bg-primary/10 transition-colors'>
								{profile.id}
							</span>
							<Icon
								icon='solar:copy-linear'
								width={14}
								className='opacity-0 group-hover:opacity-100 transition-opacity'
							/>
						</div>

						<div className='flex items-center gap-2 text-muted-foreground'>
							<Icon icon='solar:calendar-bold' width={16} className='select-none' />
							<span>{t('profile.created')}:</span>
							<span className='text-foreground'>{new Date(profile.createdAt).toLocaleDateString()}</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
