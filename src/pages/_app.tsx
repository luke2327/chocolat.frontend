import '../styles/global.css';

import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
