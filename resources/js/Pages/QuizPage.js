import {Question} from '@/Components/Question'
import Guest from '@/Layouts/Guest'
import React, {useState} from 'react'
import {Link} from '@inertiajs/inertia-react'
import StepWizard from "react-step-wizard";

export const Results = React.createContext([])

export default function QuizPage({questions}) {
    const [results, setResults] = useState({})
    return (
        <>
            <Guest>

                    <Results.Provider value={[results, setResults]}>
                        <StepWizard>
                            {questions.map((q, index) => <Question question={q} questionIndex={index} questions={questions} key={q.id} /> )}
                        </StepWizard>
                    </Results.Provider>

            </Guest>
        </>
    )
}
