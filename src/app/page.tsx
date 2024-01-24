import localFont from 'next/font/local';
const beauxFont = localFont({ src: '../../public/fonts/BEAUX-Display.ttf' });

export default function Home() {
  return (
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
  );
}
