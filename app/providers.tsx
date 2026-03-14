'use client';

import type { ThemeProviderProps } from 'next-themes';
import * as React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { useRouter } from 'next/navigation';
import { I18nProvider } from '@/lib/i18n';
import { Toaster } from '@/components/ui/sonner';
import { SessionProvider } from 'next-auth/react';

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
			<SessionProvider>
				<I18nProvider>
					{children}
					<Toaster />
				</I18nProvider>
			</SessionProvider>
		</ThemeProvider>
	);
}
