import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { Main } from '@/components/templates/Main';
import { Meta } from '@/layouts/Meta';
import { letterState } from '@/stores/common';

function withLayout(Component: any) {
  function WithLayout(props: any) {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [letter, setLetter] = useRecoilState(letterState);
    const { t } = useTranslation();

    // 최초 진입 시
    useEffect(() => {
      setTitle(t('title') as string);
      setDescription(t('description') as string);
      setLetter({
        ...letter,
        selectedKeywordName: t(letter.selectedKeywordId),
      });

      if (title !== '' && description !== '') {
        setLoading(false);
      }
    }, [title && description]);

    // 언어 변경 시
    useEffect(() => {
      i18next.on('languageChanged', () => {
        setTitle(t('title') as string);
        setDescription(t('description') as string);
        setLetter({
          ...letter,
          selectedKeywordName: t(letter.selectedKeywordId),
        });
      });
    });

    return loading ? null : (
      <Main
        title={title}
        description={description}
        meta={<Meta title={title} description={description} />}
      >
        <Component {...props} />
      </Main>
    );
  }

  return WithLayout;
}

export default withLayout;
