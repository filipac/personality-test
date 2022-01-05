import {Question} from '@/Components/Question'
import Guest from '@/Layouts/Guest'
import {Results} from '@/Pages/QuizPage'
import React, {useContext, useState} from 'react'
import {Link} from '@inertiajs/inertia-react'
import StepWizard from "react-step-wizard";

export default function ResultsPage({result}) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <>
            <Guest>
                <div className={'min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center'}>
                    <div className={'mt-4 text-center'}>
                        <p className={'text-2xl'}>Based on the answers you've entered, you are an</p>
                        <div
                            className={'border-2 border-dashed border-primary rounded w-full text-2xl p-6 text-primary-darken font-bold transition mt-6'}>
                            {capitalizeFirstLetter(result)}
                        </div>
                        <Link href="/quiz"
                              as="button"
                              type="button"
                              className="mt-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white text-2xl transition bg-primary hover:bg-primary-darken focus:outline-none focus:ring-2"
                        >Take the quiz again</Link>
                    </div>
                </div>
            </Guest>
        </>
    )
}
