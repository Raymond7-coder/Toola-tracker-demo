'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


type Props = {
  /** true → modal is visible */
    open: boolean;
    /** Call this to close the modal */
    onClose: () => void;
    name: string;
    type: string;
};

export default function GeneralDelete({ open, onClose, name, type }: Props) {

    return (
        <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-sans">
            <div className="flex min-h-full items-center justify-center p-2 text-center  sm:p-0">
            <DialogPanel
                transition
                className="font-poppins relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
                <div className="bg-white px-2 xsm:px-4 pt-5 pb-4  sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-sm md:text-base font-semibold text-gray-900">
                        Delete {name}
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-xxs sm:text-xs md:text-xs 2xl:text-sm text-gray-500">
                        You are about to permanently delete this {type?.replace("_", "   ")}, please confirm the {type?.replace("_", "   ")} before deleting.
                        This action cannot be undone.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex w-full justify-center rounded-sm bg-red-800 px-3 py-1.5 text-11 font-semibold text-white shadow-xs cursor-pointer hover:bg-orange sm:ml-3 sm:w-auto"
                >
                    Delete
                </button>
                <button
                    type="button"
                    data-autofocus
                    onClick={onClose}
                    className="mt-3 inline-flex w-full justify-center rounded-sm bg-white px-3 py-1.5 text-11 font-semibold text-gray-900 shadow-xs cursor-pointer inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                    Cancel
                </button>
                </div>
            </DialogPanel>
            </div>
        </div>
        </Dialog>
    )
}
