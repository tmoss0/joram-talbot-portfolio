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
      <body className='mx-20 my-11 bg-dark-green'>{children}</body>
    </html>
  );
}
