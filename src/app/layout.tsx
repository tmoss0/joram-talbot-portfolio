import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import BackgroundColorChanger from './components/BackgroundColorChanger';

export const metadata: Metadata = {
  title: 'Joram Talbot Portfolio',
  description: 'The works of Joram Talbot',
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='mx-5 my-5 md:container md:mx-auto md:my-11'>
        <BackgroundColorChanger />
        <nav className='flex flex-auto items-center gap-x-9'>
          <div className='rounded-xl border border-black'>
            <Link href='/'>
              <p className='mx-2 whitespace-nowrap'>Joram Talbot Design</p>
            </Link>
          </div>
          <hr className='w-full border border-black' />
          <div className='flex justify-evenly gap-x-16'>
            <Link href='/print'>Print</Link>
            <Link href='/motion'>Motion</Link>
            <Link href='/digital'>Digital</Link>
            <div className='rounded-xl border border-black'>
              <Link className='mx-2' href='/contact'>
                Contact
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
