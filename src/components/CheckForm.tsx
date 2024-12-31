import { useState } from "react";

interface Props {
    correctAnswer: string
}

const CheckForm = ({correctAnswer = ''}: Props) => {
    const [query, setQuery] = useState('');
    const [showResult, setshowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [wantTooSee, setWantTooSee] = useState(false);


    function checkResult() {
        console.log(correctAnswer)
        setshowResult(true);
        setIsCorrect(query.toLowerCase() === correctAnswer.toLowerCase())
    }

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    className="px-4 py-2 mr-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="You're answer"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            checkResult();
                        }
                    }}
                    autoComplete="off"
                    style={{ minWidth: 300 }}
                />
                <button
                    onClick={() => checkResult()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Check answer</button>
            </div>
            {
                showResult && (
                    
                    <div>
                        {isCorrect ? (
                            <>
                                <span className="text-green-500">&#x2714;</span> {/* Checkmark icon */}
                                <span className="font-bold text-green-500">You're right!</span>
                            </>
                        ) : (
                            <>
                                <span className="text-red-500">&#x2716;</span> {/* Cross icon */}
                                <span className="font-bold text-red-500">Try again!</span>
                            </>
                        )}
                        <div>
                            {!isCorrect && wantTooSee && (
                                <div>The correct answer is {correctAnswer}</div>
                            )}
                            {!isCorrect && !wantTooSee && (
                                <div onClick={() => setWantTooSee(true)}>Show correct answer</div>
                            )}
                        </div>
                    </div>
                    
                )
            }
        </div>
    )
}

export default CheckForm