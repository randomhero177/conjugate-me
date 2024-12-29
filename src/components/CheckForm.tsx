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
            <div>
                <input
                    type="text"
                    className="px-4 py-2 mr-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                />
                <button
                    onClick={() => checkResult()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Check answer</button>
            </div>
            {
                showResult && (
                    
                    <div>
                        {isCorrect ? "You're right" : "Try again"}
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