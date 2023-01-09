import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import type { Keyword } from '@/constants/letter.keyword';
import { keyword } from '@/constants/letter.keyword';
import { letterState } from '@/stores/common';

export default function SelectBox() {
  const { t } = useTranslation();
  const onChange = (value: Keyword) => {
    setLetter({
      ...letter,
      selectedKeywordId: value.i18nKey,
      selectedKeywordName: t(value.i18nKey),
      selectedType: value.type,
    });
  };

  const [letter, setLetter] = useRecoilState(letterState);
  const [keywordList] = useState<Keyword[]>(keyword);

  return (
    <div className="my-3 w-auto">
      <Listbox
        value={letter.selectedKeywordName}
        onChange={(v: unknown) => onChange(v as Keyword)}
      >
        <div className="relative mt-1">
          <Listbox.Button
            className="
              relative w-48 cursor-default rounded-lg bg-white py-2 pl-3
              pr-10 text-left opacity-70 shadow-md focus:outline-none focus-visible:border-indigo-500
              focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
              focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{letter.selectedKeywordName}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute z-10 mt-1 max-h-60 w-48 cursor-pointer overflow-auto
              rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black
                ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {keywordList.map((word, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 opacity-70 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={word}
                >
                  {
                    <>
                      <span
                        className={`block truncate ${
                          word.i18nKey === letter.selectedKeywordId
                            ? 'font-medium'
                            : 'font-normal'
                        }`}
                      >
                        {t(word.i18nKey)}
                      </span>
                      {word.i18nKey === letter.selectedKeywordId ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  }
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
