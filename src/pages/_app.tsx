import '../styles/global.css';
import '../i18n/i18n';

import i18next from 'i18next';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    i18next.on('languageChanged', (lng) => {
      document.documentElement.setAttribute('lang', lng);
    });
  });
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
