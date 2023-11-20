import localFont from 'next/font/local';

const beauxFont = localFont({ src: '../../public/fonts/BEAUX-Display.ttf' });

export default function Home() {
  return (
    <>
      <nav className='flex flex-auto items-center gap-x-9'>
        <div className='rounded-xl border border-black'>
          <a href='/'>
            <h1 className='mx-2 whitespace-nowrap'>Joram Talbot Design</h1>
          </a>
        </div>
        <hr className='w-full border border-black' />
        <div className='flex justify-evenly gap-x-16'>
          <a href='#'>Print</a>
          <a href='#'>Motion</a>
          <a href='#'>Digital</a>
          <div className='rounded-xl border border-black'>
            <a className='mx-2' href='#'>
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className='my-16'>
        <h1
          className={`${beauxFont.className} text-[200px] uppercase leading-none`}
        >
          DESIGN
        </h1>
        <h1
          className={`${beauxFont.className} text-[200px] uppercase leading-none`}
        >
          MOTION
        </h1>
        <h1
          className={`${beauxFont.className} text-[200px] uppercase leading-none`}
        >
          OTHER
        </h1>
      </div>
    </>
  );
}
