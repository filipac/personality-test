import Guest from '@/Layouts/Guest'
import React from 'react'
import {Link} from '@inertiajs/inertia-react'

export default function RootPage({number_of_questions}) {
    return (
        <>
            <Guest>
                <div className={'min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center'}>
                    <div className={'mt-4 text-center'}>
                        <p>Welcome to the personality test.</p>
                        <p>The test consists of <strong
                            className={'font-bold'}>{number_of_questions} questions</strong> with various possible
                            answers that will give you two possible outcomes:</p>
                        <p>you are either an</p>
                        <div className={'flex flex-col md:flex-row items-center mt-4'}>
                            <div
                                className={'border-2 border-dashed border-primary rounded w-full p-6 text-primary-darken font-bold hover:bg-primary hover:text-beige hover:border-beige hover:text-xl transition'}>introvert
                            </div>
                            <div className={'my-6 md:mx-12 w-32'}><p>or an</p></div>
                            <div
                                className={'border-2 border-dashed border-primary rounded w-full p-6 text-primary-darken font-bold hover:bg-primary hover:text-beige hover:border-beige hover:text-xl transition'}>extrovert
                            </div>
                        </div>
                        <p className={'mt-4'}>
                            At work, is it you who gets noticed first or perhaps the other people around you?
                        </p>
                        <p>
                            Do you feel compelled to take centre-stage or are you more comfortable back-stage?
                        </p>
                        <p>If it’s the former, then you are eager for contact — warm and happy human relations.</p>
                        <p>If it’s the latter, then solitude suits and stimulates you more and hell is often other
                            people…</p>
                    </div>
                    <div className={'flex-1 flex flex-col items-center justify-center'}>
                        <Link href="/quiz"
                              as="button"
                              type="button"
                              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white text-2xl transition bg-primary hover:bg-primary-darken focus:outline-none focus:ring-2"
                        >Start personality test</Link>
                    </div>
                </div>
            </Guest>
        </>
    )
}
