"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

    function getCurrentCorrect() {
        console.log(currentPronomb);
        const conjugatedVerb = SpanishVerbs.getConjugation(currentVerb, currentTense.replace(' ', '_'), Pronomb.indexOf(currentPronomb));
        console.log(conjugatedVerb)
        return conjugatedVerb
    }

    useEffect(() => {
        console.log('asdasda asdasd 2');
        console.log(selectedVerbs);
        console.log(selectedVerbs.length);
        console.log(selectedTenses);
        console.log(selectedTenses.length);
        console.log(Pronomb);

        setCurrentVerb(selectedVerbs.length > 1 ? selectedVerbs[getRandomInRange(0, selectedVerbs.length - 1)] : selectedVerbs[0]);
        setCurrentTense(selectedTenses.length > 1 ? selectedTenses[getRandomInRange(0, selectedTenses.length - 1)] : selectedTenses[0]);


        setCurrentPronomb(Pronomb[getRandomInRange(0, 5)]);
      }, []);

    return (
        <div>
            a
            <div>{selectedVerbs}</div>
            <div>asd</div>
            {currentPronomb}
            <div>{currentTense}</div>
            <div>{currentVerb}</div>
            <div><span onClick={() => getCurrentCorrect()}>get</span></div>
        </div>
    )
}