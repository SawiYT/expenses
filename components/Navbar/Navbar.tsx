'use client';

import { usePathname, useRouter } from 'next/navigation';
import config from '../../config/config.json';
import { ThemeButton } from '../ui/theme-button';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/lib/i18n';
import Link from 'next/link';
import { LanguageSwitcher } from '../language-switcher';
import LoginButton from '../login-button';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PulseLoader } from 'react-spinners';

// import { useUserContext } from '../../app/user-context';

export default function Navbar() {
	const pathname = usePathname();
	const { t } = useTranslation();

	const navKeys = [
		{ key: 'nav.dashboard', href: '/dashboard', icon: 'solar:chart-2-bold-duotone' },
		{ key: 'nav.transactions', href: '/transactions', icon: 'solar:document-text-bold-duotone' },
		{ key: 'nav.recurring', href: '/recurring', icon: 'solar:refresh-circle-bold-duotone' },
		{ key: 'nav.reminders', href: '/reminders', icon: 'solar:bell-bold-duotone' },
		{ key: 'nav.stats', href: '/stats', icon: 'solar:graph-up-bold-duotone' },
		{ key: 'nav.settings', href: '/settings', icon: 'solar:settings-bold-duotone' },
	];

	return (
		<nav className='sticky top-0 z-50 flex items-center justify-between border-b border-divider bg-background/80 backdrop-blur-lg px-4 md:px-8 h-16'>
			<div className='flex items-center gap-3'>
				<Link href={'/'} className='text-2xl font-bold flex flex-row justify-center items-center gap-2'>
					<Icon className='text-primary' icon={'solar:wallet-money-bold-duotone'} width={28} />

					{config.name}
				</Link>
			</div>
			<div className='flex items-center gap-1 md:gap-2'>
				{navKeys.map(item => (
					<Link
						key={item.href}
						href={item.href}
						className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
							pathname === item.href || pathname.startsWith(item.href + '/')
								? 'bg-primary/10 text-primary'
								: 'text-default-500 hover:text-primary'
						}`}>
						<Icon icon={item.icon} width={18} />
						<span className='hidden md:inline'>{t(item.key)}</span>
					</Link>
				))}
				{/* {user?.isAdmin && (
          <Link
            href="/admin"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/admin"
                ? "bg-warning/10 text-warning"
                : "text-default-500 hover:text-foreground hover:bg-default-100"
            }`}
          >
            <Icon icon="solar:shield-user-bold-duotone" width={18} />
            <span className="hidden md:inline">{t("nav.admin")}</span>
          </Link>
        )} */}
			</div>
			<div className='flex items-center gap-2'>
				<LanguageSwitcher />
				<ThemeButton />
				<LoginButton />
			</div>
		</nav>
	);
}
