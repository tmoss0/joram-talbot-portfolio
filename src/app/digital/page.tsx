import localFont from 'next/font/local';
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
          className={`${beauxFont.className} text-[200px] uppercase leading-none`}
        >
          DESIGN
        </h1>
      </div>
      <hr className='w-full border border-black' />
      <div className='my-16'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h4 className={`${untitledSansFont.className} text-xl`}>
              Case Study No. 1:
            </h4>
            <p className={`${tiemposTextItalicFont.className} text-xl`}>
              Rebranding Bio-Techne
            </p>
          </div>
          <div className='flex flex-col'>
            <h5 className={`${untitledSansFont.className}`}>
              Defining where Science <br />
              Intersects Innovation
            </h5>
          </div>
          <div className='flex flex-col'>
            <div className='rounded-xl border border-black'>
              <a className='mx-3' href='/contact'>
                2023
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
            >
              <path d='M16 1L24 9L16 17' stroke='black' stroke-width='2' />
              <path d='M24 9H0' stroke='black' stroke-width='2' />
            </svg>
          </div>
        </div>
      </div>
      <hr className='w-full border border-black' />
      <div className='my-16'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h4 className={`${untitledSansFont.className} text-xl`}>
              Case Study No. 2:
            </h4>
            <p className={`${tiemposTextItalicFont.className} text-xl`}>
              Porsche Film Series
            </p>
          </div>
          <div className='flex flex-col'>
            <h5 className={`${untitledSansFont.className}`}>
              Connecting the past, prsent <br/> and future of the Porsche brand
            </h5>
          </div>
          <div className='flex flex-col'>
            <div className='rounded-xl border border-black'>
              <a className='mx-3' href='/contact'>
                2019
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
            >
              <path d='M16 1L24 9L16 17' stroke='black' stroke-width='2' />
              <path d='M24 9H0' stroke='black' stroke-width='2' />
            </svg>
          </div>
        </div>
      </div>
      <hr className='w-full border border-black' />
      <div className='my-16'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h4 className={`${untitledSansFont.className} text-xl`}>
              Case Study No. 3:
            </h4>
            <p className={`${tiemposTextItalicFont.className} text-xl`}>
              Mobil 1 TV Spot
            </p>
          </div>
          <div className='flex flex-col'>
            <h5 className={`${untitledSansFont.className}`}>
              Connecting the past, present <br/> and future of the Mobil 1 brand
            </h5>
          </div>
          <div className='flex flex-col'>
            <div className='rounded-xl border border-black'>
              <a className='mx-3' href='/contact'>
                2018
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='18'
              viewBox='0 0 26 18'
              fill='none'
            >
              <path d='M16 1L24 9L16 17' stroke='black' stroke-width='2' />
              <path d='M24 9H0' stroke='black' stroke-width='2' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
