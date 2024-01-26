import localFont from 'next/font/local';
import Link from 'next/link';
const beauxFont = localFont({ src: '../../../public/fonts/BEAUX-Display.ttf' });
const untitledSansFont = localFont({
  src: '../../../public/fonts/UntitledSans-Regular.otf',
});
const tiemposTextRegularFont = localFont({
  src: '../../../public/fonts/TiemposText-Regular.otf',
});
const tiemposTextItalicFont = localFont({
  src: '../../../public/fonts/TiemposText-Italic.otf',
});

export default function Digital() {
  return (
    <>
      <div className='my-16'>
        <h1
          className={`${beauxFont.className} text-[100px] uppercase leading-none sm:text-9xl md:text-[200px]`}
        >
          DESIGN
        </h1>
      </div>
      <hr className='w-full border border-black' />
      <div className='my-8 flex flex-row justify-between gap-x-3 sm:my-16 sm:gap-x-5'>
        <div className='flex w-full flex-wrap gap-x-3 sm:gap-x-5'>
          {/* First Column */}
          <div className='w-full flex-1'>
            <div>
              <h4 className={`${untitledSansFont.className} text-xl`}>
                Case Study <span className='break-keep'>No. 1:</span>
              </h4>
              <p className={`${tiemposTextItalicFont.className} text-xl`}>
                Rebranding <span className='break-keep'>Bio-Techne</span>
              </p>
            </div>
          </div>
          {/* Second Column */}
          <div className='w-full flex-1'>
            <h5
              className={`${untitledSansFont.className} w-full text-lg md:w-[275px]`}
            >
              Defining where Science intersects Innovation
            </h5>
          </div>
          {/* Third Column */}
          <div className='hidden w-full flex-1 grid-cols-2 sm:col-span-1 sm:block'>
            <div
              className={`${untitledSansFont.className} flex justify-between`}
            >
              <p className='rounded-full border border-black px-3 py-1'>2023</p>
              <Link href='/contact'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='18'
                  viewBox='0 0 26 18'
                  fill='none'
                >
                  <path d='M16 1L24 9L16 17' stroke='black' strokeWidth='2' />
                  <path d='M24 9H0' stroke='black' strokeWidth='2' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col items-end sm:hidden'>
          <p
            className={`mb-auto rounded-full border border-black px-3 py-1 ${untitledSansFont.className}`}
          >
            2023
          </p>
          <Link href='/contact' className='mt-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
            >
              <path d='M16 1L24 9L16 17' stroke='black' strokeWidth='2' />
              <path d='M24 9H0' stroke='black' strokeWidth='2' />
            </svg>
          </Link>
        </div>
      </div>
      <hr className='w-full border border-black' />
      <div className='my-8 flex flex-row justify-between gap-x-3 sm:my-16 sm:gap-x-5'>
        <div className='flex w-full flex-wrap gap-x-3 sm:gap-x-5'>
          {/* First Column */}
          <div className='w-full flex-1'>
            <div>
              <h4 className={`${untitledSansFont.className} text-xl`}>
                Case Study <span className='break-keep'>No. 2:</span>
              </h4>
              <p className={`${tiemposTextItalicFont.className} text-xl`}>
                Porsche Film Series
              </p>
            </div>
          </div>
          {/* Second Column */}
          <div className='w-full flex-1'>
            <h5
              className={`${untitledSansFont.className} w-full text-lg md:w-[275px]`}
            >
              Connecting the past, present, and future of the Porsche brand
            </h5>
          </div>
          {/* Third Column */}
          <div className='hidden w-full flex-1 grid-cols-2 sm:col-span-1 sm:block'>
            <div
              className={`${untitledSansFont.className} flex justify-between`}
            >
              <p className='rounded-full border border-black px-3 py-1'>2019</p>
              <Link href='/contact'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='18'
                  viewBox='0 0 26 18'
                  fill='none'
                >
                  <path d='M16 1L24 9L16 17' stroke='black' strokeWidth='2' />
                  <path d='M24 9H0' stroke='black' strokeWidth='2' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col items-end sm:hidden'>
          <p
            className={`mb-auto rounded-full border border-black px-3 py-1 ${untitledSansFont.className}`}
          >
            2019
          </p>
          <Link href='/contact' className='mt-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
            >
              <path d='M16 1L24 9L16 17' stroke='black' strokeWidth='2' />
              <path d='M24 9H0' stroke='black' strokeWidth='2' />
            </svg>
          </Link>
        </div>
      </div>
      <hr className='w-full border border-black' />
      <div className='my-8 flex flex-row justify-between gap-x-3 sm:my-16 sm:gap-x-5'>
        <div className='flex w-full flex-wrap gap-x-3 sm:gap-x-5'>
          {/* First Column */}
          <div className='w-full flex-1'>
            <div>
              <h4 className={`${untitledSansFont.className} text-xl`}>
                Case Study <span className='break-keep'>No. 3:</span>
              </h4>
              <p className={`${tiemposTextItalicFont.className} text-xl`}>
                Mobil 1 TV Spot
              </p>
            </div>
          </div>
          {/* Second Column */}
          <div className='w-full flex-1'>
            <h5
              className={`${untitledSansFont.className} w-full text-lg md:w-[275px]`}
            >
              Connecting the past, present, and future of the Porsche brand
            </h5>
          </div>
          {/* Third Column */}
          <div className='hidden w-full flex-1 grid-cols-2 sm:col-span-1 sm:block'>
            <div
              className={`${untitledSansFont.className} flex justify-between`}
            >
              <p className='rounded-full border border-black px-3 py-1'>2018</p>
              <Link href='/contact'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='18'
                  viewBox='0 0 26 18'
                  fill='none'
                >
                  <path d='M16 1L24 9L16 17' stroke='black' strokeWidth='2' />
                  <path d='M24 9H0' stroke='black' strokeWidth='2' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col items-end sm:hidden'>
          <p
            className={`mb-auto rounded-full border border-black px-3 py-1 ${untitledSansFont.className}`}
          >
            2018
          </p>
          <Link href='/contact' className='mt-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
            >
              <path d='M16 1L24 9L16 17' stroke='black' strokeWidth='2' />
              <path d='M24 9H0' stroke='black' strokeWidth='2' />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
