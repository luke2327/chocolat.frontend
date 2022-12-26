import type { ReactNode } from 'react';

import Container from '@/components/layouts/Container';
import { AppConfig } from '@/utils/AppConfig';

import { RandomFlower } from '../RandomFlower';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Main = (props: IMainProps) => (
  <Container>
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}
      <div className="mx-auto max-w-screen-md">
        <div className="border-b border-gray-300">
          <div className="py-2">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">
                {AppConfig.title}
              </div>
              <RandomFlower />
            </div>

            <div className="text-xl">{AppConfig.description}</div>
          </div>
        </div>

        <div className="content py-5 text-xl">{props.children}</div>

        <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}.
        </div>
      </div>
    </div>
  </Container>
);
