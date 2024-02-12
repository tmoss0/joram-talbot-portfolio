// components/BackgroundColorChanger.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BackgroundColorChanger() {
  const pathname = usePathname();

  useEffect(() => {
    // Define your background colors for each path
    const colors = {
      '/': '#1a6843',
      '/motion': '#1a6843',
      '/print': '#C4BFFF',
      '/digital': '#ffd24d',
      '/contact': '#1a6843',
    };

    // Set the background color based on the current pathname
    const color = colors[pathname];
    if (color) {
      document.documentElement.style.backgroundColor = color;
    } else {
      // Default color if the pathname isn't defined in the colors object
      document.documentElement.style.backgroundColor = '#ffffff';
    }
  }, [pathname]);

  return null; // No need to render anything
}
