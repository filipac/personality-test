import Guest from '@/Layouts/Guest'
import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function RootPage({number_of_questions}) {
    return (
        <>
            <Guest>
                <div className={'min-h-[90vh] md:min-h-[50vh] flex flex-col items-center justify-center'}>
                    <div className={'mt-4 text-center'}>
                        <p>Welcome to the personality test.</p>
                        <p>The test consists of <strong className={'font-bold'}>{number_of_questions} questions</strong> with various possible answers that will give you two possible outcomes:</p>
                        <p>you are either an</p>
                        <div className={'flex flex-col md:flex-row items-center mt-4'}>
                            <div className={'border-2 border-dashed border-primary rounded w-full p-6 text-primary-darken font-bold hover:bg-primary hover:text-beige hover:border-beige hover:text-xl transition'}>introvert</div>
                            <div className={'md:mx-12 w-32'}><p>or an</p></div>
                            <div className={'border-2 border-dashed border-primary rounded w-full p-6 text-primary-darken font-bold hover:bg-primary hover:text-beige hover:border-beige hover:text-xl transition'}>extrovert</div>
                        </div>
                    </div>
                    <div className={'flex-1 flex flex-col items-center justify-center'}>
                        <button
                            type="button"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white text-2xl transition bg-primary hover:bg-primary-darken focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Start personality test
                        </button>
                    </div>
                </div>
            </Guest>
        </>
    );
}
