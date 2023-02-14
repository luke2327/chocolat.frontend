import '../styles/global.css';
import '../i18n/i18n';

import i18next from 'i18next';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

const nextClassList = [
  'w-full',
  'h-full',
  'flex',
  'items-center',
  'justify-center',
];
const bodyClassList = ['w-full', 'h-full'];

export default function MyApp({ Component, pageProps }: AppProps) {
  const resizePosition = (width: number) => {
    if (width >= 500) {
      document.body.classList.add(...bodyClassList);
      document.getElementById('__next')?.classList.add(...nextClassList);
    } else if (width < 500) {
      document.body.classList.remove(...bodyClassList);
      document.getElementById('__next')?.classList.remove(...nextClassList);
    }
  };

  useEffect(() => {
    i18next.on('languageChanged', (lng) => {
      document.documentElement.setAttribute('lang', lng);
    });

    const lng = localStorage.getItem('lng');

    if (lng) {
      document.documentElement.setAttribute('lang', lng);
    }

    resizePosition(window.innerWidth);
  });

  useEffect(() => {
    function handleResize() {
      resizePosition(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
