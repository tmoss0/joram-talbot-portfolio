'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BackgroundColorChanger() {
  const pathname = usePathname();

  useEffect(() => {
    const colors = {
      '/': '#1a6843',
      '/motion': '#1a6843',
      '/print': '#c4bfff ',
      '/digital': '#ffd24d',
      '/contact': '#1a6843',
    };

    const color = colors[pathname] || colors['/'];
    if (color) {
      document.documentElement.style.backgroundColor = color;
    }
  }, [pathname]);
  return null;
}
