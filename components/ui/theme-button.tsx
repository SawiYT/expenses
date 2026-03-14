import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

function ThemeButton() {
	const { setTheme } = useTheme();
	return (
		<Button
			className='rounded-xl '
			variant='outline'
			size='icon'
			onClick={() => setTheme(theme => (theme === 'light' ? 'dark' : 'light'))}>
			<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}

export { ThemeButton };
