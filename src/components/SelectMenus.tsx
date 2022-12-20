import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

const people = [
  {
    id: 1,
    name: '日本語',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMie7eYwguUNTIAgPbOlvoElLvSg-yAShOsVDlP3HgbMb9AFd09T3a2Dr2tJyPpXou4U4&usqp=CAU',
  },
  {
    id: 2,
    name: '韓国語',
    avatar: 'https://t1.daumcdn.net/cfile/tistory/216A104955CDB88A1B',
  },
] as const;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function SelectMenu() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-6 w-6 shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected: selectedLanguage, active }): JSX.Element => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-6 w-6 shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selectedLanguage
                                ? 'font-semibold'
                                : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selectedLanguage ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
