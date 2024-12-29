"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckForm from "@/components/CheckForm";
import { RootState } from "@/types/typeVerbs";
import Pronomb from "@/data/pronomb";
import getRandomInRange from "@/util/getRandom";

export default function PracticeSelected() {
    const SpanishVerbs = require("spanish-verbs");
    const dispatch = useDispatch();
    const selectedVerbs = useSelector(
        (state: RootState) => state.selectedVerbs.selectedVerbs,
    );

    const selectedTenses = useSelector(
        (state: RootState) => state.selectedTenses.selectedTenses,
    );

    const [currentPronomb, setCurrentPronomb] = useState('');
    const [currentVerb, setCurrentVerb] = useState('');
    const [currentTense, setCurrentTense] = useState('');

    function getCurrentConjugated() {
        console.log(currentPronomb);
        let conjugatedVerb = '';
        if (currentVerb && currentTense) {
            conjugatedVerb = SpanishVerbs.getConjugation(currentVerb, currentTense.replace(' ', '_'), Pronomb.indexOf(currentPronomb));
        }
        
        console.log(conjugatedVerb)
        return conjugatedVerb
    }

    function randomiseVerbsAndTense() {
        setCurrentVerb(selectedVerbs.length > 1 ? selectedVerbs[getRandomInRange(0, selectedVerbs.length - 1)] : selectedVerbs[0]);
        setCurrentTense(selectedTenses.length > 1 ? selectedTenses[getRandomInRange(0, selectedTenses.length - 1)] : selectedTenses[0]);
        setCurrentPronomb(Pronomb[getRandomInRange(0, 5)]);
    }

    useEffect(() => {
        randomiseVerbsAndTense();
      }, []);

    return (
        <div>
            <div>   
                {selectedVerbs.map((item) => (
                    <span key={`selectedVerbs_item_${item}`}>{item} </span>
                ))}
            </div>
            
            <div>{currentPronomb} <i><b>{currentVerb}</b></i> in {currentTense}</div>
            <div className="flex items-start">
                <CheckForm correctAnswer={getCurrentConjugated()}></CheckForm>
                <div className="">
                    <button
                        className="ml-4 px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
                        onClick={() => randomiseVerbsAndTense()}
                    >next</button>
                </div>
            </div>
            
            
        </div>
    )
}