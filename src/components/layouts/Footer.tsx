import type { LegacyRef } from 'react';
import { forwardRef } from 'react';

import { AppConfig } from '@/constants/AppConfig';

const Footer = forwardRef((_props, ref) => {
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      style={{
        borderTop: '1px solid rgb(210, 214, 221)',
      }}
      className="en-font border-t py-3 text-center text-sm"
    >
      © Copyright {new Date().getFullYear()} {AppConfig.title}.
    </div>
  );
});

export default Footer;
