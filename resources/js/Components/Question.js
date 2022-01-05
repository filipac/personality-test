import {Results} from '@/Pages/QuizPage'
import {CheckIcon} from '@heroicons/react/solid'
import {Inertia} from '@inertiajs/inertia'
import React, {useContext} from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CompletedQuestion = ({number, goToStep}) => {
    return <>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="h-0.5 w-full bg-primary" />
        </div>
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
                goToStep(number )
            }}
            className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-full hover:bg-indigo-900"
        >
            <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
            <span className="sr-only">Question {number}</span>
        </a>
    </>
}

const CurrentQuestion = ({number}) => {
    return <>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="h-0.5 w-full bg-gray-200" />
        </div>
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
            }}
            className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-primary rounded-full"
            aria-current="step"
        >
            <span className="h-2.5 w-2.5 bg-primary rounded-full" aria-hidden="true" />
            <span className="sr-only">Question {number}</span>
        </a>
    </>
}

const FutureQuestion = ({number}) => {
    return <>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="h-0.5 w-full bg-gray-200" />
        </div>
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
            }}
            className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
        >
                  <span
                      className="h-2.5 w-2.5 bg-transparent rounded-full md:group-hover:bg-gray-300"
                      aria-hidden="true"
                  />
            <span className="sr-only">Question {number}</span>
        </a>
    </>
}

export const Question = ({questions, question, questionIndex, ...quiz}) => {
    const [results, setResults] = useContext(Results)

    const submit = () => {

    }

    return <div className={'min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center'}>
        <div>
            <nav aria-label="Progress">
                <ol role="list" className="flex items-center">
                    {questions.map((q, index) => {
                        let Component
                        if (index < questionIndex) {
                            Component = CompletedQuestion
                        } else if (index === questionIndex) {
                            Component = CurrentQuestion
                        } else {
                            Component = FutureQuestion
                        }
                        return <li key={index}
                                   className={classNames(index !== questions.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
                            <Component number={index + 1} goToStep={quiz.goToStep} />
                        </li>
                    })}
                </ol>
            </nav>
        </div>
        <div className={'flex-1 mt-12'}>
            <div className={'font-semibold text-xl text-center'}>{question.question}</div>
            {question.answers.map((answer, idx) => <div key={answer.id}
                                                        className={classNames(
                                                            results[question.id] === answer.id ? 'bg-primary' : 'bg-white md:hover:bg-primary',
                                                            idx > 0 ? 'mt-2' : 'mt-12',
                                                            'p-4 rounded flex items-center group cursor-pointer',
                                                        )}
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            setResults(old => ({
                                                                ...old,
                                                                [question.id]: answer.id,
                                                            }))
                                                        }}>
                <div className={''}>
                    <input type="radio" className={'md:group-hover:hidden'} onChange={e => {
                    }} checked={results[question.id] === answer.id} />
                    <input type="radio" className={'hidden md:group-hover:inline-block bg-white ring-0'} onChange={e => {
                    }} checked />
                </div>
                <div className={classNames(
                    'flex-1 ml-2 text-lg md:group-hover:text-white md:group-hover:font-bold',
                    results[question.id] === answer.id ? 'text-white font-bold' : '',
                )}>
                    {answer.answer}
                </div>
            </div>)}
        </div>
        <div className={'w-full flex justify-between'}>
            <div>
                <button type="button"
                        className={classNames(
                            'inline-flex items-center transition px-6 py-3 border border-transparent rounded-md shadow-sm text-md transition focus:outline-none',
                            questionIndex > 0 ? 'bg-primary md:hover:bg-primary-darken text-white' : 'cursor-not-allowed bg-gray-200 text-gray-400',
                        )}
                        onClick={e => {
                            e.preventDefault()
                            if(quiz.currentStep != 1) {
                                quiz.previousStep()
                            }
                        }}
                >
                    Previous question
                </button>
            </div>
            <div>
                <button type="button"
                        className={classNames(
                            'inline-flex transition items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-md transition focus:outline-none',
                            results[question.id] ? 'bg-primary md:hover:bg-primary-darken text-white' : 'cursor-not-allowed bg-gray-200 text-gray-400',
                        )}
                        onClick={e => {
                            e.preventDefault()
                            if(results[question.id]) {
                                if(quiz.currentStep === quiz.totalSteps) {
                                    Inertia.visit('results', {
                                        method: 'post',
                                        data: {results}
                                    })
                                } else {
                                    quiz.nextStep()
                                }
                            }
                        }}
                >
                    {quiz.currentStep === quiz.totalSteps ? 'Finish quiz' : 'Next question'}
                </button>
            </div>
        </div>
    </div>
}
