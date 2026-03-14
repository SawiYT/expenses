import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';

export default function LoginButton() {
	const { data: session } = useSession();
	const user = session?.user;
	const router = useRouter();
	const { t } = useTranslation();

	return (
		<>
			{user ? (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						{user.image ? (
							<Button variant='ghost' size='sm' className='gap-1.5'>
								<img
									src={user.image}
									alt={user.name || 'Avatar'}
									className='w-full h-full object-cover rounded-full select-none pointer-events-none'
								/>
							</Button>
						) : (
							<div className='gap-1.5'>
								<Icon
									icon='solar:user-circle-bold'
									width={20}
									className='text-muted-foreground select-none pointer-events-none'
								/>{' '}
							</div>
						)}
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end' className='w-40'>
						<DropdownMenuItem key={'profile'} onClick={() => router.push('/profile')}>
							<Icon icon='solar:user-id-bold' width={16} />
							{t('profile.title')}
						</DropdownMenuItem>
						<DropdownMenuItem
							className='text-red-500 focus:text-white focus:bg-red-500 cursor-pointer '
							key={'singOut'}
							onClick={() => signOut({ callbackUrl: '/login' })}>
							<Icon icon='solar:logout-2-bold' width={16} />
							{t('user_menu.sign_out')}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className='gap-1.5'>
							<Icon
								icon='solar:user-circle-bold'
								className='text-foreground/60 hover:text-primary/80 select-none pointer-events-none'
								width={30}
							/>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end' className='w-40'>
						<DropdownMenuItem key={'profile'} onClick={() => router.push('/login')}>
							<Icon icon='solar:user-id-bold' width={16} />
							{t('sign_in.submit')}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</>
	);
}
