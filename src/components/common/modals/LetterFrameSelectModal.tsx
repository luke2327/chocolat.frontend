import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { commonState, modalState } from '@/stores/common';

export default function LetterFrameSelectModal() {
  const [common, setCommon] = useRecoilState(commonState);
  const [modal, setModal] = useRecoilState(modalState);

  function closeModal() {
    setModal({
      ...modal,
      letterFrameSelectModal: false,
    });
  }

  const selectLetterFrame = () => {
    setModal({
      ...modal,
      letterFrameSelectModal: false,
    });
    setCommon({
      ...common,
      step: 1,
    });
  };

  return (
    <>
      <Transition appear show={modal.letterFrameSelectModal} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex flex-col items-center justify-center">
                    <LetterFrame src={common.letterFrameImgURI} />
                    <p className="text-sm text-gray-500">234234234</p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="mr-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={selectLetterFrame}
                    >
                      Got it, thanks!
                    </button>
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

const LetterFrame = styled.img`
  width: 12rem;
`;