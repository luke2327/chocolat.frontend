import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';

import { useLocale } from '@/hooks/useLocale';
import { defaultValueModal, modalState } from '@/stores/common';

export default function RightSidePannelModal() {
  const { t } = useLocale();
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalState);

  function closeModal() {
    setModal(defaultValueModal);
  }

  function changeLanguage(locale: 'ja' | 'ko') {
    console.log(locale);
    router.push('/', '/', { locale });
  }

  return (
    <>
      <Transition appear show={modal.rightSidePannelModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white bg-opacity-90 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-500">{t.language}</p>
                    <div className="flex">
                      <p
                        onClick={() => changeLanguage('ja')}
                        className="mr-2 w-8 cursor-pointer rounded-md bg-gray-300 bg-opacity-50 p-1 text-center text-xs hover:bg-gray-400"
                      >
                        JP
                      </p>
                      <p
                        onClick={() => changeLanguage('ko')}
                        className="w-8 cursor-pointer rounded-md bg-gray-300 bg-opacity-50 p-1 text-center text-xs hover:bg-gray-400"
                      >
                        KR
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
