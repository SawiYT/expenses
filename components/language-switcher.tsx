import { Locale, LOCALES, useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
	const { locale, setLocale } = useTranslation();
	const current = LOCALES.find(l => l.code == locale) || LOCALES[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='secondary' size='sm' className='gap-1.5 px-2.5 min-w-0'>
					<Icon icon={current.flag} width={16} height={16} style={{ borderRadius: '30%' }} />
					<span className='text-sm hidden sm:inline'>{current.label}</span>
					<Icon icon='solar:alt-arrow-down-bold' width={14} className='text-default-400' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-40'>
				{LOCALES.map(l => (
					<DropdownMenuItem
						key={l.code}
						onClick={() => setLocale(l.code as Locale)}
						className='flex items-center gap-2'>
						<Icon icon={l.flag} width={16} height={16} style={{ borderRadius: '30%' }} />
						{l.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
