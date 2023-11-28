import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joram Talbot Portfolio',
  description: 'The works of Joram Talbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='mx-20 my-11 bg-dark-green'>
        <nav className='flex flex-auto items-center gap-x-9'>
          <div className='rounded-xl border border-black'>
            <a href='/'>
              <h1 className='mx-2 whitespace-nowrap'>Joram Talbot Design</h1>
            </a>
          </div>
          <hr className='w-full border border-black' />
          <div className='flex justify-evenly gap-x-16'>
            <a href='/print'>Print</a>
            <a href='/motion'>Motion</a>
            <a href='/digital'>Digital</a>
            <div className='rounded-xl border border-black'>
              <a className='mx-2' href='/contact'>
                Contact
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
