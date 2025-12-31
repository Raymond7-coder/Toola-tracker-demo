'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react';


type Props = {
  /** true → modal is visible */
    open: boolean;
    /** Call this to close the modal */
    onClose: () => void;
    name: string;
};

export default function EditUser({ open, onClose, name }: Props) {
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
                <div className="flex flex-col items-left">
                    <div className="mt-3 text-center sm:text-left">
                        <DialogTitle as="h3" className="text-sm md:text-base font-semibold text-gray-900">
                            Edit {name} 
                        </DialogTitle>
                        <p className="text-xxs sm:text-xs md:text-xs 2xl:text-sm text-gray-500 mb-4">
                            Please fill the form to edit the user details. Note that if a user account is set to inactive, he/she looses all access to his/her account
                        </p>
                        <form action="" className='mt-2 flex flex-col gap-y-3'>
                            <div className='flex flex-col gap-y-0.5'>
                                <label htmlFor="" className='text-xs font-medium text-gray-600'>Full Name</label>
                                <input type="text" className='border border-gray-200 w-full rounded-sm  px-2 py-1.5 text-xxs md:text-xs outline-none focus:border-green-600'/>
                            </div>
                            <div className='flex flex-col gap-y-0.5'>
                                <label htmlFor="" className='text-xs font-medium text-gray-600'>Email Address</label>
                                <input type="text" className='border border-gray-200 w-full rounded-sm  px-2 py-1.5 text-xxs md:text-xs outline-none focus:border-green-600'/>
                            </div>
                            <div className='flex flex-col gap-y-0.5'>
                                <label htmlFor="" className='text-xs font-medium text-gray-600'>Role</label>
                                <select name="" id="" className='border border-gray-200 w-full rounded-sm  px-2 py-1.5 text-xxs md:text-xs outline-none focus:border-green-600'>
                                    <option value="">Admin</option>
                                    <option value="">Department Head</option>
                                    <option value="">Staff</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-y-0.5'>
                                <label htmlFor="" className='text-xs font-medium text-gray-600'>Status</label>
                                <select name="" id="" className='border border-gray-200 w-full rounded-sm  px-2 py-1.5 text-xxs md:text-xs outline-none focus:border-green-600'>
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>
                                </select>
                            </div>
                            
                        </form>

                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex w-full justify-center rounded-sm bg-green-800 px-3 py-1.5 text-11 font-semibold text-white shadow-xs cursor-pointer hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                    Edit User
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
